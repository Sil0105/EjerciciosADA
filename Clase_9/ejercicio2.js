// Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con valores numéricos de tu elección. 
// Pide al usuario que ingrese un número y verifica si está dentro del rango definido por las constantes.

const prompt = require('prompt-sync')();

const RANGO_MINIMO = 1
const RANGO_MAXIMO = 40

let numero_usuario = parseFloat(prompt("Ingrese un numero: "));

if (numero_usuario >= RANGO_MINIMO && numero_usuario <= RANGO_MAXIMO){
    console.log("El número esta dentro del rango");
}
else{
    console.log("El número está fuera del rango");
}
