// Estructura if
console.log("Ejecutando estructura if...");
const edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// la función getHora se ha declarado abajo
const hora = getHora();

// Estructura if...else if...else
console.log("\nEjecutando estructura if...else if...else...");
if (hora < 12) {
  console.log("Buenos días");
} else if (hora < 18) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}

function getHora() {
  // obtener la fecha actual y guardarla
  const ahora = new Date();
  // extraer la hora de la fecha actual y guardarla
  const hora = ahora.getHours();

  console.log(`Hora actual: ${hora}`);

  // devolver la hora y terminar la función
  return hora;
}

// Estructura switch
console.log("\nEjecutando estructura switch...");
const dia = "Lunes";

switch (dia) {
  case "Lunes":
    console.log("Es el primer día de la semana");
    break;
  case "Martes":
    console.log("Es el segundo día de la semana");
    break;
  case "Miércoles":
    console.log("Es el tercer día de la semana");
    break;
  default:
    console.log("Es otro día de la semana");
    break;
}

// Estructura while
// Nota: "\n inserta un salto de línea en el texto"
console.log("\nEjecutando estructura while (bucle)...");
console.log("Bucle while:");
let contador = 0;

while (contador < 5) {
  console.log(contador);
  contador++;
}

// Estructura for
console.log("\nEjecutando estructura for (bucle)...");
console.log("Bucle for:");
for (let i = 0; i < 5; i++) {
  console.log(i);
}
