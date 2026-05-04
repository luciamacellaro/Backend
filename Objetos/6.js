// ✏️ Ejercicio 6: Recorrer y mostrar
// Usando el array de peliculas del ejercicio anterior, recorrélo con for...of e imprimí
// para cada película:
// "[titulo] ([anio]) — Puntaje: [puntaje]"
// Resultado esperado:
// Toy Story (1995) — Puntaje: 9
// El Rey Leon (1994) — Puntaje: 8.5

const peliculas = [
{ titulo: "Toy Story", anio: 1995, puntaje: 8.3 },
{ titulo: "El Rey Leon", anio: 1994, puntaje: 8.5 },
{ titulo: "Eterno Resplandor", anio: 2004, puntaje: 8.3 },
{ titulo: "Parasite", anio: 2019, puntaje: 8.6 },
]

for (const pelicula of peliculas) {
console.log(pelicula.titulo + " (" + (pelicula.anio) + ") - Puntaje: " + (pelicula.puntaje))}

// // + " - " + "Puntaje: " + pelicula.puntaje);
// // }

