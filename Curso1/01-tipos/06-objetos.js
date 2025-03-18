// Personaje TV

let nombre = "Peter";
let pelicula = "Spiderman";
let edad = "22";

let personaje = {nombre, pelicula, edad};
console.log(personaje);
console.log(personaje.nombre)

let personaje2 = {
    nombre: "Tony Stark", 
    pelicula: "Iron Man", 
    edad: "35"};
console.log(personaje2)
console.log(personaje2['pelicula'])

personaje.edad = 15;
let llave = 'edad';
personaje['edad'] = 16;

delete personaje.pelicula;
console.log(personaje);