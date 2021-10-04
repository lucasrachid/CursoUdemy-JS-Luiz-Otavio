// Declaração de função - (Function Hoisting)
falaOi();

function falaOi() {
  console.log("Oi");
}

// First-class objects (Objetos de primeira classe)
// Function Expression
const souUmDado = function () {
  console.log("Sou um dado.");
};

// souUmDado();

function executaFuncao(funcao) {
  console.log("Vou executar a sua função abaixo: ");
  funcao();
}

executaFuncao(souUmDado);

// Arrow Function
const funcaoArrow = () => {
  console.log("Sou uma Arrow Function");
};

funcaoArrow();

// setInterval(function () {
//   console.log("Oi");
// }, 1000);

// setInterval(falaOi, 1000);

// Dentro de um objeto
const obj = {
  falar: () => {
    console.log("Estou falando");
  },
};

obj.falar();
