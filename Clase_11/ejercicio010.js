//Crea un programa donde la computadora seleccione un número al azar entre 1 y 10. 
// Luego, pide al usuario que adivine el número hasta 3 intentos. 
// Si el usuario acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén los intentos restantes. 
// Si no acierta después de los 3 intentos, muestra el número secreto. 


const prompt = require('prompt-sync')();

let numeroSecreto = Math.floor(Math.random() * 10) + 1;

let intentos = 3;
let acertado = false;
for (let i = 1; i <= intentos; i++) {
    let numeroUsuario = prompt(`Intento ${i}: Adivina el número entre 1 y 10: `);
    numeroUsuario = parseInt(numeroUsuario);

    if (numeroUsuario === numeroSecreto) {
        console.log("¡Felicidades! Adivinaste el número secreto .");
        acertado = true;
        break;
    } else {
        console.log("No es el numero, intenta otra vez!.");
    }
}