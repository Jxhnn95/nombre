// Ejercicio 1.1
// crear 3 variables a, b y c
let a = 23;
let b = 32;
let c = 54;

// sumar las 3 variables
let suma = a + b + c;

// mostrar el resultado de la suma
console.log(`a + b + c = ${suma}`);
console.log(`${a} + ${b} + ${c}  = ${suma}`);

// 1.2
// modficar el valor de c
c = 84;
// 1.3
// volver a sumar las 3 variables
// IMPORTANTE no volver a poner let
suma = a + b + c;

// mostrar el nuevo resultado
console.log(`${a} + ${b} + ${c}  = ${suma}`);

// Ejercicio 2
// mostrar hello world por consola
console.log("Hello World!");
document.write('<p class="text-success">Hello World!</p>');

// mostrar expresión 2*3 por consola
console.log("2 * 3");

// mostrar el resultado de la expresión
const multiplicacion = 2 * 3;
console.log(`2 x 3 = ${multiplicacion}`);

// Ejercicio 3
// 3.1 convertir de String a number
let unoString = "1";
console.log({ unoString });
// conversiones explícitas
let unoNumber = parseInt(unoString);
console.log({ unoNumber });
let unoNumberFloat = parseFloat(unoString);
console.log({ unoNumberFloat });

// conversión implícita
let resta = "3" - 2;
console.log({ resta });

// 3.2 convertir de número a String
let dosNumber = 2;
console.log({ dosNumber });

let dosString = dosNumber.toString();
console.log({ dosString });

dosString = String(dosNumber);
console.log({ dosString });

// 3.3 convertir de boolean a String
let falsoBoolean = false;
console.log({ falsoBoolean });

let falsoString = falsoBoolean.toString();
console.log({ falsoString });

falsoString = String(falsoBoolean);
console.log({ falsoString });

/*1 se pone let + ""="":
2 se imprime el let log..
3 se pone el "" al que deseas cambiar
( de bolean a String ejem.. seria let String= let anterior.toString)
4 se imprime
5 se pone let "Sting" =String+ el primer let
y se imprime el ultimo let creado

*/
