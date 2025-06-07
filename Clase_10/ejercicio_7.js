//Declara dos variables con valores iniciales y luego intercambia sus valores. 
// Muestra los valores antes y después del intercambio en la consola.
//Para intercambiar valores puedes usar varios métodos(usando una variable temporal, aritmética o asignación simultanea),
//  eres libre de elegir el que desees, eso si, investiga sobre el que usaras.

const prompt = require("prompt-sync")({ sigint: true });
let variable1 = 10;
let variable2 = 20;
console.log(`Antes del intercambio: variable1 = ${variable1}, variable2 = ${variable2}`);

let result=prompt (' Necesitas cambiar algun valor?  (si/no):  '); 
if (result.toLowerCase() === 'si') {
    let nuevoValor1 = parseInt(prompt('Ingresa el nuevo valor para variable1: '));
    let nuevoValor2 = parseInt(prompt('Ingresa el nuevo valor para variable2: '));  
    variable1 = nuevoValor1;    
    variable2 = nuevoValor2;

    console.log(`Los nuevos valores son: variable1 = ${variable1}, variable2 = ${variable2}`);
} 
else {
    console.log('No se realizaron cambios en las variables.');
}
