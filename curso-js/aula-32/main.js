//Atribuição via Desestruturação
let a = "A";
let b = "B";
let c = "C";
//Lado esquerdo - Desestruturação
//Lado direito - Atribuição
const numeros = [1, 2, 3];
//Vai pegar as variaveis já criadas, A, B e C e atribuir um novo valor
[a, b, c] = numeros;

console.log(a, b, c);
//A passa valer B, B passa valer C e A passa valer C.
const letras = [b, c, a];
[a, b, c] = letras;
console.log(a, b, c);

const numerosN = [10, 22, 33, 44, 55, 66, 77, 88, 99];
// Com a sintaxe abaixo, voce estara criando tres variaveis, sendo as duas primeiras, responsaveis por receber os dois primeiros valores do array, e a terceira variável, irá pegar todos os demais valores do array, por conta do tres pontos (...).
const [primeiroNumero, segundoNumero, ...resto] = numerosN;
console.log(primeiroNumero, segundoNumero);
console.log(resto);

//...rest operator e ...spread operator

const numerosNN = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [um, , dois, , tres] = numerosNN; // Dessa forma, as variaveis vao receber os valores do array acima, porem os indices vazios, vao pular um valor no array.
console.log(um, dois, tres);

// sao 3 indices de array, 0, 1 e 2, e cada array, tem seu indice novamente 0, 1 e 2.
const numerosR = [
  [1, 2, 3], //Indice 0 - 0 1 2
  [4, 5, 6], //Indice 1 - 0 1 2
  [7, 8, 9], //Indice 2 - 0 1 2
];
console.log(numerosR[1][2]); // Numero 6

const [, [, , seis]] = numerosR;
console.log(seis);

const [lista1, lista2, lista3] = numerosR;
console.log(lista3[2]);
