// scope (ámbito) con var
// accesible en todo el código
var numero = 1;
console.log("var fuera 1", { numero });

{
  //   console.log("var dentro", { numero });
  var numero = 2;
}

console.log("var fuera 2", { numero });

numero = 3;

console.log("var fuera 3", { numero });

// scope con let
// accesible en el bloque donde se declara y los inferiores
let numero2 = 1;
console.log("let fuera 1", { numero2 });

{
  // si declaramos una variable con el mismo nombre en un bloque inferior,
  // esta no afectará a los bloques superiores,
  // y la variable de los bloques superiores ya no será accesible aquí
  // por eso este console.log lanzaría error
  //   console.log("let dentro", numero2); // error
  // y esta variable no es visible en los bloques superiores
  let numero2 = 2;
}

console.log("let fuera 2", { numero2 });

numero2 = 3;

console.log("let fuera 3", { numero2 });

// scope const
// comportamiento de ámbito similar a let
// pero no podemos cambiar el valor
const numeroConstante = 1;

console.log("const fuera 1", numeroConstante);

{
  //   console.log("const dentro", numeroConstante); // error
  const numeroConstante = 2;
}

console.log("const fuera 2", numeroConstante);

// numeroConstante = 3 // error
