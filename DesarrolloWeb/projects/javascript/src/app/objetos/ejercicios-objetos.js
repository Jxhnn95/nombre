// definir un objeto que represente
// un usuario con
// - correo
// - contraseña
// - nombre de usuario

let usuario = {
  email: "correo@correo.com",
  password: "password123",
  username: "Ana López",
};

console.log({ usuario });

// lista (array) con 3 usuarios con el formato anterior

let usuarios = [
  {
    email: "ana@correo.com",
    password: "password123",
    username: "Ana López",
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

// recorriendo la lista de usuarios
for (let i = 0; i < usuarios.length; i++) {
  // usuario en la posición i
  let usuario = usuarios[i];
  console.log(usuario);
  console.log(usuario.email);
}
// Mostrar en el HTML
// la lista de nombres de usuario
// (mejor con una función)
// imprimirNombresUsuario();
function imprimirNombresUsuario() {
  for (let i = 0; i < usuarios.length; i++) {
    let usuario = usuarios[i];
    document.write(`<p>${usuario.username}</p>`);
  }
}

let masUsuarios = [
  {
    email: "pepe@correo.com",
    password: "password124",
    username: "Pepe Pepez",
  },
  {
    email: "marta@correo.com",
    password: "password126",
    username: "Marta Martínez",
  },
];

// imprimirNombresUsuario2(usuarios);
// imprimirNombresUsuario2(masUsuarios);

// recibimos la lista por parámetro (más reutilizable)
function imprimirNombresUsuario2(listaUsuarios) {
  for (let i = 0; i < listaUsuarios.length; i++) {
    let usuario = listaUsuarios[i];
    document.write(`<p>${usuario.username}</p>`);
  }
}

// imprimimos en un elemento HTML en lugar de escribir las líneas al final
function imprimirNombresUsuario3(listaUsuarios) {
  let contenedorUsuarios = document.querySelector("#contenedorUsuarios");
  // vaciar contenedor antes de añadir los nombres
  contenedorUsuarios.innerHTML = "";
  // recorremos la lista de usuarios
  for (let i = 0; i < listaUsuarios.length; i++) {
    let usuario = listaUsuarios[i];
    // concatenamos para no sobreescribir
    contenedorUsuarios.innerHTML += `<li>${usuario.username}</li>`;
  }
}
