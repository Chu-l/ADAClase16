//const prompt = require('prompt-sync')();

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
