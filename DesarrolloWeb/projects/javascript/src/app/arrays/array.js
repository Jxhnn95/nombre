// ejercicio 1
// imprimir los elementos de un array

function printArray(arrayToPrint) {
  let i = 0;
  while (i < arrayToPrint.length) {
    console.log(arrayToPrint[i]);
    i++;
  }
}

let array = [1, 2, 3, 4, 5];
// printArray(array);

// ejercicio 2
// sumar los elementos de un array
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
const resultado = sumArray(array);
// console.log(resultado);

// ejercicio 3
// Encontrar el número mayor en un array
function findMax(array) {
  let i = 0;
  // le damos el valor del primer elemento
  let mayor = array[i];

  while (i < lista.length) {
    // console.log(i, array[i], mayor);
    if (array[i] > mayor) {
      mayor = array[i];
    }
    i++;
  }
  return mayor;
}

let lista = [5, 2, 9, 1, 7];
let listaNegativos = [-5, -2, -9, -1, -7];
const nMayor = findMax(listaNegativos);
console.log(nMayor);

// Ejercicio 4
// contar el número de elementos pares (divisible entre 2)
function paresArray(array) {
  let pares = 0;
  let i = 0;

  while (i < array.length) {
    if (array[i] % 2 === 0) {
      pares++;
    }
    i++;
  }
  return pares;
}

let listaConPares = [1, 2, 2, 3, 3, 4, 5, 8, 16, 94];

const numeroPares = paresArray(listaConPares);
console.log({ numeroPares });

// Ejercicio 5
// buscar la posición (i) de un elemento
function findElement(array, objetivo) {
  let i = 0;
  while (i < array.length) {
    if (array[i] === objetivo) {
      return i;
    }
    i++;
  }
  return -1;
}

let posicionNumero = findElement(listaConPares, 3); // 6
console.log({ posicionNumero });

// Ejercicio 6
// comprobar si todos son positivos
function arePositive(array) {
  let i = 0;
  while (i < array.length) {
    if (array[i] < 0) {
      return false;
    }
    i++;
  }
  return true;
}

function arePositive2(array) {
  let i = 0;
  let positive = true;
  while (i < array.length) {
    positive = positive && array[i] < 0;
    i++;
  }
  return positive;
}

let arrayConNegativo = [1, 2, -3, 4, 5];

let todosPositivos = arePositive(arrayConNegativo);

console.log({ todosPositivos });

// Ejercicio 7
// calcular la media de los elementos
function calculateAverage(lista) {
  return sumArray(lista) / lista.length;
}

function calculateAverage2(lista) {
  let i = 0;
  let total = 0;
  while (i < lista.length) {
    let valor = lista[i];
    total += valor;
    i++;
  }
  return total / lista.length;
}

let arrayParaMedia = [10, 20, 30, 40, 50];
let media = calculateAverage(arrayParaMedia);
console.log({ media });

// Ejercicio 8
// invertir el orden de un array
function invertArray(array) {
  let i = array.length - 1;
  let reverseArray = [];

  while (i >= 0) {
    reverseArray.push(array[i]);
    i--;
  }
  return reverseArray;
}

let arrayParaInvertir = [1, 2, 3, 4, 5];

let arrayInvertido = invertArray(arrayParaInvertir);
console.log({ arrayInvertido });

// Ejercio 9
// eliminar duplicados en un array
function removeDuplicates(array) {
  let arrayUnicos = [];
  let i = 0;
  while (i < array.length) {
    let currentElement = array[i];
    // let positionInUnicos = arrayUnicos.indexOf(currentElement);
    let positionInUnicos = findElement(arrayUnicos, currentElement);
    let isNotInArray = positionInUnicos == -1;
    if (isNotInArray) {
      arrayUnicos.push(currentElement);
    }
    i++;
  }
  return arrayUnicos;
}

let arrayDuplicados = [1, 2, 2, 3, 4, 4, 5];
let arrayUnicos = removeDuplicates(arrayDuplicados);
console.log({ arrayUnicos });

// Ejercicio 10
let arrayDesordenado = [5, 2, 9, 1, 7];

function sortArray(array) {
  let i = 0;
  // para ver si el array ya está ordenado
  let sorted = true;
  // terminamos en array.length - 2 porque trabajamos por parejas (i e i+1)
  while (i < array.length - 1) {
    // para intercambiar valores
    let aux = null;
    // comprobar si la pareja actual (i e i+1) están ordenados
    let isSortedPair = array[i] < array[i + 1];

    // si la pareja actual no está ordenada, el array no está ordenado
    sorted = sorted && isSortedPair;

    // si la pareja no está ordenada, intercambiamos los valores
    if (!isSortedPair) {
      aux = array[i + 1];
      array[i + 1] = array[i];
      array[i] = aux;
    }

    i++;

    // si es el final y había parejas desordenadas volvemos a empezar
    if (i == array.length - 1 && !sorted) {
      i = 0;
      sorted = true;
    }
  }
  return array;
}

let arrayOrdenado = sortArray(arrayDesordenado);
console.log({ arrayOrdenado });

// bubble sort
// selection sort
// quick sort (recursión)
// merge sort (divide y vencerás)
// arboles binarios
