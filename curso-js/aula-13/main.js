// let umaString = `Um \"texto\"`;
// let outraString = "Outro \\texto";

// //Quando eu precisar colocar aspas duplas em um texto, tenho que colocar da seguinte forma: "Um \"texto\""

// console.log(umaString);
// console.log(outraString);

//Indice         01234567
let umaString = "Um texto";

console.log(umaString[-1]);
// console.log(umaString.charAt(6)); // É a mesma coisa do que pegar o indice com colchetes.

// console.log(umaString.concat(" em um lindo dia")); Concatenacao, é a mesma coisa que utilizar o + para concatenar.
// console.log(umaString + ` em um lindo dia`); Mesma funcao do codigo acima.
console.log(`${umaString}, em um lindo dia`); // Template String, mesma funcao dos codigos acima também, sempre dar preferencia para utilizar ela.
console.log(`${umaString[4]}`); // Para mostrar o indice da string
console.log(`${umaString.indexOf(`texto`)}`); // Para mostrar em que indice se inicia a palavra texto.
console.log(`${umaString.indexOf(`texto`, 4)}`); // Ele vai procurar onde se inicia o indice da palavra texto, iniciando peloi indice 4.
console.log(`${umaString.lastIndexOf(`texto`)}`); // É quase a mesma coisa do indexOf, porém a diferença, é que inicia a contagem de trás para frente.
console.log(`${umaString.match(/[a-z]/g)}`); // match encontra um Array por conta da flag G
console.log(`${umaString.match(/[a-z]/)}`);
console.log(`${umaString.search(/x/)}`); // Retorna o indice - Similar ao indexOf, mas ele aceita expressões regulares
console.log(`${umaString.replace("Um", "Outro")}`); // Substituir uma parte da string

let outraString = "O rato roeu a roupa do rei de roma.";

console.log(outraString.replace(/r/, "#")); // Vai substituir apenas a primeira letra R que ele achar.
console.log(outraString.length); // Para mostrar quantos caracteres tem sua string
console.log(outraString.slice(2, 6)); // Voce escolhe de que indice até qual indice irá fatiar
console.log(outraString.slice(-5)); // Irá fatiar de trás para frente.
console.log(outraString.split(" ", 3));
console.log(outraString.toUpperCase()); // Deixa tudo maiúscula
console.log(outraString.toLowerCase()); // Deixa tudo minúscula
