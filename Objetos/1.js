// ✏️ Ejercicio 1: Crear tu primer objeto
// Creá un objeto llamado cancion con las siguientes propiedades:
// — titulo: el nombre de tu canción favorita
// — artista: el nombre del artista o banda
// — anio: el año de lanzamiento (number)
// — duracion: la duración en segundos (number)
// — favorita: true o false (boolean)

const cancion = {
    titulo: "Crimen",
    artista: "Cerati",
    anio: 2006,
    duracion: "3:48 minutos",
    favorita: true,
}
console.log(cancion)

console.log(cancion.titulo);

const propiedad= "anio"
console.log(cancion[propiedad])

cancion.tono = "E"
console.log(cancion.tono);