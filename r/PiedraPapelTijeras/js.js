var num = []; /* Números pulsados */
var texto = []; /* Cadena de texto de lo introducido */
var total = 0;
var cuenta = 0;

function signo(numero) {
    if (!Number(texto[numero - 1]) && texto[numero - 1] !== "0") {
        return true;
    } else {
        return false;
    }
}

function anadir(numero) {
    num.push(numero);
    texto.push(numero);
    document.getElementById("resultado").innerHTML = texto.join("");
}

function quitar() {
    if (signo(texto[texto.length - 1])) {
        texto.pop();
        num = texto.concat();
        console.log(num);
        total = 0;
        cuenta = 0;
    } else {
        texto.pop();
        num.pop();
    }
    document.getElementById("resultado").innerHTML = texto.join("");
}

function operacion(valor) {
    if (!num.join("") == "") {
        if (cuenta != 0) {
            calcular();
            texto.push(total);
            num = total.toString().split("");
            console.log(num);
        } else {
            total = Number(num.join(""));
        }
        num = [];
        switch (valor) {
            case 1: /*sumar*/
                texto.push("+");
                cuenta = 1;
                break;
            case 2: /*restar*/
                texto.push("-");
                cuenta = 2;
                break;
            case 3: /*multiplicar*/
                texto.push("x");
                cuenta = 3;
                break;
            case 4: /*dividir*/
                texto.push("/");
                cuenta = 4;
                break;
        }
        console.log(total);
        document.getElementById("resultado").innerHTML = texto.join("");
    } else {
        alert("Introduce números antes");
    }
}

function calcular() {
    switch (cuenta) {
        case 0:
            alert("No hay operación");
            break;
        case 1: /*sumar*/
            total += Number(num.join(""));
            break;
        case 2: /*restar*/
            total -= Number(num.join(""));
            break;
        case 3: /*multiplicar*/
            total *= Number(num.join(""));
            break;
        case 4: /*dividir*/
            total /= Number(num.join(""));
            break;
    }
    texto = [];
    num = [];
    cuenta = 0;
    document.getElementById("resultado").innerHTML = total;
}
