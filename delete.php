<?php
include 'db.php';
$id = $_get['id"];

if ($conn->query($sql) === true) {
    header("location: index.php");
}else {
   echo "erro ao exluir tarefa:" . $conn->error;
}
?>
