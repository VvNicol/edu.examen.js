/**
 * 
 */
const baseDeDatos = [["Juanito", 7], ["Pepe", 8], ["Juan", 5], ["Manuel", 10], ["Alberto", 4], ["Igor", 2]];
const ruta = document.getElementById("base");
escritura(baseDeDatos)
let baseFiltrada = baseDeDatos.concat()
function escritura(nombre) {
	ruta.innerHTML = "";
	nombre.forEach((valor) => ruta.innerHTML += (valor + "<br>"))
}
/*ordenar*/
function alfabetico() {
	/*esto se hace para tener una copia de baseDeDatos sin que sean el mismo*/
	baseFiltrada = (baseFiltrada.concat())
	baseFiltrada.sort((a, b) => {
		/*se puede comparar string de esta manera*/
		if (a[0] > b[0]) {
			return 1
		}
		else
			return -1
	})
	escritura(baseFiltrada)
}
function notas() {
	baseFiltrada = (baseFiltrada.concat())
	baseFiltrada.sort((a, b) => {
		if (a[1] < b[1]) {
			return 1
		}
		else
			return -1
	})
	escritura(baseFiltrada)
}
function todos (){
	baseFiltrada = baseDeDatos.concat();
	escritura(baseFiltrada)
}
/*si no se usa sort siempre se puede hacer una unión de varios modos conocidos previamente*/
function nota() {
	baseFiltrada = (baseDeDatos.concat()).fill([0, 0])
	let base = (baseDeDatos.concat()).fill(-1)
	for (i = 0; i < baseDeDatos.length; i++) {
		baseDeDatos.forEach((aux, index) => {
			if (!base.some((numero) => numero == index))
				if (baseFiltrada[i][1] < aux[1]) {
					baseFiltrada[i] = aux
					base[i] = index
				}
		})
	}
	escritura(baseFiltrada)
}
/*filtrar*/
function filNota(valor) {
	baseFiltrada = baseDeDatos.filter((numero) => {
		if (valor == 0) {
			if (numero[1] < 5) {
				return numero
			}
		}
		else {
			if (numero[1] >= 5) {
				return numero
			}
		}
	})
	escritura(baseFiltrada)
}
/*otra manera */
function suspensos() {
	baseFiltrada = baseDeDatos.filter((numero) => {
		if (numero[1] < 5) {
			return numero
		}
	})
	escritura(baseFiltrada)
}

