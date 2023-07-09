let numberForm = document.querySelector("#numberForm");
// console.log({ numberForm });

// temporal, luego será aleatorio
let target = getRandomNumber();
console.log({ target });

let intentos = [];

numberForm.addEventListener("submit", function (event) {
  // evitamos el envío por defecto
  event.preventDefault();

  // seleccionar el input
  let numberInput = document.querySelector("#guess");
  //   console.log({ numberInput });

  // guardar el número introducido en una variable
  let number = numberInput.value;
  console.log({ number });

  // seleccionar contenedor del mensaje de feedback
  let messageContainer = document.querySelector("#message");
  console.log({ messageContainer });

  if (number.length > 0) {
    if (isNaN(number)) {
      messageContainer.innerHTML =
        "<span class='text-danger'>No es un número válido...</span>";
      return;
    }

    // añadimos el intento cuando nos hemos asegurado
    // de que es un número
    // antes, lo convertimos a entero (opcional)
    let integerNumber = parseInt(number);
    intentos.push(integerNumber);
    console.log({ intentos });

    if (number < target) {
      messageContainer.innerHTML =
        "<span class='text-danger'>El número que buscas es mayor</span>";
    }
    if (number > target) {
      messageContainer.innerHTML =
        "<span class='text-danger'>El número que buscas es menor</span>";
    }
    if (number == target) {
      let numeroIntentos = intentos.length;
      let textoIntentos = "intentos";
      if (numeroIntentos == 1) {
        textoIntentos = "intento";
      }
      messageContainer.innerHTML = `<span class="text-success">Acertaste con ${numeroIntentos} ${textoIntentos}</span>`;
      let submitButton = document.querySelector("input[type=submit]");
      console.log(submitButton);
      // añadir/modificar un atributo HTML
      submitButton.setAttribute("disabled", true);
    }
    numberInput.value = "";
  } else {
    messageContainer.innerHTML =
      '<span class="text-warning">Por favor, introduce un número...</span>';
  }
});

function getRandomNumber(maximo = 100) {
  const aleatorioEntre0y1 = Math.random();
  const aleatorioEntre0yMaximo = aleatorioEntre0y1 * maximo + 1;
  const enteroAleatorioEntre0yMaximo = parseInt(aleatorioEntre0yMaximo);
  return enteroAleatorioEntre0yMaximo;
}

function getRandomNumber2(maximo = 100) {
  return parseInt(Math.random() * maximo + 1);
}

// gestión de reinicio del juego
let resetButton = document.querySelector("#resetGame");
console.log(resetButton);

resetButton.addEventListener("click", function (event) {
  // evitamos el envío del formulario, porque el button está dentro
  event.preventDefault();
  resetGame();
});

function resetGame() {
  // limpiar el mensaje
  let messageContainer = document.querySelector("#message");
  messageContainer.innerHTML = "";
  // vaciar la lista de intentos
  intentos = [];
  // cambiar el número
  target = getRandomNumber();
  console.log({ target });
  // reactivar el botón, quitando el atributo disabled
  let submitButton = document.querySelector("input[type=submit]");
  submitButton.removeAttribute("disabled");
}
