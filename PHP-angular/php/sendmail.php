<?php

header('Content-type: application/json');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
Header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

$to = $_REQUEST['email'];

$from = "jatin.dhiman@grazitti.com";
$subject = "forgot-password";
$message = "http://localhost:4200/forgot-password/Change-Password";
$headers = "From: $from";

ini_set("SMTP", "smtp.example.com");
ini_set("smtp_port", "25");

if (isset($_REQUEST['email'])) {
    if (mail($to, $subject, $message, $headers)) {
        echo "Mail Send";
    }
} else {
    echo "Mail Not Send";
}

?>