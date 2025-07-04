//Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en un array. 
// Luego, solicita al usuario ingresar un nombre y verifica si ese nombre se encuentra en el array.
//  (Pueden desglosar en pasos el código si eso les facilita su desarrollo).
const prompt = require('prompt-sync')();


//Crear un array vacío para guardar los 5 nombres
let nombres = [];

// Usar un ciclo para pedir 5 nombres al usuario y guardarlos en el array
for (let i = 0; i < 5; i++) {
  let nombreIngresado = prompt(`Ingrese el nombre ${i + 1}:`);
  nombres.push(nombreIngresado); // Guardamos el nombre en el array
}

// Pedimos un nombre extra para buscar
let nombreABuscar = prompt("Ingrese un nombre para verificar si está en la lista:");

// Verificamos si el nombre está en el array usando includes()
if (nombres.includes(nombreABuscar)) {
  console.log(`El nombre "${nombreABuscar}" está en la lista.`);
} else {
  console.log(`El nombre "${nombreABuscar}" no está en la lista.`);
}
// Imprimimos el array de nombres
console.log("Nombres ingresados:", nombres);

