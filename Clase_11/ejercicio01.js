// Vamos a trabajar con números y aprender a clasificarlos. 
// Escribe un programa que le pida al usuario un número cualquiera. 
// El programa deberá analizar si el número ingresado es positivo, negativo o cero. 
// Utiliza estructuras if para resolverlo y muestra un mensaje explicativo en cada caso.

const prompt = require('prompt-sync')();

let num_usuario = prompt("Ingresa un número: ");

if (num_usuario > 0){
    console.log('El número es positivo');
} else if (num_usuario < 0) {
    console.log('El número es negativo');
} else if (num_usuario == 0) {
    console.log('El número es cero');
}
