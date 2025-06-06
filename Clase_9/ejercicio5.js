//Escribe un programa que pida al usuario que ingrese tres números y
//determine cuál es el mayor de los tres.

const prompt = require("prompt-sync")({ sigint: true });
let numero1, numero2, numero3;

numero1 = parseFloat(prompt("Ingresa el primer número: "));
numero2 = parseFloat(prompt("Ingresa el segundo número: "));
numero3 = parseFloat(prompt("Ingresa el tercer número: "));


if (numero1 > numero2 && numero1 > numero3) {
    console.log(`El número mayor es: ${numero1}`);
}   
else if (numero2 > numero1 && numero2 > numero3) {
    console.log(`El número mayor es: ${numero2}`);
}   
else if (numero3 > numero1 && numero3 > numero2) {
    console.log(`El número mayor es: ${numero3}`);
}   
else {
    console.log("Los números son iguales o no se pudo determinar un único mayor.");
}
