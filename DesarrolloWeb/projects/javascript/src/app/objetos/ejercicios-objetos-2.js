// Objeto que repressente un libro
// Propiedades: título, autor/a, año publicación, número de páginas

let libro = {
  titulo: "El señor de los anillos",
  autor: "Tolkien",
  publicacion: 1954,
  paginas: 400,
};

console.log(libro);

// crear una lista (array) de libros llamada biblioteca
let biblioteca = [
  {
    titulo: "El señor de los anillos",
    autor: "Tolkien",
    publicacion: 1954,
    paginas: 320,
  },
  {
    titulo: "Harry Potter",
    autor: "JK",
    publicacion: 1964,
    paginas: 400,
  },
  {
    titulo: "La crónicas de Narnia",
    autor: "CS Lewis",
    publicacion: 1944,
    paginas: 400,
  },
];

console.log(biblioteca);

// función para buscar libros por autor en la biblioteca
function buscarPorAutor(autor) {
  // para guardar los libros encontrados
  let resultados = [];
  // recorremos la lista de libros
  for (let i = 0; i < biblioteca.length; i++) {
    // el libro en la posición i
    let libro = biblioteca[i];
    // si el autor es el que buscamos
    if (libro.autor === autor) {
      // lo añadimos a los resultados
      resultados.push(libro);
    }
  }
  // en cualquier caso retornamos la lista de resultados
  return resultados;
}

let librosTolkien = buscarPorAutor("Tolkien");
let librosQuevedo = buscarPorAutor("Quevedo");

console.log({ librosTolkien });
console.log({ librosQuevedo });

// función para crear libros
function crearLibro(titulo, autor, publicacion, paginas) {
  // asignamos los valores al nuevo libro
  let libro = {
    titulo: titulo,
    autor: autor,
    publicacion: publicacion,
    paginas: paginas,
  };
  // retornamos el libro
  return libro;
}

// crear un nuevo libro
let nuevoLibro = crearLibro(
  "Los tres mosqueteros",
  "Alejandro Dumas",
  1800,
  256
);
console.log({ nuevoLibro });

// añadir el libro a la biblioteca
biblioteca.push(nuevoLibro);
console.log({ biblioteca });

// función que busque el libro (uno) con más páginas
function buscarMasLargo() {
  // empezamos suponiendo que el primero es el más largo
  let masLargo = biblioteca[0];
  // recorremos la biblioteca (empezamos en 1, el 0 ya es masLargo al inicio)
  for (let i = 1; i < biblioteca.length; i++) {
    // el libro a comparar (en posición i)
    let libro = biblioteca[i];
    // si el libro a comparar tiene más páginas
    if (libro.paginas > masLargo.paginas) {
      // es el libro más largo hasta el momento
      masLargo = libro;
    }
  }
  // retornamos el más largo
  return masLargo;
}

let libroMasLargo = buscarMasLargo();
console.log({ libroMasLargo });

// buscar el libro más antiguo (uno)
function buscarMasAntiguo() {
  // suponemos que el más antiguo es el primero
  let masAntiguo = biblioteca[0];
  // recorremos la biblioteca
  for (let i = 1; i < biblioteca.length; i++) {
    // el libro en i
    let libro = biblioteca[i];
    // si se publicó antes
    if (libro.publicacion < masAntiguo.publicacion) {
      // el más antiguo es el libro en i
      masAntiguo = libro;
    }
  }
  return masAntiguo;
}

let libroMasAntiguo = buscarMasAntiguo();
console.log({ libroMasAntiguo });

// buscar por título (uno). si no existe, devuelve null
function buscarPorTitulo(titulo) {
  // recorremos la biblioteca
  for (let i = 0; i < biblioteca.length; i++) {
    // libro en i
    let libro = biblioteca[i];
    // si el título es el que buscamos
    if (libro.titulo == titulo) {
      // retornamos el libro y termina la función
      return libro;
    }
  }
  // si no ha retornado antes, retornamos null
  return null;
}

// libro que existe
let libroMosqueteros = buscarPorTitulo("Los tres mosqueteros"); // {...}

// libro que no existe
let libroMosqueperros = buscarPorTitulo("Los tres mosqueperros"); // null

console.log({ libroMosqueteros });
console.log({ libroMosqueperros });

// convertir de JS (objeto, array...) a JSON (texto con formato de objeto JS)
let bibliotecaJSON = JSON.stringify(biblioteca);

// convertir de JSON a JS
let bibliotecaJS = JSON.parse(bibliotecaJSON);

console.log("Como JSON", { bibliotecaJSON });
console.log("Como objeto JS", { bibliotecaJS });


// Guardar un objeto JS en el navegador (persiste aunque cerremos la página)
// con window.localStorage (normalmente podemos usar simplemente localStorage)

// 1. convertir a JSON
let bibliotecaJSON2 = JSON.stringify(biblioteca);
// 2. guardar información en el navegador (en localStorage)
localStorage.setItem("biblioteca", bibliotecaJSON2);

// 1. leer de localStorage
let bibliotecaGuardada = localStorage.getItem("biblioteca");
// 2. convertir a JS
biblioteca = JSON.parse(bibliotecaGuardada);

// vaciar todo localStorage (OjO: borra lo anterior)
// localStorage.clear();
