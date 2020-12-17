// Temperatura en grados kelvin constante
const kelvin = 293;
// La temperatura en celsius se saca restando 273 a los grados kelvin
const celsius = kelvin - 273;
// Ecuacion para calcular grados fahrenheit y redondearlo
const fahrenheit = Math.floor(celsius * 9/5 + 32);
// Ecuacion para calcular grados newton con celsius
const newton = Math.floor(celsius * (33/100));

// Imprimir en consola todos los datos obtenidos
console.log(`The temperture is ${kelvin} degrees Kelvin`);
console.log(`The temperture is ${celsius} degrees Celsius`);
console.log(`The temperture is ${fahrenheit} degrees Fahrenheit`);
console.log(`The temperture is ${newton} degrees Newton`);