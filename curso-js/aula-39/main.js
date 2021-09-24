const nome = "Lucas";

//Criar variavel de controle
let controle = 0;

// while (controle <= 10) {
//   console.log(controle);
//   controle++; // SEMPRE, TODA VIDA, Atualizar a variável de controle, seria como o "PASSO" do FOR
// }

// while (controle < nome.length) {
//   console.log(nome[controle]);
//   controle++;
// }

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;

let rand = random(min, max);
console.log(rand);

while (rand != 10) {
  rand = random(min, max);
  console.log(rand);
}

// WHILE CHECA A CONDICAO E DEPOIS EXECUTA O LAÇO
// DO WHILE, EXECUTA O CODIGO E DEPOIS CHECA A CONDICAO

do {
  rand = random(min, max);
  console.log(rand);
} while (rand !== 10);
