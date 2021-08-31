/**
 * () O que tiver em parêntes, é realizado primeiro
 * ** Potenciação
 * Multiplicação, Divisão e Resto da divisão (* / %)
 * Soma e subtração (+ e -)
 * Incremento = ++
 * Decremento = --
 */

let contador = 1;
++contador; //2  Pode ser utilizado ++ antes ou depois do operador.
contador++; //3
contador++; //4
contador++; //5
console.log(contador);

let contador2 = 1;
console.log(contador2++); // Realizou a soma, porém, na tela, será printado o valor de contador2 = 1, que foi colocado anteriormente.
console.log(contador2);

const passo = 2;
let contador3 = 0;

contador3 = contador3 + passo;
console.log(contador3);
contador3 = contador3 + passo;
console.log(contador3);
contador3 = contador3 + passo;
console.log(contador3);
contador3 += passo; //Pode-se utilizar desta maneira, para somar, e a mesma lógica para os demais operadores.
console.log(contador3);

const num = parseInt("5"); // O parênteses chama a função e neste caso o parseInt, transforma o tipo de string para Number.
//Pode ser utilizado parseFloat, para numeros quebrados.
console.log(typeof num);
