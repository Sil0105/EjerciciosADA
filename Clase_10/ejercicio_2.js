// Escribe un programa que pida al usuario que ingrese su nombre, su edad y su peso, y
// luego muestre un mensaje personalizado que incluya toda esta información.

const prompt = require('prompt-sync')();


let nombre = prompt("¿Cómo te llamas? ");
let edad = prompt("¿Cuántos años tienes? ");
let peso = prompt("¿Cuánto pesas (kg)? ");

console.log(`¡Hola! ${nombre}, tenes ${edad} años y pesas ${peso}kg.`);