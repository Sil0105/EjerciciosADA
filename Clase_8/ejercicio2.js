//Pida al usuario que ingrese un número.
//Verifique si el número es positivo, negativo o igual a cero.
//Muestre un mensaje indicando cuál es el caso.

const prompt = require('prompt-sync')();

let numero = prompt("Ingrese un número: ");
let respuesta = "";

if (numero > 0) {
    console.log("El número " + numero + " es positivo.");
}
else if (numero < 0) {
    console.log("El número " + numero + " es negativo.");
}
else {  
    console.log("El número es igual a cero.");
}   

console.log (respuesta)
