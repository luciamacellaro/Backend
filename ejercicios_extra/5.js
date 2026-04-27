// Escribí una función llamada `generarContrasena` que reciba un número `longitud` 
// y retorne un string aleatorio de esa longitud usando solo los caracteres del
//  siguiente array:

// ```js
// const caracteres = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
//                     "n","o","p","q","r","s","t","u","v","w","x","y","z",
//                     "0","1","2","3","4","5","6","7","8","9"];
// ```

// ```js
// // Ejemplo de uso:
// generarContrasena(8);   // algo como "k3rb9mxa"
// generarContrasena(12);  // algo como "t7yq2nfp08lc"
// ```

// > 💡 Pistas:
// > - Usá un loop para construir el string de a un carácter por vez.
// > - `Math.random()` combinado con `Math.floor()` y `.length` te da un índice aleatorio del array.
// > - Los strings se pueden concatenar con `+`.

// ---

 const caracteres = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
                 "n","o","p","q","r","s","t","u","v","w","x","y","z",
                 "0","1","2","3","4","5","6","7","8","9"];

function generarContrasena(longitud) {
    let contrasena = "";

    for (let i = 0; i < longitud; i++) {

let indice = Math.floor(Math.random()*caracteres.length)

contrasena += caracteres[indice]
        
    }
    return contrasena
}

console.log(generarContrasena(8));