// return
// Retorna um valor
// Termina a função
function soma(a, b) {
  return a + b;
}

console.log(soma(5, 2));

// function soma2(a, b) {
//   console.log(a + b);
// }

// soma2(5, 2);

// document.addEventListener("click", function () {
//   document.body.style.backgroundColor = "red";
// });

function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
  };
}

const p1 = criaPessoa("Lucas", "Rachid");
const p2 = {
  nome: "Mylene",
  sobrenome: "Silva",
};

console.log(p1);
console.log(p2);
console.log(typeof p1, typeof p2);

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + " " + resto;
  }
  return falaResto;
}

const fala = falaFrase("Olá");
const resto = fala("mundo!");
console.log(resto);

// function duplica(n) {
//   return n * 2;
// }

// function triplica(n) {
//   return n * 3;
// }

// function quadriplica(n) {
//   return n * 4;
// }

// console.log(duplica(2));
// console.log(triplica(2));
// console.log(quadriplica(2));

function criaMultiplicador(multiplicador) {
  // multiplicador
  function multiplicacao(n) {
    return n * multiplicador;
  }
  return multiplicacao;
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(5));
console.log(quadriplica(4));

//Function dentro de Function, primeiro, ela irá receber o argumento 1, para satisfazer o parâmetro 1, o próximo argumento que ela receber, irá satisfazer o parâmetro 2, e assim por diante.
// Function Closure. "Fechamento."
