// Escreva uma função que recebe 2 números e retorne o maior deles.

// Como eu fiz.
function maiorNumero(numero1, numero2) {
  // const numero1 = 0;
  // const numero2 = 0;
  if (numero1 > numero2) {
    console.log(`O número ${numero1} é maior que o número ${numero2}`);
  } else {
    console.log(`O número ${numero2} é maior que o número ${numero1}`);
  }
}

maiorNumero(5, 10);

// Correção do curso - Forma 1
// function max(x, y) {
//   if (x > y) {
//     return x;
//   } else {
//     return y;
//   }
// }

// console.log(max(100, 10));

// Correção do curso - Forma 2
// function max(x, y) {
//   if (x > y) {
//     return x;
//   }
//   return y;
// }

// console.log(max(100, 25));

// Correção do curso - Forma 3 - Opção Ternária
// function max(x, y) {
//   return x > y ? x : y;
// }

// console.log(max(200, 25));

// Correção do curso - Forma 4 - Arrow Function
// const max = (x, y) => {
//   return x > y ? x : y;
// };

// console.log(max(40, 39));

// Correção do curso - Forma 5 - Arrow Function Anonima
const max = (x, y) => (x > y ? x : y);
console.log(max(99, 250));
