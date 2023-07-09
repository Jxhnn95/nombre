// "base de datos" de usuarios
let usuarios = [
  {
    email: "jxhnn95@correo.com",
    password: "jxhnn95",
    username: "Jxhnn95",
  },
  {
    email: "juan@correo.com",
    password: "password124",
    username: "Juan Miguel",
  },
  {
    email: "lorena@correo.com",
    password: "password126",
    username: "Lorena Pérez",
  },
];

// si el login es correcto, retorna el usuario
// se es incorrecto retorna null
function login(email, pass) {
  // para almacenar el usuario si existe
  let usuarioCorrecto = null;
  // recorrer usuarios
  for (let i = 0; i < usuarios.length; i++) {
    // almacenar el usuario en la posición i
    let usuario = usuarios[i];
    // comparar los datos del usuario i con los del login
    if (usuario.email === email && usuario.password === pass) {
      // reemplazamos null con el usuario i
      usuarioCorrecto = usuario;
    }
  }
  return usuarioCorrecto;
}

// usuario que existe con pass CORRECTA
let jxhnn = login("jxhnn95@correo.com", "jxhnn95");
// usuario que existe con pass INCORRECTA
let lorena2 = login("lorena@correo.com", "password12");
// usuario que no existe
let juani = login("juani@correo.com", "fwefewfr12");

console.log({ jxhnn });
console.log({ lorena2 });
console.log({ juani });

// utilizar nuestra función login() con un formulario HTML (ver objetos.html)
let formularioLogin = document.querySelector("#loginForm");
formularioLogin.addEventListener("submit", function (event) {
  event.preventDefault();

  // obtener el email introducido
  let inputEmail = document.querySelector("#email");
  let email = inputEmail.value;

  // obtener la contraseña introducida
  let inputPass = document.querySelector("#pass");
  let pass = inputPass.value;

  // ejecutar el login con los datos recogidos
  let usuarioLogueado = login(email, pass);

  let feedbackContainer = document.querySelector("#feedback");

  if (usuarioLogueado) {
    console.log("Login correcto!");
    feedbackContainer.innerHTML =
      "<p class='text-success'>Te has logueado con éxito</p>";
  } else {
    console.error("Usuario o contraseña incorrectos");
    feedbackContainer.innerHTML =
      "<p class='text-danger'>Usuario o contraseña incorrectos</p>";
  }
});
