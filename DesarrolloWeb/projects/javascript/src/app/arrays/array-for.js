function printArray(arrayToPrint) {
  for (let i = 0; i < arrayToPrint.length; i++) {
    console.log(arrayToPrint[i]);
  }
}

let lista = ["pera", "manzana", "tomate"];

printArray(lista);

function sumArray(array) {
  let i = 0;
  let suma = 0;
  while (i < array.length) {
    console.log(array[i]);
    suma = suma + array[i];
    i++;
  }
  return suma;
}

let tablero = [];

let i = 0;
while (i < 3) {
  let j = 0;
  let fila = [];
  while (j < 3) {
    fila.push(".");
    j++;
  }
  tablero.push(fila);
  i++;
}

tablero[0][0] = "X";
tablero[1][2] = "O";

console.log({ sudoku: tablero });
