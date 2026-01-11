//const prompt = require('prompt-sync')();

/*Ejercicio 1: Crea un nuevo array con los cuadrados de los números
Imagina que tienes una lista de números, como [2, 4, 6, 8]. Tu objetivo es crear una nueva lista donde cada número de la lista original se haya transformado en su cuadrado. Por ejemplo, el número 2 debería convertirse en 4, el número 4 en 16, y así sucesivamente. Al final, imprime la nueva lista.*/
/*
let numeros = [2, 4, 6, 8];

// Crear un nuevo array con los cuadrados
let cuadrados = numeros.map(function(numero) {
    return numero * numero;
});

// Mostrar el resultado
console.log(cuadrados);
*/

/*Ejercicio 2: Filtra los números pares de una lista
Tienes una lista con varios números: [1, 2, 3, 4, 5, 6]. Queremos separar y guardar únicamente los números pares en una nueva lista. Los números pares son aquellos que se pueden dividir entre 2 sin dejar residuo. Una vez que hayas creado la nueva lista, muéstrala en la consola.*/
/*
let numeros = [1, 2, 3, 4, 5, 6];

// Filtrar solo los números pares
let pares = numeros.filter(function(numero) {
    return numero%2 === 0;
});

// Mostrar el resultado
console.log(pares);
*/

/* Ejercicio 3: Encuentra el primer número mayor a 10
Tienes una lista de números [5, 8, 12, 20, 3]. Queremos encontrar el primer número de la lista que sea mayor a 10. Recuerda que el resultado debe ser únicamente el primer número que cumpla esta condición, no todos los números que lo hagan.*/
/*
let numeros = [5, 8, 12, 20, 3];

// Encontrar el primer número >10
let mayorA10 = numeros.find(function(numero) {
    return numero>10;
});

// Mostrar el resultado
console.log(mayorA10);
*/

/*Ejercicio 4: Calcula la suma total de los números
Dada una lista de números [1, 2, 3, 4], necesitamos calcular el resultado de sumarlos todos juntos. Es decir, deberías obtener 1 + 2 + 3 + 4. Al finalizar, imprime el total en la consola.*/
/*
let numeros = [1, 2, 3, 4];

// Calcular la suma total
let total = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 0);

// Mostrar el resultado
console.log(total);
*/

/* Ejercicio 5: Recorre una lista e imprime cada elemento
Tienes una lista de frutas ['manzana', 'banana', 'cereza']. Tu tarea es recorrer la lista y mostrar el nombre de cada fruta en la consola, una por una.*/
/*
let frutas = ["manzana", "banana", "cereza"];

// Recorrer la lista e imprimir cada fruta
frutas.forEach(function(fruta) {
    console.log(fruta);
});
*/

/*Ejercicio 6: Agrega un prefijo y un sufijo a cada palabra
Supongamos que tienes una lista de palabras ['hola', 'mundo', 'javascript']. Queremos transformarlas para que cada palabra tenga un prefijo "¡" y un sufijo "!". Por ejemplo, la palabra "hola" se debería convertir en "¡hola!".*/
/*
let palabras = ["hola", "mundo", "javascript"];

// Agregar prefijo y sufijo a cada palabra
let palabrasTransformadas = palabras.map(function(palabra) {
    return "¡" + palabra + "!";
});

// Mostrar el resultado
console.log(palabrasTransformadas);
*/

/* Ejercicio 7: Filtra nombres que empiecen con la letra 'A'
Dada una lista de nombres ['Ana', 'Luis', 'Andrea', 'María'], queremos quedarnos solo con los nombres que comiencen con la letra 'A'. Por ejemplo, el nombre 'Luis' no debería estar en el resultado porque empieza con 'L'.*/
/*
let nombres = ["Ana", "Luis", "Andrea", "María"];

let nombresConA = nombres.filter(function (nombre) {
    return nombre[0] === "A";
});

console.log(nombresConA);
*/

/* Ejercicio 8: Busca un nombre específico
Tienes una lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana']. Queremos saber si el nombre 'Laura' está presente en la lista y, si lo está, deberías devolverlo.*/
/*
let nombres = ["Carlos", "Daniel", "Laura", "Ana"];

// Buscar el nombre "Laura"
let nomBuscado = nombres.find(function(nombre) {
    return nombre === "Laura";
});

console.log(nomBuscado);
*/

/*Ejercicio 9: Cuenta la cantidad total de letras en una lista de palabras
Imagina que tienes una lista de palabras ['sol', 'luna', 'estrella']. Queremos saber cuántas letras hay en total entre todas las palabras. Por ejemplo, 'sol' tiene 3 letras, 'luna' tiene 4, y 'estrella' tiene 8. La suma total debería ser 15.*/
/*
let palabras = ["sol", "luna", "estrella"];

// Contar el total de letras
let totalLetras = palabras.reduce(function(acumulador, palabra) {
    return acumulador + palabra.length;
}, 0);

// Mostrar el resultado
console.log(totalLetras);
*/

/*Ejercicio 10: Construye una frase a partir de una lista de palabras
Dada la lista ['Me', 'gusta', 'aprender', 'JavaScript'], queremos construir una frase completa concatenando cada palabra en orden, separadas por espacios. Al fi nal, deberíamos obtener el texto 'Me gusta aprender JavaScript'.*/
/*
let palabras = ["Me", "gusta", "aprender", "JavaScript"];

// Construir la frase
let frase = palabras.reduce(function (acumulador, palabra) {
    return acumulador + " " + palabra;
});

// Mostrar el resultado
console.log(frase);
*/

//Ejercicios Extra para seguir practicando:

/*Encuentra los nombres más cortos y transforma su formato
Tienes una lista de nombres de personas: ['Lucía', 'Ana', 'María', 'Luis', 'José', 'Pablo']. Queremos realizar varias tareas con esta lista:
o Primero, fi ltra los nombres que tengan menos de 5 letras.
o Luego, transforma los nombres resultantes para que estén en mayúsculas.
o Finalmente, construye una frase que diga: "Los nombres seleccionados son: [nombres]", donde [nombres] sea la lista resultante unida por comas.
Al fi nal, imprime la frase en la consola.*/
/*
let personas = ['Lucía', 'Ana', 'María', 'Luis', 'José', 'Pablo'];

let nombresSeleccionados = personas
    .filter(function(nombre){
        return nombre.length<5
    })
    .map(function(nombre){
        return nombre.toUpperCase()
    })
    .join(", ");

console.log("Los nombres seleccionados son: " + nombresSeleccionados);
*/

/*Calcula el total de ventas de productos seleccionados Supón que tienes una lista de productos con sus precios en formato de objeto:
const products = [
{ name: 'Laptop', price: 1000 },
{ name: 'Mouse', price: 25 },
{ name: 'Teclado', price: 50 },
{ name: 'Monitor', price: 200 },
{ name: 'Audífonos', price: 75 }
];
Queremos:
o Seleccionar los productos cuyo precio sea mayor o igual a 50.
o Obtener solo los nombres de esos productos.
o Calcular el precio total sumando los precios de los productos seleccionados.
o Imprime el total y los nombres de los productos seleccionados en la consola.
*/
/*
const products = [
{ name: 'Laptop', price: 1000 },
{ name: 'Mouse', price: 25 },
{ name: 'Teclado', price: 50 },
{ name: 'Monitor', price: 200 },
{ name: 'Audífonos', price: 75 }
];

let saleTotal = products
    .filter(function(productPrice){
        return productPrice.price>=50
    })
    .reduce(function(acum, prod){
        return acum + prod.price
    }, 0);

let namesSelected = products
    .filter(function(productPrice){
        return productPrice.price>=50
    })
    .map(function(productName){
        return productName.name
    });

console.log("Productos seleccionados: " + namesSelected.join(", "));
console.log("Total de ventas: $" + saleTotal);
*/

/*Encuentra la película más corta y analiza los títulos largos Supón que tienes una lista de películas con su duración en minutos:
const movies = [
{ title: 'El Señor de los Anillos', duration: 200 },
{ title: 'Inception', duration: 148 },
{ title: 'Matrix', duration: 136 },
{ title: 'Toy Story', duration: 81 },
{ title: 'Coco', duration: 105 }
];
Queremos:
o Encontrar la película más corta en duración.
o De las películas restantes, quedarnos con aquellas cuyo título tenga más de 10 caracteres.
o Crear una lista de los títulos largos en minúsculas.
o Imprime en la consola:
o El título de la película más corta.
o La lista de títulos largos en minúsculas.*/
/*
const movies = [
{ title: 'El Señor de los Anillos', duration: 200 },
{ title: 'Inception', duration: 148 },
{ title: 'Matrix', duration: 136 },
{ title: 'Toy Story', duration: 81 },
{ title: 'Coco', duration: 105 }
];

let shortestMovie = movies.reduce(function(minDuration, currentDuration) {
    if (currentDuration.duration < minDuration.duration) {
        return currentDuration;
    }
    return minDuration;
});

let longTitles = movies
    .filter(function(movie) {
        return movie.title.length > 10 && movie !== shortestMovie;
    })
    .map(function(movie) {
        return movie.title.toLowerCase();
    });

console.log("Película más corta: " + shortestMovie.title);
console.log("Títulos largos en minúsculas: " + longTitles.join(", "));
*/

