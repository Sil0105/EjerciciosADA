//Cálculo del IMC: Escribe un programa que calcule el Índice de Masa Corporal (IMC). 
// El IMC se calcula con la fórmula: IMC = peso / (altura * altura),
//Pide al usuario que ingrese su peso y su altura, y muestra el IMC calculado.
//Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
//Pista 2: La fórmula puede representarse asi: let imc = peso / (altura * altura)


const prompt=require('prompt-sync')();

let pesokg=parseFloat(prompt(' Cual es tu peso en kilogramos ')); 
let altura=parseFloat(prompt(' Cual es tu altura en metros:  ')); 

let IMC= (pesokg/(altura*altura)); 

console.log (' Tu IMC es:  '+ IMC);

