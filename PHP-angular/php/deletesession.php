<?php

include("config.php");

header('Content-type: application/json');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
Header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

$username = $_REQUEST["username"];
$password = $_REQUEST["password"];


if ($username == "admin" && $password == "admin") {
    $sql = "SELECT * FROM auth WHERE username= '{$username}' AND password= '{$password}'";
} else {
    $encptpass = md5($password);
    $sql = "SELECT * FROM employee WHERE name= '{$username}' AND passwords= '{$encptpass}'";
}

$result = $conn->query($sql);
$row = $result->fetch_assoc();

if ($row['username'] == $username && password_verify($password, $row['password'])) {
    $_SESSION['username'] = $username;
    $_SESSION['loggedin'] = true; {
        json_encode(["success" => true, "message" => "You have logged in"]);
    }
} else { {
        json_encode(["success" => false, "message" => "Invalid credentials"]);
    }
}


?>