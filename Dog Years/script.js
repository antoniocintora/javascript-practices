// Mi edad actual
let myAge = 20;
// Los 2 primeros años de un perro equivalen a 10.5 años nuestros
let earlyYears = 2;
earlyYears *= 10.5;
// A partir de estos años, nuestra conversion sera un año nuestro por cada 4 de perro
let laterYears = myAge - 2;
// Asigna el valor total de la edad a la que equivale el resto de nuestros años en forma de perro.
laterYears *= 4;

// Almacena nuestra edad en años de perro
const myAgeInDogYears = earlyYears + laterYears;
// Nuestro nombre pero todo en minusculas
const myName = 'Alfonso'.toLowerCase();
// Concatenacion de caracteres para crear una frase
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)