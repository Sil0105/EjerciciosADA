// Pasos a seguir:
// Declaración y Asignación de Variables
// Declara y asigna un valor numérico a dos variables: primerNumero y segundoNumero.
//Declara las siguientes variables: resultadoSuma, resultadoResta, resultadoMultiplicacion, resultadoDivision.
//Asigna a cada una de estas variables el resultado de la suma, resta, multiplicación y división de las variables primerNumero y segundoNumero.

const prompt = require("prompt-sync")({ sigint: true });
let primerNumero = 85;

let segundoNumero = 25;

let resultadoSuma = primerNumero + segundoNumero;
let resultadoResta = primerNumero - segundoNumero;
let resultadoMultiplicacion = primerNumero * segundoNumero;
let resultadoDivision = primerNumero/segundoNumero;

console.log(resultadoSuma);
console.log(resultadoResta);
console.log(resultadoMultiplicacion);
console.log(resultadoDivision);