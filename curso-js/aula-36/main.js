const frutas = ["Maçã", "Banana", "Uva", "Maracujá", "Morango"];

//For Convencional
// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }

// For in -> lê os índices ou chaves do objeto
for (let i in frutas) {
  console.log(frutas[i]);
}

const pessoa = {
  nome: "Lucas",
  sobrenome: "Rachid",
  idade: 25,
  peso: 105,
  altura: 1.7,
  endereco: {
    rua: "Santa Catarina",
    numero: 2999,
  },
};

for (let chaves in pessoa) {
  console.log(pessoa[chaves]);
}

console.log(pessoa.nome);
console.log(pessoa["nome"]);

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}
