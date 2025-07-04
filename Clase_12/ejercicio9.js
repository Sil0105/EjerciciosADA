//Ejercicio 9

let gastos = [
  [1135, 2500,  900, 1600, 2800, 3650, 1100], // Semana 1
  [1750, 1890, 1900, 1300,  898, 1750, 2800], // Semana 2
  [1700, 1150, 1690, 1900, 1770, 4500, 2560], // Semana 3
  [ 800, 1250, 1430, 2100, 1980, 1270,  950]  // Semana 4
];

// a)
const totalSemana = (matriz, semana) =>
  matriz[semana - 1].reduce((acc, num) => acc + num, 0);

console.log("Total semana 2:", totalSemana(gastos, 2));

// b)
const totalDia = (matriz, dia) =>
  matriz.reduce((acc, fila) => acc + fila[dia - 1], 0);

console.log("Total día 3:", totalDia(gastos, 3));
// c)
const totalMes = matriz =>
  matriz.flat().reduce((acc, num) => acc + num, 0);

console.log("Total del mes:", totalMes(gastos));
// d)
const semanaMayorGasto = matriz => {
  let index = 0;
  let max = 0;
  matriz.forEach((fila, i) => {
    const suma = fila.reduce((acc, num) => acc + num, 0);
    if (suma > max) {
      max = suma;
      index = i;
    }
  });
  return index + 1; // Ajustamos para contar desde semana 1
};

console.log("📈 Semana con más gastos:", semanaMayorGasto(gastos));

