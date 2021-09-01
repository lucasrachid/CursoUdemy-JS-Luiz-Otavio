/* 
Primitivos - String, number, boolean, undefined, null, (bigint, symbol) - VALORES IMUTÁVEIS
Voce pode alterar o "valor", porem nao o "tipo", exemplo

let nome = "rachid"
nome = "lucas"

Eu declarei a variavel nome, como rachid, e depois re declarei com o valor string lucas, mas nao mudei de string para number ou qualquer outro tipo.
Outro exemplo:
let a = "A"
let b = a; // Cópia
console.log(a, b)

a = "Outra coisa"
console.log(a, b)

VALOR DE B, NAO IRA MUDAR.

*/

/* 
Referência (Mutável) - Array, objetct, function 
Exemplo:

let a = [1, 2, 3, 4];
let b = a;
console.log(a, b);

a.push(4);
console.log(a, b);
b. pop();
console.log(a, b);

VALOR DE B VAI MUDAR, PORQUE TANTO A VARIAVEL A COMO A B, APONTAM PARA O MESMO LOCAL DA MEMORIA.
*/
