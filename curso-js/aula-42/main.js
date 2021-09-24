/* Escreva uma função chamada ePaisagem que recebe dois argumentos, 
largura e altura de uma imagem (number) e retorne true se a imagem estiver no modo paisagem. */

// SOLUCAO 01
// function ePaisagem(altura, largura) {
//   if (largura > altura) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(ePaisagem(100, 50));

// SOLUCAO 02
// const ePaisagem = (altura, largura) => (largura > altura ? true : false);
// console.log(ePaisagem(150, 100));

// SOLUCAO 03
const ePaisagem = (altura, largura) => largura > altura;
console.log(ePaisagem(1080, 1920));
