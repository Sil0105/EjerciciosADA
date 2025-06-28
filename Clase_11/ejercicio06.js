//Crea un programa que le pida al usuario un número y luego imprima su tabla de multiplicar desde el 1 hasta el 10.
//  Usa un ciclo for.

const prompt = require('prompt-sync')();

let numero = prompt("Ingresa un número: ");

numero = parseInt(numero);

if (!isNaN(numero)) {
  console.log(`La tabla de multiplicar del ${numero} es:`);
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}
else {
  console.log("Numero inválido, ingresa otro numero por favor.");
}