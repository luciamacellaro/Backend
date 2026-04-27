# Ejercicios Extra — Funciones

---

### Ejercicio 1 — Calcular propina

Escribí una función llamada `calcularPropina` que reciba el `totalCuenta` y el `porcentaje` de propina, y retorne el monto de la propina.

Luego escribí otra función llamada `totalConPropina` que reciba los mismos parámetros y retorne el total a pagar (cuenta + propina). Esta función debe llamar internamente a `calcularPropina`.

```js
// Ejemplo de uso:
calcularPropina(1000, 10);    // 100
totalConPropina(1000, 10);   // 1100
totalConPropina(850, 15);    // 977.5
```

> 💡 Una función puede llamar a otra función dentro suyo.

---

### Ejercicio 2 — Validar contraseña

Escribí una función llamada `validarContrasena` que reciba un string `contrasena` y retorne `true` si cumple **todas** estas condiciones, o `false` si no:

- Tiene 8 o más caracteres.
- No es un string vacío.

```js
// Ejemplo de uso:
validarContrasena("hola");         // false (menos de 8 caracteres)
validarContrasena("miClave123");   // true
validarContrasena("");             // false
```

> 💡 Podés usar `.length` para saber el largo de un string.

---

### Ejercicio 3 — Número par o impar

Escribí una función llamada `parOImpar` que reciba un número y retorne el string `"par"` si es par, o `"impar"` si no lo es.

Luego usala dentro de un `for` loop para imprimir el resultado para cada número del 1 al 10.

```
// Resultado esperado:
1 → impar
2 → par
3 → impar
...
10 → par
```

> 💡 Un número es par si `numero % 2 === 0`.

---

### Ejercicio 4 — Mayor de tres

Escribí una función llamada `mayorDeTres` que reciba tres números y retorne el mayor de los tres **sin usar `Math.max`**.

```js
// Ejemplo de uso:
mayorDeTres(3, 7, 2);    // 7
mayorDeTres(10, 10, 5);  // 10
mayorDeTres(1, 1, 1);    // 1
```

> 💡 Podés resolverlo con condicionales anidados o con variables auxiliares.

---

### Ejercicio 5 — Generador de contraseñas

Escribí una función llamada `generarContrasena` que reciba un número `longitud` y retorne un string aleatorio de esa longitud usando solo los caracteres del siguiente array:

```js
const caracteres = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
                    "n","o","p","q","r","s","t","u","v","w","x","y","z",
                    "0","1","2","3","4","5","6","7","8","9"];
```

```js
// Ejemplo de uso:
generarContrasena(8);   // algo como "k3rb9mxa"
generarContrasena(12);  // algo como "t7yq2nfp08lc"
```

> 💡 Pistas:
> - Usá un loop para construir el string de a un carácter por vez.
> - `Math.random()` combinado con `Math.floor()` y `.length` te da un índice aleatorio del array.
> - Los strings se pueden concatenar con `+`.

---

> 🚀 ¡A practicar!
