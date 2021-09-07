// LET NAO PODE SER REDECLARADA NO ESCOPO GLOBAL, mas pode ser redeclarada em um novo bloco, e também pode ser atribuida um novo valor.
let nome = "Rachid";

const verdadeira = true;

var nome2 = "Rachid";

if (verdadeira) {
  console.log(nome, nome2);
  if (verdadeira) {
    console.log("ok");
  }
}
