const persona = {
    nombre: "Lucía",
    apellido: "Macellaro",
    edad: 34,
    email: "lucia.macellaro@anima.edu.uy",
    nacionalidad: ["Uruguaya", "Italiana"],
    saludar: function () {
         return "Hola, soy Lucía Macellaro!"},
    decirEdad: function() {
        return "tengo " + this.edad + " años"
    },
    nombreCompleto: function() {
        return this.nombre + " "+ this.apellido
    },
    esMayorDeEdad: function() {
        return this.edad >=18
    },
}

// const saludo = "Hola, soy " + persona.nombre + " " + persona.apellido + "!"


// console.log(persona)
// console.log(persona.nombre)

// // console.log(saludo)
//  console.log(persona.saludar())
//  console.log (persona.decirEdad())
//  console.log(persona.nacionalidad[0])
//   console.log(persona.nacionalidad)

console.log(persona.esMayorDeEdad())
console.log(persona.nombreCompleto())