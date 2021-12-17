function start() { // Inicio da função start()

	$("#inicio").hide(); //$ é um comando do jQuery que faz a seleção de elementos do DOM. hide também é um comando jQuery
	
    // criação dos elementos
	$("#fundoGame").append("<div id='jogador' class='anima1'></div>");
	$("#fundoGame").append("<div id='inimigo1' class='anima1'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
	$("#fundoGame").append("<div id='amigo' class='anima3'></div>");
    $("#fundoGame").append("<div id='placar'></div>");
    $("#fundoGame").append("<div id='energia'></div>");

    //Principais variárveis do jogo
	
        var jogo = {}

        var fimdejogo=false;

        //sons do jogo
            var somDisparo=document.getElementById("somDisparo");
            var somExplosao=document.getElementById("somExplosao");
            var musica=document.getElementById("musica");
            var somGameover=document.getElementById("somGameover");
            var somPerdido=document.getElementById("somPerdido");
            var somResgate=document.getElementById("somResgate");

        var pontos=0;
        var salvos=0;
        var perdidos=0;

        var energiaAtual=3;

        var TECLA = {
            seta_cima: 38,
            seta_baixo: 40,
            espaco: 32
        }

        var velocidade=6;
        var posicaoY = parseInt(Math.random() * 334);

        jogo.pressionou = [];

        let pode_atirar = true;

    //M�sica em loop
        musica.play();
        
        musica.addEventListener("ended", function(){ 
            if(!fimdejogo){
                musica.currentTime = 0; musica.play(); 
            }
        }, false);
        
        
        
	//Verifica se o usu�rio pressionou alguma tecla	
	
	$(document).keydown(function(e){
	jogo.pressionou[e.which] = true;
	}); //acionado no momento que o jogador pressiona a tecla


	$(document).keyup(function(e){
       jogo.pressionou[e.which] = false;
	}); //acionado no momento que o jogador larga a tecla
	
	//Game Loop
    //O jogo.timer é um atributo do objeto jogo que faz a chamada da função loop a cada 30 milissegundos

	jogo.timer = setInterval(loop,30);
	
	function loop() {
	
	    movefundo();
        movejogador();
        moveinimigo1();
        moveinimigo2();
        moveamigo();
        colisao();
        placar();
        energia();
	
	} // Fim da função loop()

//Fun��o que movimenta o fundo do jogo
	
	function movefundo() {
	
	esquerda = parseInt($("#fundoGame").css("background-position"));
	$("#fundoGame").css("background-position",esquerda-3);
	
	} // fim da fun��o movefundo()

//Fun��o que movimenta o helicóptero do jogador

    function movejogador() {
	
        if (jogo.pressionou[TECLA.seta_baixo]) {
            
            var topo = parseInt($("#jogador").css("top"));
            if(topo<447){
                $("#jogador").css("top",topo+10);
            }
        
        }
        
        if (jogo.pressionou[TECLA.seta_cima]) {
            
            var topo = parseInt($("#jogador").css("top"));
            
            if(topo>20){
                $("#jogador").css("top",topo-10);
            }
            
        }
        
        if (jogo.pressionou[TECLA.espaco]) {
            
            disparo();	
        }
    
    } // fim da fun��o movejogador()

    function moveinimigo1() {

        posicaoX = parseInt($("#inimigo1").css("right"));
        $("#inimigo1").css("right",posicaoX+velocidade);
        $("#inimigo1").css("top",posicaoY);
            
            if (posicaoX>=700) {
                posicaoY = parseInt(Math.random() * 334);
                $("#inimigo1").css("right",10);
                $("#inimigo1").css("top",posicaoY);
            }
    } //Fim da fun��o moveinimigo1()

    function moveinimigo2() {
        posicaoX = parseInt($("#inimigo2").css("right"));
        $("#inimigo2").css("right",posicaoX+4);
                    
            if (posicaoX>=765) {
                
                $("#inimigo2").css("right",10);
                        
            }
    } // Fim da fun��o moveinimigo2()

    function moveamigo() {
	
        posicaoX = parseInt($("#amigo").css("left"));
        $("#amigo").css("left",posicaoX+1);
                    
            if (posicaoX>906) {
                
            $("#amigo").css("left",0);
                        
            }
    
    } // fim da fun��o moveamigo()

    function disparo() {
	
        if (pode_atirar==true) {
            
            somDisparo.play()

            pode_atirar=false;
        
            topo = parseInt($("#jogador").css("top"))
            posicaoX= parseInt($("#jogador").css("left"))
            tiroX = posicaoX + 190;
            topoTiro=topo+47;
            $("#fundoGame").append("<div id='disparo'></div");
            $("#disparo").css("top",topoTiro);
            $("#disparo").css("left",tiroX);
            
            var tempoDisparo=window.setInterval(executaDisparo, 30);
        
        } //Fecha podeAtirar
     
        function executaDisparo() {
            posicaoX = parseInt($("#disparo").css("left"));
            $("#disparo").css("left",posicaoX+15); 

            if (posicaoX>900) {
                    
                window.clearInterval(tempoDisparo);
                tempoDisparo=null;
                $("#disparo").remove();
                pode_atirar=true;
                
            }
        } // Fecha executaDisparo()
    } // Fecha disparo()

    function explosao1(inimigo1X,inimigo1Y) {
        $("#fundoGame").append("<div id='explosao1'></div");
        $("#explosao1").css("background-image", "url(assets/imgs/explosao.png)");
        var div=$("#explosao1");
        div.css("top", inimigo1Y);
        div.css("right", inimigo1X);
        somExplosao.play()
        div.animate({width:200, opacity:0}, 1000); //animate nesse caso é uma função do jQuery
        
        var tempoExplosao=window.setInterval(removeExplosao, 1000);
        
        function removeExplosao() {
            
            div.remove();
            window.clearInterval(tempoExplosao);
            tempoExplosao=null;
            
        }
            
    } // Fim da fun��o explosao1()

    //Explos�o2
	
	function explosao2(inimigo2X,inimigo2Y) {
        $("#fundoGame").append("<div id='explosao2'></div");
        $("#explosao2").css("background-image", "url(assets/imgs/explosao.png)");
        var div2=$("#explosao2");
        div2.css("top", inimigo2Y);
        div2.css("right", inimigo2X);
        somExplosao.play()
        div2.animate({width:200, opacity:0}, 1000);
        
        var tempoExplosao2=window.setInterval(removeExplosao2, 1000);
        
            function removeExplosao2() {
                
                div2.remove();
                window.clearInterval(tempoExplosao2);
                tempoExplosao2=null;
                
            }
            
            
    } // Fim da fun��o explosao2()

    //Explos�o3
	
    function explosao3(amigoX,amigoY) {
        $("#fundoGame").append("<div id='explosao3' class='anima4'></div");
        $("#explosao3").css("background-image","url(assets/imgs/amigo_morte.png)");
        $("#explosao3").css("top",amigoY);
        $("#explosao3").css("left",amigoX);
        somPerdido.play()
        var tempoExplosao3=window.setInterval(resetaExplosao3, 1000);
        function resetaExplosao3() {
            $("#explosao3").remove();
            window.clearInterval(tempoExplosao3);
            tempoExplosao3=null;
        }
    
    } // Fim da fun��o explosao3

//COLISÕES    

    function colisao() {
        
        var colisao1 = ($("#jogador").collision($("#inimigo1"))); //retorna um objeto com diversas informações sobre o evento de encontro (colisão) entre as divs #jogador e #inimigo1. Vem do framework jquery-collision.
        // jogador com o inimigo1
        var colisao2 = ($("#jogador").collision($("#inimigo2")));
        var colisao3 = ($("#disparo").collision($("#inimigo1")));
        var colisao4 = ($("#disparo").collision($("#inimigo2")));
        var colisao5 = ($("#jogador").collision($("#amigo")));
        var colisao6 = ($("#inimigo2").collision($("#amigo")));
        
        // jogador e inimigo1
        
        if(colisao1.length > 0){ //caso haja colisão entre as divs, a variável colisao1 terá conteúdo e seu length será maior que 0, portanto.

            energiaAtual--;

            inimigo1X = parseInt($("#inimigo1").css("right"));
            inimigo1Y = parseInt($("#inimigo1").css("top"));
            explosao1(inimigo1X,inimigo1Y);

            posicaoY = parseInt(Math.random() * 334);
            $("#inimigo1").css("right",10);
            $("#inimigo1").css("top",posicaoY);
        }

        // jogador com inimigo2

        if (colisao2.length>0) {

            energiaAtual--;
	
            inimigo2X = parseInt($("#inimigo2").css("right"));
            inimigo2Y = parseInt($("#inimigo2").css("top"));
            explosao2(inimigo2X,inimigo2Y);
                    
            $("#inimigo2").remove();
                
            reposicionaInimigo2();
                
        }
        
        // Disparo com o inimigo1
		
	    if (colisao3.length>0) {
            
            pontos=pontos+100;

            velocidade += 0.3;
            
            inimigo1X = parseInt($("#inimigo1").css("right"));
            inimigo1Y = parseInt($("#inimigo1").css("top"));
                
            explosao1(inimigo1X,inimigo1Y);
            $("#disparo").css("left",950); //ele optou por não dar o comando remove na div#disparo aqui porque colocando o left > 900 ela é já é removida na função disparo, que por sua vez também habilita o jogador a realizar um novo disparo. Caso removesse aqui nós teríamos que também definir o pode_atirar = true
                
            posicaoY = parseInt(Math.random() * 334);
            $("#inimigo1").css("right",10);
            $("#inimigo1").css("top",posicaoY);
            
        }

        // Disparo com o inimigo2
		
	    if (colisao4.length>0) {
            
            pontos=pontos+50;
            
            inimigo2X = parseInt($("#inimigo2").css("right"));
            inimigo2Y = parseInt($("#inimigo2").css("top"));
            $("#inimigo2").remove();
        
            explosao2(inimigo2X,inimigo2Y);
            $("#disparo").css("left",950);
            
            reposicionaInimigo2();
            
        }

        // jogador com o amigo
		
        if (colisao5.length>0) {
            somResgate.play()
            pontos += 100 //adicionei a pontuação de resgate
            salvos++;
            reposicionaAmigo();
            $("#amigo").remove();
        }

        // amigo com o inimigo2

        if (colisao6.length>0) {
            perdidos++;
            if(pontos >= 100){
                pontos-=100
            }else{
                pontos=0
            }
            amigoX = parseInt($("#amigo").css("left"));
            amigoY = parseInt($("#amigo").css("top"));
            explosao3(amigoX,amigoY);
            $("#amigo").remove();
                    
            reposicionaAmigo();
                    
        }
        
    
    } //Fim da fun��o colisao()

    //Reposiciona Inimigo2
	
    function reposicionaInimigo2() {
	
	    var tempoColisao4=window.setInterval(reposiciona4, 5000);
		
		function reposiciona4() {
		window.clearInterval(tempoColisao4);
		tempoColisao4=null;
			
			if (fimdejogo === false) {
			
			    $("#fundoGame").append("<div id=inimigo2></div");
			
			}
			
		}	
	}
    
    //Reposiciona Amigo
	
	function reposicionaAmigo() {
	
        var tempoAmigo=window.setInterval(reposiciona6, 6000);
        
            function reposiciona6() {
            window.clearInterval(tempoAmigo);
            tempoAmigo=null;
            
            if (!fimdejogo) {
            
                $("#fundoGame").append("<div id='amigo' class='anima3'></div>");
            
            }
            
        }
        
    } // Fim da fun��o reposicionaAmigo()

    // Função placar

    function placar() {
	
        $("#placar").html("<h2> Pontos: " + pontos + " Salvos: " + salvos + " Perdidos: " + perdidos + "</h2>");
        
    } //fim da fun��o placar()

    //Barra de energia

    function energia() {
        
        if (energiaAtual==3) {
            
            $("#energia").css("background-image", "url(assets/imgs/energia3.png)");
        }

        if (energiaAtual==2) {
            
            $("#energia").css("background-image", "url(assets/imgs/energia2.png)");
        }

        if (energiaAtual==1) {
            
            $("#energia").css("background-image", "url(assets/imgs/energia1.png)");
        }

        if (energiaAtual==0) {
            
            $("#energia").css("background-image", "url(assets/imgs/energia0.png)");
            
            gameOver();
            
        }

    } // Fim da fun��o energia()

    //Fun��o GAME OVER
    function gameOver() {
        fimdejogo=true;
        musica.pause();
        somGameover.play();
        
        window.clearInterval(jogo.timer);
        jogo.timer=null;
        
        $("#jogador").remove();
        $("#inimigo1").remove();
        $("#inimigo2").remove();
        $("#amigo").remove();
        
        $("#fundoGame").append("<div id='fim'></div>");
        
        $("#fim").html("<h1> Game Over </h1><p>Sua pontuação foi: " + pontos + "</p>" + "<div id='reinicia' onClick=reiniciaJogo()><h3>Jogar Novamente</h3></div>");
    } // Fim da fun��o gameOver();

    //Reinicia o Jogo

} // Fim da função start

function reiniciaJogo() {
    somGameover.pause();
    $("#fim").remove();
    start();
    
} //Fim da fun��o reiniciaJogo