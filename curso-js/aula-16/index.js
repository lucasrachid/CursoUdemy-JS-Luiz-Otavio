// Indices    012345678910 etc, 1 indice por character
const nome = "Lucas Rachid";
console.log(nome[6]);

// Indices         0        1       2, 1 indice para cada elemento
const alunos = ["Lucas", "Joao", "Maria"];
// Procurar colocar apenas um tipo de dados no Array, só objeto, ou só string, etc, para uma boa prática de programação.
console.log(alunos);
console.log(alunos[1]);

// Para editar um dos indices do Array, vai fazer da seguinte forma:

alunos[0] = "Rachid"; // Alterando o indice 0 do array
alunos[3] = "Martins"; // Adicionando um item ao array
console.log(alunos[0]);
console.log(alunos);
console.log(alunos.length); // Verificar quantos elementos tem meu array

alunos[alunos.length] = "Luiza"; // Adicionar um elemento ao final do array
alunos[alunos.length] = "Fabio"; // Adicionar um elemento ao final do array
alunos[alunos.length] = "Luana"; // Adicionar um elemento ao final do array

console.log(alunos);

alunos.push("Douglas"); // Adicionar um elemento ao final do array
alunos.push("Isaias"); // Adicionar um elemento ao final do array

console.log(alunos);

alunos.unshift("Adelino"); // Adiciona um elemento ao inicio do Array, alterando o indice dos elementos existentes.

console.log(alunos);

alunos.pop(); // Remove o ultimo elemento do array
const removido = alunos.pop(); // Removo o ultimo elemento do array, e salvo esse elemento em uma constante.
console.log(alunos);
console.log(removido);

const removido2 = alunos.shift(); // Remove o primeiro elemento do array e salva em uma constante.
console.log(removido2);

delete alunos[1]; // Vou deletar o indice 1 do array, e ele irá ficar vazio
console.log(alunos);

console.log(alunos.slice(0, 3)); // Vai fatiar o Array, e mostrar os elementos do indice 0, até o 2, o 3 é ignorado.
console.log(alunos.slice(0, -1)); // Vai contar o total de elementos do array, vai tirar -1 do final.

// Array é um objeto, que é indexado automaticamente.

console.log(typeof alunos); // Para verificar o tipo
console.log(alunos instanceof Array); // Vai verificar se Alunos é uma array
