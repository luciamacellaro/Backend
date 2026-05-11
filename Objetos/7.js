// ✏️ Ejercicio 7: Filtrar y acumular
// Usando el mismo array de peliculas:
// a) Imprimí solo las películas con puntaje mayor o igual a 8.5.
// b) Calculá el puntaje promedio de todas las películas.
// c) Contá cuántas películas son del siglo XXI (anio >= 2000).

const peliculas = [
{ titulo: "Toy Story", anio: 1995, puntaje: 8.3 },
{ titulo: "El Rey Leon", anio: 1994, puntaje: 8.5 },
{ titulo: "Eterno Resplandor", anio: 2004, puntaje: 8.3 },
{ titulo: "Parasite", anio: 2019, puntaje: 8.6 },
]

for ( const pelicula of peliculas) {
    if (pelicula.puntaje>=8.5) console.log(pelicula)
}

console.log(Math.round(peliculas.puntaje))