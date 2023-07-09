// utilizamos switch cuando tenemos un conjunto de posibilidades muy claras
// que podemos controlar con una variable (en este caso el índice del mes empezando por 0)

const monthIndex = 2;

switch (monthIndex) {
  case 0:
    console.log("Es enero");
    break;
  case 1:
    console.log("Es febrero");
    break;
  case 2:
    console.log("Es marzo");
    break;
  default:
    console.log("El mes no existe");
    break;
}

// PROGRAMA QUE SALUDE AL USUARIO EN SU IDIOMA
// aquí guardamos el idioma del usuario
let lang = "";

// le pedimos el idioma hasta que lo introduzca
while (!lang || lang.length != 2) {
  lang = prompt("Introduce el código de tu idioma");
}

// pasamos el código de idioma a mayúsculas, para que funcione aunque el usuario lo indique en minúsculas
lang = lang.toUpperCase();

switch (lang) {
  case "ES":
    document.write("<h1>¡Hola!</h1>");
    break;
  case "EN":
    document.write("<h1>Hello!</h1>");
    break;
  case "CA":
    document.write("<h1>Bon dia!</h1>");
    break;
  default:
    document.write("<h1>No conozco el idioma</h1>");
}
