<?php
require_once('connect.php');

	// SQL injection:
	$_GET['nome'] = htmlspecialchars($_GET['nome']);
	$_GET['mensagem'] = htmlspecialchars($_GET['mensagem']);

	$sql = "INSERT INTO mensagem(nome, comment) VALUES('".$_GET['nome']."','".$_GET['mensagem']."')";

	if(mysqli_query($conn, $sql)){

	}else{
		// echo "Error: " . $sql . "<br>" . mysqli_error($conn);
	}

mysqli_close($conn);

?>