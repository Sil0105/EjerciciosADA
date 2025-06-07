//Comparaciones y Operadores Lógicos:
// Declara dos variables con valores numéricos. Utiliza operadores de comparación y lógicos para verificar si ambos números son mayores que 10 y muestra el resultado en la consola.
// Pasos a seguir:
//  Declara dos variables y asígnales valores numéricos de tu elección.
// Operadores de Comparación y Lógicos:
//  Utiliza los operadores > (mayor que) y && (y lógico) para verificar si ambos números son mayores que 10.
// Mostrar Resultado en la Consola:
// Utiliza console.log() para mostrar el resultado de la comparación.

const prompt = require("prompt-sync")({ sigint: true });
 let numero1 = 85;
 let numero2 = 200;

console.log(numero1 > 10 && numero2 > 10 ? "Ambos números son mayores que 10" : "Al menos uno no es mayor que 10");