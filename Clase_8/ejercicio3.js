//Pida al usuario que ingrese dos números.
//Sume ambos números.
//Muestre el resultado de la suma.

const prompt = require("prompt-sync")({ sigint: true });
let numeroA = parseFloat(prompt("Ingresa un número: "));
let numeroB = parseFloat(prompt("Ingresa otro número: "));

let suma = numeroA + numeroB;

console.log(`La suma de los números ingresados es: ${suma}`) 

