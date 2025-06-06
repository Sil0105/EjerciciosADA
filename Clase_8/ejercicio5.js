//Solicite al usuario que ingrese su nombre.
//Muestre un saludo personalizado usando el nombre ingresado.

const prompt = require('prompt-sync')();
let nombre = prompt("Ingrese su nombre: ");

console.log("¡Hola, " + nombre + "! Bienvenida a ADA."); 