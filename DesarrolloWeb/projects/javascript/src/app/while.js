// imprimir párrafos con el valor del contador en cada iteración (ciclo del bucle)
let contador = 0;

while (contador < 10) {
  document.write(`<p class="text-success">${contador}</p>`);
  contador++;
}

// WHILE y DO WHILE son similares,
// pero DO WHILE siempre ejecutará el código al menos una vez
// antes de comprobar si se cumple la condición

let contador1 = 0;
// mientras se cumpla, hazlo
while (contador1 < 3) {
  console.log({ contador1 });
  contador1++;
}

let contador2 = 0;
// hazlo mientras se cumpla (mínimo lo hace una vez)
do {
  console.log({ contador2 });
  contador2++;
} while (contador2 < 3);
