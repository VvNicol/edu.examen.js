/**
 * 
 */
let fechaConstruida;
let fechaConstruidaSplit

function aviso() {
	const dia = prompt("Introduce un dia",10);
	const mes = prompt("Introduce un mes",10);
	const anyo = prompt("Introduce un anyo",2000);

	fechaConstruida = new Date(anyo, (mes - 1), dia);
	document.getElementById("fechaHoy").innerHTML = fechaConstruida;
}

function usandoSplit() {
	let recibirFecha = prompt("Introduce una fecha yyyy/mm/dd",20241010);
	recibirFecha = recibirFecha.split('/');

	fechaConstruidaSplit = new Date(recibirFecha[0], (recibirFecha[1] - 1), recibirFecha[2]);
	document.getElementById("resultado").innerHTML = fechaConstruidaSplit;
}

function calculadora() {
	
	let calcularFechas;

	if (fechaConstruidaSplit.getTime() > fechaConstruida.getTime()) {
		calcularFechas = new Date(fechaConstruidaSplit.getTime() - fechaConstruida.getTime());
	} else {
		calcularFechas = new Date(fechaConstruida.getTime() - fechaConstruidaSplit.getTime());
	}
	
	const diferenciaAnyo = calcularFechas.getFullYear() - 1970; 
	
	const ddia = calcularFechas.getDate() - 1;
	console.log (calcularFechas.getMonth())
	alert ("La diferencia es:'\n'Años: "+diferenciaAnyo+"'\n'Meses:"+calcularFechas.getMonth()+"'\n'Dias:"+ddia)
	
	document.getElementById("calcular").innerHTML = calcularFechas;
}
