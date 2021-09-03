/* Operadores Lógicos */

// && -> AND -> E
const usuario = "Rachid"; // form usuário digitou
const senha = "123456"; // form usuário digitou

const logIn = usuario === "Rachid" && senha === "123456";
console.log(logIn);

// || -> OR -> OU
const usuario2 = "Rachid"; // form usuário digitou
const senha2 = "123456"; // form usuário digitou

const logIn2 = usuario2 === "Rachid" || senha2 === "123456";
console.log(logIn2);

// ! -> NOT -> NÃO
console.log(!false); // Vai dar True, porque está negando falso
console.log(!true); // False, porque está negando o true
console.log(!!!true); // Posso utilizar o operador quantas vezes eu quiser para negar, entao ele negou que era verdadeiro, dps negou que era falso e depois negou novamente que era verdadeiro.
