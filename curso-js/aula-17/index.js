// function saudacao(nome) {
//   console.log(`Bom dia ${nome}!`);
//   return 123456;
// }

// saudacao("Lucas");
// saudacao("Rachid");

// const variavel = saudacao("Martins");
// console.log(variavel);

function saudacao(nome) {
  return `Bom dia ${nome}`;
}

const variavel = saudacao("Rachid");
console.log(variavel);

function soma(x, y) {
  const resultado = x + y;
  return resultado;
}

console.log(soma(5, 7));

const raiz = function (n) {
  return n ** 0.5;
};

console.log(raiz(9));

const raizArrow = (n) => {
  return n ** 0.5;
};

console.log(raizArrow(25));

const raizArrow2 = (n) => {
  return n ** 0.5;
};

console.log(raizArrow2(49));
