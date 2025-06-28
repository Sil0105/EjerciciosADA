//Escribe un programa que le pida al usuario un número entero positivo y muestre todos los múltiplos de ese número entre 1 y 100. 
// Utiliza un ciclo for para resolverlo.

const prompt = require('prompt-sync')();

let numero = prompt("Ingresa un número entero positivo: ");
numero = Number(numero);

if (Number.isInteger(numero) && numero > 0) {

  console.log(`Los múltiplos de su ${numero} entre 1 y 100 son: `);

  for (let i = 1; i <= 100; i++) {
    if (i % numero === 0) {
      console.log(i);
    }
  }
}