const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// FOR OF
for (let numero of numeros) {
  if (numero === 2 || numero === 5 || numero === 6) {
    console.log(`Pulei o número ${numero}`);
    continue;
  }

  if (numero === 8) {
    console.log("8 encontrado, saindo...");
    break;
  }

  console.log(numero);
}

// CONTINUE, vai fazer o código pular determinada ITERAÇÃO.

// BREAK, para a execução do laço.

// FOR IN
// for (let i in numeros) {
//   let numero = numeros[i];

//   if (numero === 2 || numero === 5 || numero === 6) {
//     console.log(`Pulei o número ${numero}`);
//     continue;
//   }

//   if (numero === 8) {
//     console.log("8 encontrado, saindo...");
//     break;
//   }

//   console.log(numero);
// }

// FOR CONVENCIONAL
// for (let i = 0; i < numeros.length; i++) {
//   let numero = numeros[i];

//   if (numero === 2 || numero === 5 || numero === 6) {
//     console.log(`Pulei o número ${numero}`);
//     continue;
//   }

//   if (numero === 8) {
//     console.log("8 encontrado, saindo...");
//     break;
//   }

//   console.log(numero);
// }

// WHILE
// let i = 0;
// while (i < numeros.length) {
// let numero = numeros[i];

// if (numero === 2 || numero === 5 || numero === 6) {
//   console.log(`Pulei o número ${numero}`);
//   i++;
//   continue;
// }

// if (numero === 8) {
//   console.log("8 encontrado, saindo...");
//   break;
// }

// console.log(numero);

// i++;
// }

// DO WHILE
// let i = 0;
// do {
//   let numero = numeros[i];

//   if (numero === 2 || numero === 5 || numero === 6) {
//     console.log(`Pulei o número ${numero}`);
//     i++;
//     continue;
//   }

//   if (numero === 8) {
//     console.log("8 encontrado, saindo...");
//     break;
//   }

//   console.log(numero);

//   i++;
// } while (i < numeros.length);
