// con var no tenemos ámbito de bloque
// (podemos acceder a la variable desde cualquier parte del código)
// esto hace difícil de controlar que el código  se comporta como esperamos
// HAY QUE EVITAR SU USO
var variable = "un texto";

// con let SÍ tenemos ámbito de bloque
// esto ayuda a evitar comportamientos inesperados
// FORMA RECOMENDADA
let nombreVariable = "valor";

// PARA CONSTANTES (NO CAMBIAN)
const PI = 3.14;
console.log({ PI });
// no se puede reasignar
// nombreConstante = 4 // ERROR

// en JS no tenemos que indicar qué tipo de dato vamos a guardar en la variable
// simplemente le damos un valor y JS se comportará según corresponda
// ver el fichero tipos.js
let numeroEntero = 23;
let numeroDecimal = 23.2;
let verdadero = true;
let falso = false;
let nombreYApellidos = "Juan López ...";
let objeto = { nombre: "Juan", apellido: "López", edad: 32 };
// ver listas.js
let lista = [1, 2, "tres"];

// podemos mostrar por consola el valor de una variable
console.log(numeroEntero);

// podemos pasar la variable entre llaves {numeroEntero}
// y estaremos creando un objeto como {numeroEntero: 23}
// a veces puede ser útil para ver rápidamente por consola qué variable estamos imprimiendo
console.log({ numeroEntero });
