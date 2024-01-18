<?php

header('Content-type: application/json');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
Header('Access-Control-Allow-Headers: Origin, Access-Control-Allow-Methods, Content-Type, Access-Control-Allow-Headers,X-Requested-With, Authorization');


$data = json_decode(file_get_contents("php://input"), true);

$name = $data["uname"]; 
$email = $data["uemail"];
$website = $data["uwebsite"];
$comment = $data['ucomment'];
$gender = $data['ugender'];

include("config.php");

$sql = "INSERT INTO emp_feedback(fname, email, website, comment, gender, DOC) VALUES ('{$name}', '{$email}', '{$website}', '{$comment}', '{$gender}', current_timestamp());";


if (mysqli_query($conn, $sql)) {
    echo json_encode(array("msg" => "Employee Added a Comment", "status" => true));
} else {
    echo json_encode(array("msg" => "Employee did not Added a Comment", "status" => false));
}
mysqli_close($conn);

?>