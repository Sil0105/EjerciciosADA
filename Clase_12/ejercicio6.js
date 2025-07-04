//Iguales a 10 pero menores de 1000
// Dada una matriz, recorrer sus valores y sumar solo los números que estén por encima o sean iguales a 10, pero menores que 1000.


let matriz = [
  [10, 3, 2, 1, 4, 7],
  [5, 5, 10, 100, 4],
  [5, 125, 10, 1020, 4],
  [5, 5, 5097, 100, 4]
];


let suma = 0; //Creamos una variable para acumular la suma


for (let i = 0; i < matriz.length; i++) {
  
  for (let j = 0; j < matriz[i].length; j++) {  // Recorremos cada número dentro de la fila
    let numero = matriz[i][j];

    
    if (numero >= 10 && numero < 1000) { // vemos  si el número es mayor o igual a 10 y menor que 1000
      suma += numero; // sumamos el número si cumple la condición pedida.
    }
  }
}


console.log("La suma de los valores mayores o iguales a 10 y menores que 1000 es:", suma);

