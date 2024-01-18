<?php

header('Content-type: application/json');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
Header('Access-Control-Allow-Headers: Origin, Access-Control-Allow-Methods, Content-Type, Access-Control-Allow-Headers,X-Requested-With, Authorization');


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Access-Control-Allow-Methods, Content-Type, Access-Control-Allow-Headers, X-Requested-With, Authorization');
    exit();
}

include("config.php");
$data = json_decode(file_get_contents("php://input"), true);

$name = $data["username"];
$age = $data["userage"];
$email = $data["useremail"];
$gender = $data['usergender'];
$strpassword = $data['userpassword'];
$password = md5($strpassword);

$sql = "INSERT INTO employee(name, age, email, gender, passwords, DOJ) VALUES ('{$name}', '{$age}', '{$email}', '{$gender}', '{$password}', current_timestamp());";

if (mysqli_query($conn, $sql)) {
    echo json_encode(array("msg" => "User register successfully", "status" => true));
} else {
    echo json_encode(array("msg" => "User did not register successfully", "status" => false));
}
mysqli_close($conn);

?>