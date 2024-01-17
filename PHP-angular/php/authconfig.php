<?php

$hostname = "localhost";
$dbName = "grazitti";
$username = "root";
$password = "";
$port = 3307;

$conn = new mysqli($hostname, $username, $password, $dbName, $port) or die("Connection Faild" . mysqli_error($conn));

?>