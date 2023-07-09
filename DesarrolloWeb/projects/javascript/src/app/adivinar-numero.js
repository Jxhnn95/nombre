// pedir un número al usuario hasta que lo adivine
// decirle si es menor o mayor

// la función random number está definida abajo y devuelve un número entero aleatorio
let numeroObjetivo = getRandomNumber();
console.log({ numeroObjetivo });
let numeroUsuario = null;

// en este caso tiene sentido la estructura do-while
// porque siempre se preguntará al usuario, al menos una vez
// pero se podría resolver con while sin ningún problema
do {
  // con prompt pedimos un valor al usuario que podemos almacenar en una variable
  // el tipo del valor introducido será String (texto)
  numeroUsuario = prompt("Introduce un número:");
  if (numeroUsuario < numeroObjetivo) {
    // la función alert muestra un mensaje emergente en el navegador
    alert("El número que buscas es mayor");
  }
  if (numeroUsuario > numeroObjetivo) {
    alert("El número que buscas es menor");
  }
  // la condición para seguir preguntando es que el número del usuario sea distinto al objetivo
} while (numeroUsuario != numeroObjetivo);

// solo se sale del bucle cuando el número es correcto
// por tanto, podemos avisar aquí al usuario de que ha acertado
alert("¡Número correcto!");

// en las últimas versiones de JS podemos definir parámetros por defecto utilizando el =
// esto quiere decir que si usamos la función getRandomNumber()
// el resultado será el mismo que si usáramos getRandomNumber(100),
// porque hemos definido que maximo = 100 por defecto
// pero podemos utilizar otros argumentos (valores para los parámetros)
// ej. getRandomNumber(3000) devuleve un entero entre 0 y 3000
function getRandomNumber(maximo = 100) {
  const resultado = parseInt(Math.random() * maximo + 1);
  return resultado;
}

// podemos modificar el código para que sea máx legible
// NOTA: al refactorizar, el resultado debería ser el mismo que antes
function getRandomNumberRefactorizado(maximo = 100) {
  const aleatorioEntre0y1 = Math.random();
  const aleatorioEntre0yMaximo = aleatorioEntre0y1 * maximo + 1;
  // como aleatorioEntre0y1 es un número decimal, aleatorioEntre0yMaximo también lo será
  // lo convertimos al entero máx próximo
  const enteroAleatorioEntre0yMaximo = parseInt(aleatorioEntre0yMaximo);
  // devolvemos el resultado y terminamos la función con return
  return enteroAleatorioEntre0yMaximo;
}
