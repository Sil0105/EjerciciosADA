//Solicite al usuario que ingrese un número entero.
//Determine si el número es par o impar.
//Muestre un mensaje indicando si el número es par o impar.

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingrese un número entero por favor: "));
let respuesta = "";

if (numero % 2 === 0) {
    respuesta = "El número " + numero + " es par.";
}   
else {
    respuesta = "El número " + numero + " es impar.";
}   

console.log(respuesta); 