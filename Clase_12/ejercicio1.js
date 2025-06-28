//Crea un programa que solicite al usuario ingresar números continuamente hasta que el usuario ingrese un número negativo. 
// Luego, imprime la suma de todos los números ingresados.

const prompt = require('prompt-sync')();

let suma = 0;

while (true) {
    let numero = prompt("Ingresa un número , si quieres salir que sea negativo : ");
    numero = Number(numero);

    if (numero < 0) {
        break; 
    }

    suma += numero; 
}
console.log(`La suma de todos los números es: ${suma}`);
