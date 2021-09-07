// let umTexto = "5, 6, 7, 8, 10, 58, 96";
// let separar = umTexto.split(",");
// let soma = 0;
// for (let i = 0; i < separar.length; i++) {
//   soma += Number(separar[i]);
// }

// let divisao = soma / separar.length;
// console.log(divisao.toFixed(2));

function corridinha(text) {
  let separar = text.split(",");
  let soma = 0;
  for (let i = 0; i < separar.length; i++) {
    soma += Number(separar[i]);
  }
  return soma;
}

let outroTexto = "5, 6, 7, 8, 10, 58, 96";
console.log(corridinha(outroTexto));
let media = outroTexto / outroTexto.length;
console.log(media);
