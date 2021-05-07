<?php 
	require_once('includes/connect.php');
?> 
<!DOCTYPE html>
<html lang="pt_BR">
<head>
	<meta charset="UTF-8">
	<link href="css/chat.css" rel="stylesheet" type="text/css">
	<title><?php echo $title; ?></title>
</head>
<body>

<!--------------- CHAT ------------------->
	<div id="chat-positioning">
		<div class="bgrdn" id="background">
		<div id="comments-hub">

		</div>
		
		<div id="end-chat"></div>

		<div class="comment-form" id="comment-form">
			<form action="includes/form.php" method="GET">
				<input type="text" id="input-nome" name="nome" placeholder="Nome" autofocus>
				<input type="text" id="input-mensagem" name="mensagem" placeholder="Digite sua mensagem...">
				<button id="sbmt" type="submit">enviar</button>
			</form>
			<h6 id="status"></h6>
		</div>
	</div>
	</div>
	

<script src="js/ajax.js"></script>

<!--------------- CHAT ------------------->
</body>
</html>
