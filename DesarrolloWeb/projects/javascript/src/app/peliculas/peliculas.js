// películas a mostrar
let peliculas = [ ];

// cargar las películas ya guardadas
let peliculasGuardadasJSON = localStorage.getItem("peliculas");
// si hay películas guardadas, lo convertimos a JS y añadimos a peliculas
if (peliculasGuardadasJSON) {
  peliculas = JSON.parse(peliculasGuardadasJSON);
}

imprimirPeliculas();

// guardar nuevas películas
let pelisForm = document.querySelector("#peliForm");
console.log({ pelisForm });

pelisForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // obtener el input de texto
  let tituloInput = document.querySelector("#titulo");
  console.log({ tituloInput });
  // obtener el título introducido
  let nuevaPelicula = tituloInput.value;
  console.log({ nuevaPelicula });
  // vaciamos el input de texto
  tituloInput.value = "";

  // añadir a array de películas
  peliculas.push(nuevaPelicula);

  imprimirPeliculas();

  // convertir a texto
  let peliculasJSON = JSON.stringify(peliculas);

  // guardar en memoria del navegador
  localStorage.setItem("peliculas", peliculasJSON);
});

function imprimirPeliculas() {
  let contenedorPelis = document.querySelector("#contenedorPelis");
  console.log({ contenedorPelis });

  // limpiar contenedor de películas
  contenedorPelis.innerHTML = "";
  // recorrer todas las películas
  for (let i = 0; i < peliculas.length; i++) {
    let pelicula = peliculas[i];
    // imprimir película al final del contenedor
    contenedorPelis.innerHTML += `<li>${pelicula}</li>`;
  }
}

// borrar películas (y todo lo que haya en localStorage)
function vaciarTodo() {
  // vaciar localStorage
  localStorage.clear();
  // seleccionar contenedor películas
  let contenedorPelis = document.querySelector("#contenedorPelis");
  // limpiar contenedor de películas
  contenedorPelis.innerHTML = "";
  // vaciar lista
  peliculas = [];
}

function vaciarPeliculas() {
  // vaciar localStorage
  localStorage.removeItem("peliculas");
  // seleccionar contenedor películas
  let contenedorPelis = document.querySelector("#contenedorPelis");
  // limpiar contenedor de películas
  contenedorPelis.innerHTML = "";
  // vaciar lista
  peliculas = [];
}

let btnVaciar = document.getElementById("btn-vaciar");
console.log({ btnVaciar });

btnVaciar.addEventListener("click", function (_event) {
  vaciarPeliculas();
});
