//Vamos a programar un semáforo. 
// Escribe un programa que le pida al usuario ingresar un color del semáforo: rojo, amarillo o verde.
//  Dependiendo del color ingresado, el programa debe imprimir un mensaje con la acción correspondiente:
//Rojo: "Alto, no puedes avanzar."
//Amarillo: "Precaución, prepárate para avanzar."
//Verde: "Avanza con seguridad."
//Si el usuario ingresa un color inválido, el programa debe mostrar un mensaje: "Color no reconocido, ingresa rojo, amarillo o verde."

const prompt = require('prompt-sync')();    

let colorSemaforo = prompt("Ingresa un color del semáforo (rojo, amarillo, verde): ")

colorSemaforo = colorSemaforo.toLowerCase();

switch (colorSemaforo) {
    case 'rojo':
        console.log("Alto, no puedes avanzar.");
        break;
    case 'amarillo':
        console.log("Precaución, prepárate para avanzar.");
        break;
    case 'verde':
        console.log("Puedes avanzar.");
        break;
    default:
        console.log("Color no reconocido, ingresa rojo, amarillo o verde.");
}


