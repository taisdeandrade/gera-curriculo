    //função para clonar a div exp
	$(document).ready(function(){
		$("#mais").click(function(){
			//$(".exp").clone().appendTo(".maisexp");
            var novaDiv = document.querySelector("#exp").cloneNode(true);
            novaDiv.removeAttribute("id");
            document.querySelector(".maisexp").appendChild(novaDiv);
            
		});
	});

    //Função para abrir a caixa de impressão
    $(document).ready(function(){
        $("#imprime").click(function(){
            //Pega o corpo do documento e armazena em pagina
            var pagina = document.body.innerHTML;
            //Armazena a pagina na variavel impresso 
		    var impresso = document.write(pagina);
            //Armazena o botão em uma variavel
            var botaoImprime = document.getElementById("imprime");
            var botaoVoltar = document.getElementById("voltar");
            //esconde o botão para impressão
            botaoImprime.style.visibility = "hidden";
            botaoVoltar.style.visibility = "hidden";
            //Imprime a pagina sem o botão
			print(impresso);
            //Retorna o botão
            botaoImprime.style.visibility = "visible";
            botaoVoltar.style.visibility = "visible";

        });    
    });
	
	

