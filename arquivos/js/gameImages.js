// Criando o elemento canvas do HTML5
var canvas = document.getElementById("myCanvas"); //A tag <canvas> é usado para desenhar gráficos, normalmente através de JavaScript.
var ctx = canvas.getContext("2d"); //retorna um objeto com métodos e propriedades para desenhar na tela.
document.body.appendChild(canvas);

// Background do jogo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/coleta-seletiva.jpg";

// imagem do lixo
var lixoReady = false;
var lixoImage = new Image();
lixoImage.onload = function () {
	lixoReady = true;
};

// imagem da lixeira
var lixeiraReady = false;
var lixeiraImage1 = new Image();
lixeiraImage1.onload = function () {
	lixeiraReady = true;
};
lixeiraImage1.src = "images/metal.png";

var lixeiraReady = false;
var lixeiraImage2 = new Image();
lixeiraImage2.onload = function () {
	lixeiraReady = true;
};
lixeiraImage2.src = "images/papel.png";

var lixeiraReady = false;
var lixeiraImage3 = new Image();
lixeiraImage3.onload = function () {
	lixeiraReady = true;
};
lixeiraImage3.src = "images/plastico.png";

var lixeiraReady = false;
var lixeiraImage4 = new Image();
lixeiraImage4.onload = function () {
	lixeiraReady = true;
};
lixeiraImage4.src = "images/vidro.png";

// Objetos do jogo
var lixo = { speed: 3 }; /* pixels por segundo */
var camImagens = ["images/lixoM1.png - metal", "images/lixoM2.png - metal", "images/lixoP1.png - plastico", "images/lixoP2.png - plastico", "images/lixoA1.png - papel", "images/lixoA2.png - papel", "images/lixoV1.png - vidro", "images/lixoV2.png - vidro"]; 
camImagens.sort(function(a,b){ return b - a });
var lixeira1 = {};
var lixeira2 = {};
var lixeira3 = {};
var lixeira4 = {};
var randomNumber;
var lixosRecolhidos = 0;

var atualizaImagem = function () {
	randomNumber = Math.floor(Math.random() * camImagens.length);
	lixoImage.src = camImagens[randomNumber].substring(0,17);
}