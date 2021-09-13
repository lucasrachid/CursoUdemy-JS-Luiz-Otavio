const pessoa = {
  nome: "Lucas",
  sobrenome: "Rachid",
  idade: 25,
  peso: 105,
  endereco: {
    rua: "Santa Catarina",
    numero: 2999,
  },
};
// Atribuição normal
// const nome = pessoa.nome;
// console.log(nome);

//Atribuicao via desestruturação
const { nome, sobrenome, idade, altura = "" } = pessoa; // Está criando variaveis nome, sobrenome, idade e altura, utilizando os dados do objeto pessoa, sendo que a variável altura, está sendo atribuiída uma atribuição normal.
console.log(nome, sobrenome, idade, altura);

const { peso: pesadao } = pessoa; // Estou criando a variável PESADAO, utilizando a chave peso do objeto pessoa.
console.log(pesadao);

const {
  endereco: { rua, numero }, // Criando variavel Rua e Numero, utilizando dos dados da chave Endereco, objeto pessoa.
} = pessoa;
console.log(rua, numero);

const { nome: n1 = "", ...resto } = pessoa; // Vai pegar todas outras propriedades, que nao tenham variaveis.
console.log(n1, resto);
