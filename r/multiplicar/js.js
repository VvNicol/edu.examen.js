const opciones = ["la piedra", "el papel", "las tijeras"]
function juego(usuario) {
	/*creamos la opción de nuestra máquina*/
	const maquina = Math.trunc(Math.random() * 3);
	/*si usamos round y x2 pasaría esto:
		0 a 0.5 = 0
		0.5 a 1.5 = 1 (es 3 veces más probable)
		1.5 a 2 = 2
	*/
	/*simplemente comparamos valores*/
	switch (usuario - maquina) {
		case 0: /*mismo valor->Piedra y Piedra; Tijeras y Tijeras; Papel y papel*/
			document.getElementById("resultado").innerHTML = ("Empate, ambos habeis sacado " + opciones[maquina]);
			break;
		case 1: /*La máquina ha sacado piedra, nosotros papel. O la máquina ha sacado papel y nosotros tijeras*/
			document.getElementById("resultado").innerHTML = ("¡Has ganado! " + opciones[usuario] + " " + "gana a " + opciones[maquina] + " " + "que ha sacado el rival.");
			break;
		case 2: /*piedra la máquina y tijeras el usuario*/
			document.getElementById("resultado").innerHTML = ("Derrota, " + opciones[maquina] + " " + "de la máquina gana a " + opciones[usuario]);
			break;
		case (-1): /*inversa del caso 1*/
			document.getElementById("resultado").innerHTML = ("Derrota, " + opciones[maquina] + " " + "de la máquina gana a " + opciones[usuario]);
			break;
		case (-2): /*inversa del caso 2*/
			document.getElementById("resultado").innerHTML = ("¡Has ganado! " + opciones[usuario] + " " + "gana a " + opciones[maquina] + " " + "que ha sacado el rival.");
			break;
	}

}
