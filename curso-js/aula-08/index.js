/**
 * Nome
 * Sobrenome
 * Idade
 * Altura
 * IMC
 *  */

const nome = "Lucas";
const sobrenome = "Rachid"; 
const idade = 25;
const alturaEmMetros = 1.70;
const peso = 103;
let indiceMassaCorporal;
indiceMassaCorporal =  peso / (alturaEmMetros * alturaEmMetros);
let anoNascimento;
anoNascimento = 2021 - idade;

console.log(`${nome} ${sobrenome} tem, ${idade} anos, pesa ${peso} KG e possui ${alturaEmMetros} metros de altura, o seu IMC é: ${indiceMassaCorporal}`)
console.log(`Ele nasceu no ano de ${anoNascimento}`)
