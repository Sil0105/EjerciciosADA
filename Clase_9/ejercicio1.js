// Declara dos variables numéricas numero1 y numero2. Pide al usuario
// que ingrese dos números y muestra cuál es mayor o si son iguales.

const prompt = require("prompt-sync")({ sigint: true });

let numero1, numero2;

numero1 = parseInt(prompt("Ingresa un número entero: "));
numero2 = parseInt(prompt("Ingresa otro número entero: "));

if (numero1 > numero2){
    console.log(`El número ${numero1} es mayor que el número ${numero2}`);
}
else if (numero2 > numero1){
    console.log(`El número ${numero2} es mayor que el número ${numero1}`);
}
else {
    console.log(`El numero ${numero1} y el número ${numero2} son iguales`);
} 