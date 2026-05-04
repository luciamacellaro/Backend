// ✏️ Ejercicio 5: Acceder a un array de objetos
// Dado el siguiente array:
// const peliculas = [
// { titulo: "Toy Story", anio: 1995, puntaje: 8.3 },
// { titulo: "El Rey Leon", anio: 1994, puntaje: 8.5 },
// { titulo: "Eterno Resplandor", anio: 2004, puntaje: 8.3 },
// { titulo: "Parasite", anio: 2019, puntaje: 8.6 },
// ];

// a) Imprimí el título de la primera película.
// b) Imprimí el puntaje de la última película usando length.
// c) Cambiá el puntaje de "Toy Story" a 9.0.
// d) Agregá una nueva película al final del array con push.

const peliculas = [
{ titulo: "Toy Story", anio: 1995, puntaje: 8.3 },
{ titulo: "El Rey Leon", anio: 1994, puntaje: 8.5 },
{ titulo: "Eterno Resplandor", anio: 2004, puntaje: 8.3 },
{ titulo: "Parasite", anio: 2019, puntaje: 8.6 },
]
peliculas.push ({titulo: "Piratas del caribe", anio: 2008, puntaje:  8}) // d) Agregá una nueva película al final del array con push.

console.log(peliculas[0].titulo) // a) Imprimí el título de la primera película.

console.log(peliculas[peliculas.length-1].puntaje)   // b) Imprimí el puntaje de la última película usando length.

peliculas[0].puntaje = 9.0 // c) Cambiá el puntaje de "Toy Story" a 9.0.

console.log(peliculas[0].puntaje)

console.log(peliculas[peliculas.length-1])
// console.log(peliculas)


// console.log(peliculas[peliculas.length-1].puntaje)