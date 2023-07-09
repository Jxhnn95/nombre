// seleccionar el formulario
const ageForm = document.querySelector("#ageForm");

ageForm.addEventListener("submit", function (submitEvent) {
  // Prevenimos que el formulario se envíe para evitar recargar la página
  submitEvent.preventDefault();

  // Usamos querySelector para obtener el valor de la entrada de edad
  const ageInput = document.querySelector("#age");
  const age = Number(ageInput.value);

  // Usamos querySelector para obtener el contenedor
  // en el que insertaremos el mensaje para el usuario
  const messageContainer = document.querySelector("#message");

  // Verificamos si la edad es un número
  if (isNaN(age)) {
    // modificamos el texto dentro del contenedor del mensaje
    // para mostrar feedback al usuario
    messageContainer.textContent = "Por favor, introduce un número válido.";
    // termina la ejecución, ya que no podemos comparar la edad
    return;
  }

  // Usamos un bloque if para comprobar si la edad es mayor o igual a 18
  if (age >= 18) {
    messageContainer.textContent = "Eres mayor de edad.";
  } else {
    messageContainer.textContent = "No eres mayor de edad.";
  }
});
