// Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la semana correspondiente. 
// Si el número no está dentro de ese rango, muestra un mensaje de error.

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Elige un número del 1 al 7: "));

if (numero === 1){
    console.log("¡Hola Es lunes!.");
} else if (numero === 2){
    console.log("¡Hola Es martes!.");
} else if (numero === 3){
    console.log("¡Hola Es miércoles!.");
} else if (numero === 4){
    console.log("¡Hola Es jueves!.");
} else if (numero === 5){
    console.log("¡Hola Es viernes!.");
} else if (numero === 6){
    console.log("¡Hola Es sábado!.");
} else if (numero === 7){
    console.log("¡Hola Es domingo!.");
} else {
    console.log("¡Error! Vuelve a intentarlo.");
}
