// ✏️ Ejercicio 3: Construir y modificar
// Creá un objeto llamado producto con estas propiedades:
// nombre, precio (number), stock (number), disponible (boolean).
// a) Imprimí el precio original.
// b) Aplicá un descuento del 20% al precio y actualizá la propiedad.
// c) Si el stock es 0, cambiá disponible a false.
// d) Agregá una propiedad nueva: categoria con el valor que quieras.
// e) Imprimí el objeto final completo.

const producto = {
    nombre:"PC HP",
    precio: 700,
    stock: 5,
    disponible: true,
}

console.log(producto.precio);

const conDescuento = producto.precio*(1-20/100);

console.log(conDescuento);

producto.stock=0;

if (producto.stock<=0) {
    producto.disponible=false};
    
console.log(producto.disponible);
console.log(producto.stock)

producto.procesador ="Core i5"
console.log(producto)