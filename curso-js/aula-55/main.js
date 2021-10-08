// Funções Auto invocadas.
// IIFE -> Immediately invoked function expression

// (function () {
//   const nome = "Lucas";
//   console.log(nome);
// })();

// Essa função, não irá ter contato com o escopo global e será executada sem a necessidade de chamá-la.

(function (idade, peso, altura) {
  const sobrenome = "Rachid";
  function criaNome(nome) {
    return nome + " " + sobrenome;
  }
  function falaNome() {
    console.log(criaNome("Lucas"));
  }
  falaNome();
  console.log(idade, peso, altura);
})(25, 103, 1.71);
