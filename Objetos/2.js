// ✏️ Ejercicio 2: Leer propiedades
// Dado el siguiente objeto:
// const libro = {
// titulo: "Cien años de soledad",
// autor: "Gabriel Garcia Marquez",
// paginas: 471,
// leido: false
// };
// a) Imprimí el título usando dot notation.
// b) Imprimí las páginas usando bracket notation.
// c) Imprimí el valor de una propiedad que no existe. ¿Qué obtenés?
// d) Marcá el libro como leído (cambiá leido a true) e imprimí el objeto.

const libro ={
    titulo:"cien años de soledad",
    autor: "Gabriel García Marquez",
    paginas: 471,
    leido: false
}

console.log(libro.titulo);
console.log(libro["paginas"]);
console.log(libro.anio);

libro.leido=true;
console.log(libro.leido);