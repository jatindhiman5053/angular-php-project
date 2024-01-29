<?php

include("config.php");

header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT');
Header('Access-Control-Allow-Headers: Origin, Access-Control-Allow-Methods, Content-Type, Access-Control-Allow-Headers, X-Requested-With, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Access-Control-Allow-Headers, X-Requested-With, Authorization');
    exit;
}

$email = $_GET["email"];
$password = $_GET["newpassword"];

echo $email;
echo $password;

$newpassword = md5($password);

$sql = "UPDATE `employee` SET passwords='{$newpassword}' WHERE email='{$email}'";

if (mysqli_query($conn, $sql)) {
    echo json_encode(array("msg" => "Password Changed Successfully", "status" => true));
} else {
    echo json_encode(array("msg" => "Password did not Changed Successfully", "status" => false));
}

mysqli_close($conn);

?>
