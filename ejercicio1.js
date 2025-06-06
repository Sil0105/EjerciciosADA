// Solicite al usuario que ingrese un número cualquiera.
//Calcule el doble de ese número.
//Muestre el resultado en la consola

const prompt = require('prompt-sync')();
let numero = prompt("Ingrese un número: ");     

numero = parseFloat(numero); 
let doble = numero * 2;          
console.log("El doble de " + numero + " da: " + doble); 

