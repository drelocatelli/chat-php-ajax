<?php

// Site name
$title = "Bate-papo";

// DB connect
$user = 'root';
$pass = '';
$db = 'comentarios';
$host = 'localhost';

$conn = mysqli_connect($host, $user, $pass, $db);
if(!$conn){
	die('Erro ao estabelecer conexão com o banco de dados:' . mysqli_connect_error());
}

?>