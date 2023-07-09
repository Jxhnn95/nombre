// las claves son únicas
let ejemploObjeto = {
  clave: "valor",
  clave2: 12,
  1: "texto",
};

console.log(ejemploObjeto);

// leer los valores "como si fuera un array"
let valorDeClave = ejemploObjeto["clave"];
let valorDeClave2 = ejemploObjeto["clave2"];
let valorDeUno = ejemploObjeto["1"];

console.log({ valorDeClave }); // "valor"
console.log({ valorDeClave2 }); // 12
console.log({ valorDeUno }); // "texto"

// leer valores para claves tipo String (texto)
let otroValorDeClave = ejemploObjeto.clave; // "valor"
let otroValorDeClave2 = ejemploObjeto.clave2; // 12
// let otroValorDeUno = ejemploObjeto.1 // Error, usar ejemploObjeto[1]

// actualizar valores
ejemploObjeto["clave"] = "otro valor";
ejemploObjeto["clave2"] = 21;
ejemploObjeto[1] = "otro texto";

ejemploObjeto.clave = "otro valor más";

// añadir nuevas claves
ejemploObjeto["nombre"] = "Juana";

// crear objeto frutas
// las claves son los nombres
// los valores son la cantidad de frutas

let frutas = {
  manzana: 12,
  platano: 22,
  cereza: 3,
  kiwi: 14,
  uva: 15,
};

console.log(frutas["manzana"]); // 10
console.log(frutas["platano"]); // 22

// actualizamos frutas
// ahora los valores son otros objetos con propiedades (claves)
frutas = {
  manzana: {
    cantidad: 12,
    precio: 0.5,
    nombre: "Manzana Roja",
  },
  platano: {
    cantidad: 22,
    precio: 0.6,
    nombre: "Plátano",
  },
};

let cantidadManzanas = frutas["manzana"]["cantidad"];
let manzana = frutas["manzana"];
let mismaCantidadManzanas = manzana["cantidad"]; // lo mismo
mismaCantidadManzanas = manzana.cantidad; // lo mismo

console.log({ manzana }, { cantidadManzanas }, { mismaCantidadManzanas });

// mostrar el precio de las frutas
// como un String incluyendo el símbolo de €
// Ejemplo: platano: 0.5 €

console.log(`${frutas["platano"].nombre}: ${frutas["platano"].precio} €`);
console.log(frutas["platano"].nombre + ": " + frutas["platano"].precio + " €"); // lo mismo
console.log(`${frutas["manzana"].nombre}: ${frutas["manzana"].precio} €`);
console.log(frutas ["manzana"].nombre + ":" + frutas["manzana"].precio + " €");
// implementar función para mostrar el precio de la fruta
// Ejemplo de llamada a la función para ver el de la Manzana
verPrecio("manzana"); // Manzana Roja: 0.5 €
// verPrecio("platano");

function verPrecio(claveFruta) {
  // guardamos la fruta en una variable
  let fruta = frutas[claveFruta];
  console.log(`${fruta.nombre}: ${fruta.precio} €`);
}

verPrecio2("uva"); // cuando llamamos a la función con una fruta que no está

// podemos comprobar si la fruta existe antes de mostrar el precio
function verPrecio2(claveFruta) {
  // guardamos la fruta en una variable
  let fruta = frutas[claveFruta];
  if (fruta == undefined) {
    console.log(`Fruta con la clave ${claveFruta} no encontrada`);
  } else {
    console.log(`${fruta.nombre}: ${fruta.precio} €`);
  }
}

// calcular el total a pagar para una fruta (precio * cantidad)
let totalPlatano = calcularTotalFruta("platano"); // 13.2
console.log({ totalPlatano });

function calcularTotalFruta(claveFruta) {
  // guardar la fruta
  let fruta = frutas[claveFruta];
  // calcular precio x cantidad
  let total = fruta.precio * fruta.cantidad;
  // retornar el resultado
  return total;
}


