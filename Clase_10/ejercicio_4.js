//Declara una variable llamada verdadero y asígnale un dato de tipo booleano (true o false).
//Declara una variable llamada texto y asígnale un string de tu elección (puedes usar cualquier mensaje que prefieras).
//Declara una variable llamada numero y asígnale un dato numérico (puedes usar cualquier número entero o decimal).
//Declara una variable llamada nada y asígnale un valor que represente la ausencia de valor en JavaScript.


const prompt = require("prompt-sync")({ sigint: true });

let verdadero = true 


let texto = "Hola, estoy aprendiendo Javascript"; 


let numero = parseInt(80.5);


let nada = null

console.log(numero + 145.5);

console.log(texto,"en un curso de ADA.");

console.log(verdadero != true ? "La variable es false" : "La variable es true");

console.log(nada == null ? "Sin valor" : "Con valor");