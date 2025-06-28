//Los números pueden ser pares o impares.
//  Escribe un programa que le pida al usuario un número y determine si es par o impar. 
// Muestra un mensaje explicativo indicando qué significa cada caso.

const prompt = require('prompt-sync')();

let num_usuario = prompt("Ingresa un número: ");

if (num_usuario % 2 === 0) {
    console.log('Su número es par');
}   else {
    console.log('Su número es impar');
}           

