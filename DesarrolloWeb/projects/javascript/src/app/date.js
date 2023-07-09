// new Date() crea una nueva fecha con el valor de la fecha actual
let now = new Date();

console.log({ ahora: now });

// consultores
let horas = now.getHours();
let minutos = now.getMinutes();
let year = now.getFullYear();
let mes = now.getMonth();
// ... hay más

// milisegundos desde 1 de enero de 1970
// útil para trabajar con una fecha como si fuera un número entero
let formatoTime = now.getTime();

console.log({ horas, minutos, mes, year, formatoTime });

// modificadores
now.setFullYear(2024);
now.setHours(11);
now.setMinutes(25);
// ... hay más

console.log({ ahora: now });

// Ejercicio
// implementar un programa que salude
// 6am a 12 am -> Buenos días
// 13 a 19 -> Buenas tardes
// 20 a 5am  -> Buenas noches

let ahora = new Date();

let horaAactual = ahora.getHours();

const inicioDia = 6;
const inicioTarde = 13;
const inicioNoche = 20;

// es buena práctica guardar los textos en variables
// más fácil de mantener y actualizar sin romper otras partes del código
const msgBuenosDias = "¡Buenos días!";
const msgBuenasTardes = "¡Buenas tardes!";
const msgBuenasNoches = "¡Buenas noches!";

// guardar el resultado de las operaciones en variables bien nombradas
// puede ayudar a que la lógica de nuestros programas sea más fácil de leer
const esManana = horaAactual >= inicioDia && horaAactual < inicioTarde;
const esTarde = horaAactual >= inicioTarde && horaAactual < inicioNoche;

// tras refactorizar podemos obtener un código fácil de leer para ti y para tu equipo
if (esManana) {
  saludar(msgBuenosDias);
} else if (esTarde) {
  saludar(msgBuenasTardes);
} else {
  saludar(msgBuenasNoches);
}

// las funciones nos ayudan a reutilizar código
// a hacerlo más legible
// a que sea más fácil de actualizar y mantener
function saludar(saludo) {
  document.write(`<h1>${saludo}</h1>`);
}
