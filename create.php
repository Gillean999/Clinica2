<?php
include "db.php";
if ($_SERVER["RESQUEST_METHOD"] == "POST") {
    $title = $_POST ["title"];
    $description = $_POST ["description"];
    $status = $_POST ["status"]; 

    $sql = "INSERT INTO tasks (title, description,status) VALUES ("$title", "$description", "$status")";

    if ($conn->query($sql) === TRUE) {
        header("location: index.php");
        exit();
    } else {
        echo "erro as inserir tarefa:". $conn->error;
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>ADINIONAR NOVA TAREFA</h1>
    <form action="create.php" method="POST">
        <label for="title">Titulo</label>
        <input type="text" name="title" id="title" required>

        <label for="description">Descrição:</label>
        <textarea name="description" id="description" required></textarea>
 
        <label for="status">Status:</label>
        <select name="status" id="status">
            <option value="pendente">Pendente</option>
            <option value="em andamento">em andamento</option>
            <option value="concluida">concluida</option>
        </select>
        <button type="submit" class="button">Salvar</button>
    </form> 
</body>
</html>

