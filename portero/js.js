/**
 * 
 */
const mayorEdad = 18 * 365 * 24* 60 *60 *1000;
function portero (){	
		let nacimiento;
		do{
			nacimiento=prompt("introduzca su fecha de nacimiento, en el formato indicado","dia/mes/año");
			nacimiento=nacimiento.split("/");
			
		}
		while(!nacimiento.every(function (numero){
			if(Number(numero))
				return true
		}))
		const fecha = new Date(nacimiento[2], nacimiento[1]-1, nacimiento[0]);
	 	const hoy = new Date()
	 	console.log (hoy-fecha);
	 	
	 	if ((hoy.getTime()-fecha.getTime())>=mayorEdad)
	 		alert("Adelante")
	 	else
	 		alert("Vuelva más adelante")
		
}
