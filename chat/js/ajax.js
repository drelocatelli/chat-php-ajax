window.onload = function(){
	var commentsHub = document.getElementById("comments-hub")
	var commentForm = document.getElementById("comment-form")

	// limpa a area antes de iniciar o chat
	function clearArea(){
		commentsHub.style = "display:none!important;";
		commentForm.style = "display:none!important;";
	}

	clearArea();
	

	var backgrd = document.querySelector('#background')

	backgrd.onclick = function(){
		this.style = "";
		backgrd.classList.remove('bgrdn');
		backgrd.classList.add('background');

		setTimeout(function(){
			commentsHub.style = "display:block!important;";
			commentForm.style = "display:inline-block!important;";
			var endchat = document.getElementById('end-chat');
			endchat.scrollIntoView({behavior: "smooth", block: "start", });
		}, 150)
	}

	// fecha o chat
	backgrd.ondblclick = function(){
		setTimeout(function(){
			clearArea();
			backgrd.classList.add('bgrdn');
			backgrd.classList.remove('background');
		}, 150)
	}

	// verifica localStorage ao iniciar
	// Inicia com o que foi gravado no LocalStorage
	document.getElementById('input-nome').value = localStorage.getItem('nome');

	var usuario = document.getElementById('input-nome').value;
	if(localStorage.getItem('nome').length >= 1){
		document.getElementById('input-nome').style = "display:none;";
	}
	

}// ao carregar a janela inteira

/*	envio de mensagem 	*/
/***************************************************************/
	function enviarMsg(){

		if(document.getElementById("input-mensagem").value.length < 1 | document.getElementById("input-nome").value.length < 1){

		}else{

				var xhttp = new XMLHttpRequest();

				xhttp.onreadystatechange = function(){
					if(this.readyState == 4 && this.status == 200){
						document.getElementById("status").innerHTML = this.responseText;	
					}
				};

				var inputmensagem = document.getElementById('input-mensagem').value
				var inputnome = document.getElementById('input-nome').value

				setTimeout(function(){
				// enviar a mensagem
				xhttp.open("GET", "includes/form.php?nome="+inputnome+"&mensagem="+inputmensagem, true);

				xhttp.send();

				// ReadOnly no texto usuario + desfocus text da msg
				setTimeout(function(){
					var inputnome = document.getElementById('input-nome')
					var inputmensagem = document.getElementById('input-mensagem')
					// inputnome.readOnly = true;
					inputnome.style = "display:none;";
					// inputnome.style = "background:rgb(197, 196, 196); color:#333";
					inputmensagem.autofocus = false;
					goChatEnd('smooth');

				}, 10);

				}, 400);

				// aviso mensagem enviada
				setTimeout(function(){
					// document.getElementById("status").innerHTML = "Entregue!";
				}, 0);
				setTimeout(function(){
					document.getElementById("status").innerHTML = "";
				}, 700);

				// apagar tudo após o envio 
				document.getElementById('input-mensagem').value = "";	
		}
	}


	// ao pressionar botão
	document.getElementById('sbmt').onclick = function(e){
		e.preventDefault();
		enviarMsg();
	}

	// ao apertar enter
	document.getElementById('input-mensagem').onkeypress = function(e){
		// console.log(e.key)
		goChatEnd('smooth')
		if(e.key == "Enter"){
			console.log("pressionou enter")
		// salva o usuário no computador
		var usuario = document.getElementById('input-nome').value;
		localStorage.setItem('nome', (`${usuario}`))
			enviarMsg();
		}
	}




/*	atualizar msgs 	*/
/***************************************************************/

function loadMsg(){
	var xhttp_select = new XMLHttpRequest();
  xhttp_select.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("comments-hub").innerHTML = this.responseText;
    }
  };
  xhttp_select.open("POST", "includes/show.php", true);
  xhttp_select.send();

}

// estiliza conforme envio do usuario
// muda ação ao detectar dono do chat
setInterval(function(){
	var chatNome = document.querySelectorAll("chat-nome")
	var formName = document.getElementById("input-nome")
	// console.log(chatNome.length)
	chatNome.forEach(function(item, index){

		// console.log('item: '+ item + '\nindex: '+ index)
		// console.log(chatNome[`${index}`].dataset.user)

		if(chatNome[`${index}`].dataset.user === formName.value){
			// console.dir(chatNome[`${index}`].outerText = "você")
			document.getElementById('statusMSG').innerHTML = "<font style='color:white;'>"+ "Entrou como " + "</font>" +  localStorage.getItem('nome') + "</font>";
		}
	})
}, 0.3);

// atualização das mensagens
	setInterval(function(){
		loadMsg();
	}, 120);


// scroll no final do conteudo
var backgrd = document.querySelector('#background');
var endchat = document.getElementById('end-chat');

function goChatEnd(behavior){	
	endchat.scrollIntoView({
		behavior: (`${behavior}`),
		block: "start",
	});
}

setTimeout(function(){
		goChatEnd('smooth');
},10);

backgrd.onclick = function (){
	goChatEnd('smooth');
}

window.onresize = function(){
	goChatEnd('smooth');
}

// movimentação do chat
document.getElementById("comments-hub").draggable = true;


//teste
// console.dir(document.querySelector('#datatest').dataset.test)