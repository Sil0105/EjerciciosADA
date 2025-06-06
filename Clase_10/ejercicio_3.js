// Más adelante vamos a querer validar que nuestros encuestados sean de 18 años de
// edad mínima y 99 años de edad máxima.
// Nadie puede cambiar esas definiciones, por lo tanto, vamos a escribirlas en dos
// constantes (asignándoles los valores numéricos 18 y 99 respectivamente). Por último,
// Deberás pedirle al usuario que ingrese su edad para validarla usando parseInt.

const prompt = require('prompt-sync')();


const EDAD_MINIMA = 18
const EDAD_MAXIMA = 99


edad_usuario = parseInt(prompt("Ingrese su edad: "));


if (edad_usuario>=EDAD_MINIMA && edad_usuario<=EDAD_MAXIMA){
    console.log("La edad está dentro del rango de 18 a 99 años.");
} else{
    console.log("La edad está fuera del rango.")
}