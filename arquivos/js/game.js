// Controlando pelo teclado
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

var atualizaImagem = function () {
	randomNumber = Math.floor(Math.random() * camImagens.length);
	lixoImage.src = camImagens[randomNumber].substring(0,17);
}
// Resetando o jogo
var reset = function () {
	lixo.x = canvas.width / 2;
	lixo.y = canvas.height / 2;

    lixeira1.x = 167;
	lixeira1.y = 69;
	lixeira2.x = 434;
	lixeira2.y = 73;
	lixeira3.x = 171;
	lixeira3.y = 335;
	lixeira4.x = 444;
	lixeira4.y = 339;

};

// Controle das direções (Essa função verifica qual a tecla foi pressionada e reposiciona o lixo na tela).
var update = function () {
	
	if (38 in keysDown) { // para cima
		lixo.y -= lixo.speed ;
	}
	if (40 in keysDown) { // para baixo
		lixo.y += lixo.speed ;
	}
	if (37 in keysDown) { // para esquerda
		lixo.x -= lixo.speed ;
	}
	if (39 in keysDown) { // para direita
		lixo.x += lixo.speed ;
	}
	
	//verifica a colisão
	
	if (lixo.x <= (lixeira1.x + 32)	&& lixeira1.x <= (lixo.x + 32)	&&  lixo.y <= (lixeira1.y + 32)	&& lixeira1.y <= (lixo.y + 32) && camImagens[randomNumber].substring(20) == "metal") {
		++lixosRecolhidos;
		atualizaImagem();
		reset();
	}
	else if (lixo.x <= (lixeira2.x + 32) && lixeira2.x <= (lixo.x + 32)	&&  lixo.y <= (lixeira2.y + 32)	&& lixeira2.y <= (lixo.y + 32) && camImagens[randomNumber].substring(20) == "papel") {
		++lixosRecolhidos;
		atualizaImagem();
		reset();
	}
	else if (lixo.x <= (lixeira3.x + 32) && lixeira3.x <= (lixo.x + 32)	&&  lixo.y <= (lixeira3.y + 32)	&& lixeira3.y <= (lixo.y + 32) && camImagens[randomNumber].substring(20) == "plastico") {
		++lixosRecolhidos;
		atualizaImagem();
		reset();
	}
	else if (lixo.x <= (lixeira4.x + 32) && lixeira4.x <= (lixo.x + 32)	&&  lixo.y <= (lixeira4.y + 32)	&& lixeira4.y <= (lixo.y + 32) && camImagens[randomNumber].substring(20) == "vidro") {
		++lixosRecolhidos;
		atualizaImagem();
		reset();
	}
	else if (lixo.x <= (lixeira1.x + 32)	&& lixeira1.x <= (lixo.x + 32)	&&  lixo.y <= (lixeira1.y + 32)	&& lixeira1.y <= (lixo.y + 32) && camImagens[randomNumber].substring(20) != "metal") {
		--lixosRecolhidos;
		atualizaImagem();
		reset();
	}
	else if (lixo.x <= (lixeira2.x + 32) && lixeira2.x <= (lixo.x + 32)	&&  lixo.y <= (lixeira2.y + 32)	&& lixeira2.y <= (lixo.y + 32) && camImagens[randomNumber].substring(20) != "papel") {
		--lixosRecolhidos;
		atualizaImagem();
		reset();
	}
	else if (lixo.x <= (lixeira3.x + 32) && lixeira3.x <= (lixo.x + 32)	&&  lixo.y <= (lixeira3.y + 32)	&& lixeira3.y <= (lixo.y + 32) && camImagens[randomNumber].substring(20) != "plastico") {
		--lixosRecolhidos;
		atualizaImagem();
		reset();
	}
	else if (lixo.x <= (lixeira4.x + 32) && lixeira4.x <= (lixo.x + 32)	&&  lixo.y <= (lixeira4.y + 32)	&& lixeira4.y <= (lixo.y + 32) && camImagens[randomNumber].substring(20) != "vidro") {
		--lixosRecolhidos;
		atualizaImagem();
		reset();
	}
	
	
};

// Desenhando na tela
var render = function () {
	
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (lixoReady) {
		ctx.drawImage(lixoImage, lixo.x, lixo.y);
	}

	if (lixeiraReady) {
		ctx.drawImage(lixeiraImage1, lixeira1.x, lixeira1.y);
		ctx.drawImage(lixeiraImage2, lixeira2.x, lixeira2.y);
		ctx.drawImage(lixeiraImage3, lixeira3.x, lixeira3.y);
		ctx.drawImage(lixeiraImage4, lixeira4.x, lixeira4.y);
	}

	// Placar
	ctx.fillStyle = "#000";
	ctx.font = "30px Courier New";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Coleta Seletiva", 203, 23);
	
	ctx.fillStyle = "#000";
	ctx.font = "30px Courier New";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Pontuação: " + lixosRecolhidos, 230, 507);
};

// loop do jogo
var main = function () {
		update();
		render();
};

// Inicia o jogo

reset();
atualizaImagem();
setInterval(main, 1); 