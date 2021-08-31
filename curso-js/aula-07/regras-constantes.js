/**
 * Não podemos criar constantes com palavras reservadas
 * Constantes precisam ter nomes significativos
 * Não pode começar o nome de uma constante com um número
 * Não podem conter espaços ou traços
 * Utilizamos camelCase, exemplo: nomeCompleto, identidadeRG, dataDeNascimento, etc.
 * As constantes são Case-sensitive, ou seja, se você colocar nome e NOME e nOmE, são 3 constantes diferentes.
 * Constantes não mudam o valor
 */


const nome = 'Lucas';
console.log(nome)

const primeiroNumero = 5;
const segundoNumero = 10;
const conta = primeiroNumero * segundoNumero;

console.log(conta)


console.log(typeof conta); //Para saber o tipo primitivo da variável/constante