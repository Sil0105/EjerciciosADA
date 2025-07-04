//Para este ejercicio vamos a generar dos funciones:
//a) Una va a sumar los valores en la diagonal marcada en rojo.
//b) La otra va a marcar los valores de la diagonal marcada en verde.
//Ambas funciones deben devolver un resultado único. Rojo: 505,Verde:505


let matriz = [];
let numero = 1;

for (let i = 0; i < 10; i++) {
  let fila = [];
  for (let j = 0; j < 10; j++) {
    fila.push(numero); 
    numero++;
  }
  matriz.push(fila); // Agregamos la fila a la matriz
}


function sumarDiagonalRoja(matriz) {
  let suma = 0;
  for (let i = 0; i < matriz.length; i++) {
    suma += matriz[i][i]; 
  }
  return suma;
}

function sumarDiagonalVerde(matriz) {
  let suma = 0;
  for (let i = 0; i < matriz.length; i++) {
    suma += matriz[i][matriz.length - 1 - i]; 
  }
  return suma;
}


console.log(" Suma diagonal roja:", sumarDiagonalRoja(matriz)); 
console.log(" Suma diagonal verde:", sumarDiagonalVerde(matriz)); 