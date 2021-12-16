function start() { // Inicio da função start()

	$("#inicio").hide(); //$ é um comando do jQuery que faz a seleção de elementos do DOM. hide também é um comando jQuery
	
    // criação dos elementos
	$("#fundoGame").append("<div id='jogador' class='anima1'></div>");
	$("#fundoGame").append("<div id='inimigo1' class='anima1'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
	$("#fundoGame").append("<div id='amigo' class='anima3'></div>");

    //Principais variárveis do jogo
	
	var jogo = {}

    var TECLA = {
        seta_cima: 38,
        seta_baixo: 40,
        espaco: 32
    }

    var velocidade=6;
    var posicaoY = parseInt(Math.random() * 334);

    jogo.pressionou = [];

    let pode_atirar = true;

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

} // Fim da função