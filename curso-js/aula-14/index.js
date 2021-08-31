let num1 = 10.555555555;
let num2 = 2.5;

console.log(num1.toString() + num2.toString());
console.log(typeof num1);
// O Num1, irá concatenar no console log, porém nao alterou o seu tipo primitivo, para que altere
//deve fazer da seguinte forma

//num1 = num1.toString();  Aqui, a variável num1 passa de number para sting.
//console.log(typeof num1); Aqui irá demonstrar o tipo primitivo do num1

// console.log(num1.toString(2)); Dessa forma irá ver a representação binária da variável 10 em string.

// num1 = num1.toFixed(2); Você escolhe até quantas casas decimais, irá mostrar.
//console.log(Number.isInteger(num1)) irá retornar se o número é int ou float.

// let temp = num1 * "Ola";
// console.log(Number.isNaN(temp)); Nao é um numero.

// num1 = Number(num1.toFixed(2));
