// Ejercicio 2
// declarar 4 variables numéricas
const a = 40;
const b = 43;
const c = 41;
const d = 42;

// comprobar si a+b es mayor que c+d
const sumaAB = a + b;
const sumaCD = c + d;

if (sumaAB > sumaCD) {
  document.write(`<p>AB ${sumaAB} es mayor que CD ${sumaCD}</p>`);
} else if (sumaCD > sumaAB) {
  document.write(`<p>CD ${sumaCD} es mayor que AB ${sumaAB}</p>`);
} else {
  document.write(`<p>CD ${sumaCD} es igual a AB ${sumaAB}</p>`);
}

// Ejercicio 4
// comprobar si un número es par o impar
const numero = 846;
const resto = numero % 2;
if (resto == 0) {
  document.write(`<p>${numero} es PAR</p>`);
} else {
  document.write(`<p>${numero} es IMPAR</p>`);
}

// Ejercicio 3
// comprobar si los ángulos pueden formar un triángulo

const angulo1 = 100;
const angulo2 = 70;
const angulo3 = 10;

const sumaAngulos = angulo1 + angulo2 + angulo3;

if (sumaAngulos == 180) {
  document.write(
    `<p>${angulo1}, ${angulo2} y ${angulo3} forman un triángulo</p>`
  );
} else {
  document.write(
    `<p>${angulo1}, ${angulo2} y ${angulo3} NO forman un triángulo</p>`
  );
}

// true && 5 < 1; // = false los dos deben ser verdaderos
// true || 5 < 1; // = true al menos uno debe ser verdadero

// Ejercicio 5
// cuál de los 3 números es mayor

const numero1 = 10;
const numero2 = 10;
const numero3 = 10;

// solución básica

// if (numero1 > numero2 && numero1 > numero3) {
//   document.write(`1. ${numero1} es mayor que ${numero2} y que ${numero3}`);
// }

// if (numero2 > numero1 && numero2 > numero3) {
//   document.write(`2. ${numero2} es mayor que ${numero1} y que ${numero3}`);
// }

// if (numero3 > numero1 && numero3 > numero2) {
//   document.write(`3. ${numero3} es mayor que ${numero1} y que ${numero2}`);
// }

// if (numero1 == numero2 && numero1 == numero3) {
//   document.write(`4. Los tres números son iguales (${numero3})`);
// }

// podemos tratar de hacer más legible la solución definiendo algunas variables y funciones
// de esta forma el código es más fácil de mantener y actualizar

const unoEsMayorQueDos = numero1 > numero2;
const unoEsMayorQueTres = numero1 > numero3;

const dosEsMayorQueUno = numero2 > numero1;
const dosEsMayorQueTres = numero2 > numero3;

const tresEsMayorQueUno = numero3 > numero1;
const tresEsMayorQueDos = numero3 > numero2;

const sonIguales = numero1 == numero2 && numero1 == numero3;

if (unoEsMayorQueDos && unoEsMayorQueTres) {
  imprimirMayorYMenores(numero1, numero2, numero3);
}
if (dosEsMayorQueUno && dosEsMayorQueTres) {
  imprimirMayorYMenores(numero2, numero1, numero3);
}
if (tresEsMayorQueUno && tresEsMayorQueDos) {
  imprimirMayorYMenores(numero3, numero1, numero2);
}
if (sonIguales) {
  imprimirSonIguales(numero1);
}

// podemos definir las funciones después de utilizarlas
// es una característica llamada "hoisting"

// las funciones deben tener un nombre descriptivo
// pueden aceptar parámetros que definimos con nombres descriptivos entre paréntesis
// en el cuerpo {...} encontramos líneas de código que se ejecutarán cuando invoquemos la función
function imprimirMayorYMenores(numeroMayor, numeroMenor1, numeroMenor2) {
  document.write(
    `${numeroMayor} es mayor que ${numeroMenor1} y que ${numeroMenor2}`
  );
}

function imprimirSonIguales(numero) {
  document.write(`Los tres números son iguales (${numero})`);
}
