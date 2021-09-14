// FOR ESPECIFICO PARA OBJETOS INTERAVEIS
// STRINGS, ARRAYS

const nome = "Lucas Rachid";

// for (let i = 0; i < nome.length; i++) { //CONVENCIONAL
//   console.log(nome[i]);
// }

// for (let index in nome) { // FOR IN
//   console.log(nome[index]);
// }

for (let index of nome) {
  //FOR OF
  console.log(index);
}
//ELE IRÁ PERCORRER A STRING, E IRÁ TRAZER CADA INDICE
// NAO UTILIZAR FOR OF PARA OBJETOS.

const nomes = ["Lucas", "Mylene", "Max", "Pedro", "Ariel"];

for (let indices of nomes) {
  console.log(indices);
}

//FOR EACH
nomes.forEach((valor, indice) => {
  console.log(valor, indice);
});
//VAI MOSTRAR O VALOR E O INDICE DO ARRAY, no exemplo acima, Lucas, indice 0, e assim por diante.

const pess = {
  nome: "Lucas",
  sobrenome: "Rachid",
};

for (let key in pess) {
  console.log(key, pess[key]);
}

// For clássico - Geralmente utiliza com elementos iteráveis (arrays ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings), sem mostrar o indice.
