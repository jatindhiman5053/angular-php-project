<?php

header('Content-type: application/json');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
Header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

include("authconfig.php");

$username = $_REQUEST["username"];
$password = $_REQUEST["password"];

$sql = "SELECT * FROM auth WHERE username= '{$username}' AND password= '{$password}'";

$result = mysqli_query($conn, $sql);

if (!$result) {
    echo json_encode(array("error" => "SQL Query Failed: " . mysqli_error($conn)));
    exit();
}

if (mysqli_num_rows($result) > 0) {
    $output = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode(array("msg" => "Record Found", "status" => true));
} else {
    echo json_encode(array("msg" => "No Record Found", "status" => false));
}

mysqli_close($conn);

?>