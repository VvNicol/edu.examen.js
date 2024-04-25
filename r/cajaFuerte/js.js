/**
 * 
 */
var intentosExitosos = 0;
var intentosFallidos = 0;
var tiempoInicio = null;
var tiempoLimite = 15 * 60 * 1000; // 15 minutos en milisegundos
var bloqueada = false;

var dados = {
	pr: 1,
	sc: 2,
	ter: 3
}
var user = {
	pr: 0,
	sc: 0,
	ter: 0
}
var secreto = ["texto", "usuarios", 3];

function caja() {
	alert("Introduce los valores correctos para continuar.");
	user.pr = prompt("Primer valor:");
	user.sc = prompt("Segundo valor:");
	user.ter = prompt("Tercer valor:");
	if (user.pr == dados.pr && user.sc == dados.sc && user.ter == dados.ter) {
		secreto[2] = 3;
		document.getElementById("p3").innerHTML = (secreto[0] + '<br>' + secreto[1] + '<br>' + '<button onclick="valores()">Valores</button><button onclick="change()">cambiar código</button>');
	}
	else {
		secreto[2]--;
		if (secreto[2] <= 0) {
			document.write('<h1>Bloqueada</h1>');
		}
		else {
			document.getElementById("p2").innerHTML = ('<h1>Fallaste</h1>' + secreto[2]);
		}
	}
}
function valores() {
	console.log("primero " + dados.pr);
	console.log("segundo " + dados.sc);
	console.log("tercero " + dados.ter);
}
function change() {
	dados.pr = prompt("Nuevo primer valor:");
	dados.sc = prompt("Nuevo segundo valor:");
	dados.ter = prompt("Nuevo tercero valor:");
	alert("Valores cambiados satisfactoriamente");
	document.getElementById("p2").innerHTML = (' ');
}
