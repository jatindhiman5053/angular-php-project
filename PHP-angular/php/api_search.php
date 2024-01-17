<?php

header('Content-type: application/json');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
Header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');


// $data = json_decode(file_get_contents("php://input"), true);
// $search_value = $data["uname"];

$search_value = isset($_GET['search_record']) ? $_GET['search_record'] : die();

include("config.php");

$sql = "SELECT * FROM emp WHERE fname LIKE '%{$search_value}%'";

$result = mysqli_query($conn, $sql) or die("SQL Query Failed");

if (mysqli_num_rows($result) > 0) {
    $output = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($output);

} else {
    echo json_encode(array("msg" => "No Record Found.", "status" => false));
}
mysqli_close($conn);

?>