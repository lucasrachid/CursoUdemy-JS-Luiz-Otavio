//Function definida com a palavra function, tem uma função especial chamada "Arguments", que sustenta todos valores enviados de argumentos.
function funcao(a, b, c) {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  console.log(total, a, b, c);
}
funcao(1, 2, 3, 4, 5, 6, 7); // 1 é o argumento A, 2 é o argumento B, 3 é o argumento C, todos os argumentos, ficarão armazenados
// na palavra "arguments", porém apenas os 3 primeiros, irão receber o patrametro.

function funcao2(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}
funcao2(1, 2, 3); // Ele cria as variáveis D, E e F, mas deixa como undefined.

function soma(a, b = 0) {
  //   b = b || 0;

  return a + b;
}

console.log(soma(2));

//Atribuicao via desestruturação - OBJETO
function funcao3({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}

let objPerson = { nome: "Mylene", sobrenome: "Oliveira", idade: 21 };
funcao3({ nome: "Lucas", sobrenome: "Rachid", idade: 25 });
funcao3(objPerson);

//Atribuicao via desestruturação - ARRAY
function funcao4([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}
let vetor = ["Boné", "Calça", "Óculos"];
funcao4(vetor);

function conta(operador, acumulador, ...numeros) {
  for (let i = 0; i < numeros.length; i++) {
    if (operador === "+") {
      acumulador += numeros[i];
    } else if (operador === "-") {
      acumulador -= numeros[i];
    } else if (operador === "/") {
      acumulador /= numeros[i];
    } else if (operador === "*") {
      acumulador *= numeros[i];
    }
  }
  console.log(acumulador);
}
conta("+", 0, 20, 30, 40, 50);
conta("-", 0, -50, 30);
conta("*", 50, 2, 3);
conta("/", 10, 2);

const numbers = (...args) => {
  console.log(args);
};
numbers("s", "+", 8, 9, 10);
