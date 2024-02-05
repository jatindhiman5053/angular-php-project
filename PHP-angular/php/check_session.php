<?php
session_start();

header('Content-type: application/json');
header('Access-Control-Allow-Origin:*');

if (isset($_SESSION['user'])) {
    // Session is active, return user details
    echo json_encode($_SESSION['user']);
} else {
    // Session not found or expired
    echo json_encode(array("msg" => "Session not found", "status" => false));
}
?>