/* Escreva uma função que receba um número e retorne o seguinte: 
numero é divisivel por 3  = Fizz
numero é divisivel por 5 = Buzz
numero é divisivel por 3 e 5 = FizzBuzz
numero nao é divisivel por 3 e 5 = retorna o proprio numero
Checar se o numero é realmente um numero
Use a funcao com numeros de 0 a 100 */

// MINHA RESOLUCAO
// function fizzBuzz(x) {
//   if (typeof x !== "number") {
//     return console.log(`${x} é do tipo string.`);
//   }
//   if (!isNaN(x)) {
//     if (x % 3 === 0 && x % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (x % 3 === 0) {
//       console.log("Fizz");
//     } else if (x % 5 === 0) {
//       console.log("Buzz");
//     } else if (x % 3 > 0 || x % 5 > 0) {
//       console.log(x);
//     }
//   }
// }

// for (let i = 0; i < 101; i++) {
//   fizzBuzz(i);
// }

// RESOLUCAO DO CURSO
function fizzBuzz(numero) {
  if (typeof numero !== "number") return numero;
  if (numero % 3 === 0 && numero % 5 === 0) return "FizzBuzz";
  if (numero % 3 === 0) return "Fizz";
  if (numero % 5 === 0) return "Buzz";
  return numero;
}

for (let i = 0; i < 101; i++) {
  console.log(i, fizzBuzz(i));
}
