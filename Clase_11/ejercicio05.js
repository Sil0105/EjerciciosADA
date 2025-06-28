//Escribe un programa que le pida al usuario dos números enteros (inicio y fin). 
// El programa debe mostrar todos los números pares que se encuentran entre esos dos valores, incluyendo los límites si son pares. 
// Utiliza un ciclo for para recorrer los números entre el inicio y el fin. 
// Si el número inicial es mayor que el final, el programa debe mostrar un mensaje indicando que los valores son inválidos.

const prompt = require('prompt-sync')();

let numero = prompt("Ingresa un número: ");

numero = parseInt(numero);

if (!isNaN(numero)) {
  if (numero % 2 === 0) {
    console.log("¡Es par! 🎉");
  } else {
    console.log("Es impar 😢");
  }
} else {
  console.log("Por favor, ingresa un número válido.");
}
