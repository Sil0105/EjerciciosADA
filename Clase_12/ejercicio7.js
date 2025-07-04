//Matriz 5x5
//Declara una variable que contenga una matriz de 5x5 llena de puros números enteros y positivos. 
// Luego, escribe un algoritmo para sumar todos los números en la matriz.


const matriz5x5 = [
  [1, 2, 26, 4, 5],
  [30, 7, 8, 9, 10],
  [11, 19, 13, 14, 15],
  [16, 17, 25, 19, 20],
  [21, 45, 23, 24, 32]
];
let sumaTotal = 0; 
for (let i = 0; i < matriz5x5.length; i++) {
  for (let j = 0; j < matriz5x5[i].length; j++) {
    sumaTotal += matriz5x5[i][j]; 
  }
}
console.log("La suma total de los números en la matriz 5x5 es:", sumaTotal);
