// ✏️ Ejercicio 4: Agregar métodos
// Tomá el objeto cancion del Ejercicio 1 y agregale dos métodos:
// — describir(): que retorne un string con el formato:
// "[titulo] de [artista] ([anio])"
// — duracionEnMinutos(): que retorne la duracion convertida a minutos.
// (dividir la duración en segundos por 60 y redondear con Math.floor)
// Invocá ambos métodos e imprimí los resultados.

const cancion = {
    titulo: "Crimen",
    artista: "Cerati",
    anio: 2006,
    duracion: 228,
    favorita: true,
    describir: function() {
        return this.titulo + " de " + this.artista + " "+ this.anio},

    duracionEnMinutos: function() {
       
        return Math.floor(cancion.duracion/60)}

}

console.log(cancion.describir())
console.log(cancion.duracionEnMinutos())