<?php
$servername ="localhost";
$username ="root";
$password = "";
$dbname ="tashmaster_db";

$conn = new mysqli($servername,$username,$password,$dbname);
if ($conn->connerct_error) {
    die("conexão falhou: " . $conn->connection_error);  
}
?>
