// los arrays o "arreglos" son listas de elementos

// array de strings con nombres de frutas
const listaFrutas = ["mango", "piña", "melocoton"];

// recorrer el array imprimiendo cada elemento en un párrafo
let i = 0;
while (i < listaFrutas.length) {
  const fruta = listaFrutas[i];
  document.write(`<p class="text-success">${fruta}</p>`);
  i++;
}

// añadir elemento
listaFrutas.push("sandía");

// seleccionar el elemento en la primera posición
const mangp = listaFrutas[0];

// seleccionar el elemento en la tercera posición
const melocoton = listaFrutas[2];

// obtener la longitud (numero de elementos) de un array
const cantidadFrutas = listaFrutas.length;

// en js podemos tener listas con elementos de diferentes tipos a la vez,
// esto no es así en todos los lenguajes
// siempre separamos los elementos con coma (,)
const listaDiferentesTipos = [
  17,
  "manzana",
  new Date(),
  -1.24,
  { edad: 26, profesion: "programador" },
];

// crear una nueva lista vacía
// añadir los números del 1 al 10 (con bucle)
// mostrar la lista completa: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let lista = [];

let index = 1;

while (index <= 10) {
  lista.push(index);
  index++;
}

console.log({ lista });

lista = [];

let j = 0;

while (j < 10) {
  lista.push(++j);
}

console.log({ lista });

lista = [];

while (lista.length < 10) {
  lista.push(lista.length + 1);
}

console.log({ lista });
