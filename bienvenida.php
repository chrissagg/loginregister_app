<?php

    session_start();

    if(!isset($_SESSION['usuario'])){
        echo '
            <script>
                alert("Debes iniciar sesión");
                window.location = "indexForm.php";
            </script>
        ';
        header("location: indexForm.php");
        session_destroy();
        die();
    }
    
    session_destroy();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenid@</title>
</head>
<body>
    <h1>Bienvenid@s a mi app</h1>
    <a href="php/cerrar_sesion.php">Cerrar sesión</a>
</body>
</html>