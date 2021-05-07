<?php
	require_once('connect.php');
?>
<?php

	if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
	}

	$sql = "SELECT * FROM mensagem ORDER BY id ASC";

	$result = mysqli_query($conn, $sql);
	// print_r($result);
	$count = $result->num_rows;
	// echo $count . '<br>';

	if($count >= 24){
		mysqli_query($conn, "DELETE FROM mensagem");
	}
	
	if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
    	
?>
<div class="comment">
	<img src="img/ico2.png" height="12px"> <chat-nome data-user="<?php echo $row['nome']; ?>"><?php echo $row['nome']; ?></chat-nome> &nbsp;▸&nbsp;&nbsp;<?php echo $row['comment']; ?>
</div>
<separator></separator>
<?php 
    }
	} else {
	    // echo "O chat foi limpo.";
	}

mysqli_close($conn);

?>
