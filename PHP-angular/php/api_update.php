<?php

header('Content-type: application/json');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
Header('Access-Control-Allow-Headers: Origin, Access-Control-Allow-Methods, Content-Type, Access-Control-Allow-Headers,X-Requested-With, Authorization');


$data = json_decode(file_get_contents("php://input"), true);

$id = $data["uid"];
$name = $data["uname"];
$email = $data["uemail"];
$website = $data["uwebsite"];
$comment = $data['ucomment'];
$gender = $data['ugender'];

include("config.php");

$sql = "UPDATE `emp` SET fname='{$name}', email='{$email}', website='{$website}',comment='{$comment}', gender='{$gender}', DOC='current_timestamp()' WHERE emp_id= '{$id}'";

if (mysqli_query($conn, $sql)) {
    echo json_encode(array("msg" => "Employee Updated a Comment", "status" => true));
} else {
    echo json_encode(array("msg" => "Employee did not Updated a Comment", "status" => false));
}
mysqli_close($conn);

?>