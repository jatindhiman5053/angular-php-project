<?php

header('Content-type: application/json');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods: DELETE');
Header('Access-Control-Allow-Headers: Origin, X-Requested-With, Access-Control-Allow-Methods, Content-Type, Accept');

$data = json_decode(file_get_contents("php://input"), true);
$id = $_REQUEST["emp_id"];

include("config.php");

$sql = "DELETE FROM emp_feedback WHERE emp_id= '{$id}'";

if (mysqli_query($conn, $sql)) {
    echo json_encode(array("msg" => "Employee Deleted a Comment", "status" => true));
} else {
    echo json_encode(array("msg" => "Employee did not Deleted a Comment", "status" => false));
}


mysqli_close($conn);


?>