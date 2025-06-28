//Escribe un programa que solicite al usuario ingresar una contraseña. 
// Si la contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese la correcta. 
// La contraseña correcta es "1234".

const prompt = require('prompt-sync')();

let contraseñaCorrecta = "1234";

let intento;

do {
  intento = prompt("Ingresá la contraseña: ");
  
  if (intento !== contraseñaCorrecta) {
    console.log("Contraseña incorrecta! Escribe nuevamente la contraseña.");
  }

} while (intento !== contraseñaCorrecta);

console.log("¡Contraseña correcta! Bienvenido al sistema.");