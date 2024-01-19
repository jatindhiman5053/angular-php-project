<?php

session_start();

header('Content-type: application/json');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
Header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

include("config.php");
$username = $_REQUEST["username"];
$password = $_REQUEST["password"];


if ($username == "admin" && $password == "admin") {
    $sql = "SELECT * FROM auth WHERE username= '{$username}' AND password= '{$password}'";
} else {
    $encptpass = md5($password);
    $sql = "SELECT * FROM employee WHERE name= '{$username}' AND passwords= '{$encptpass}'";
}

if ($username == "admin" && $password == "admin") {
    $_SESSION["admin"] = $username;
} else {
    $_SESSION["user"] = $username;
}

$result = mysqli_query($conn, $sql);

if (!$result) {
    echo json_encode(array("error" => "SQL Query Failed: " . mysqli_error($conn)));
    exit();
}

if (mysqli_num_rows($result) > 0) {
    if ($username == "admin" && $password == "admin") {
        $output = mysqli_fetch_all($result, MYSQLI_ASSOC);
        echo json_encode(array("msg" => "Record Found {$username}", "status" => true));
    } else {
        $output = mysqli_fetch_all($result, MYSQLI_ASSOC);
        echo json_encode(array("msg" => "Record Found {$username}", "status" => true));
    }
} else {
    echo json_encode(array("msg" => "No Record Found", "status" => false));
}

mysqli_close($conn);

?>