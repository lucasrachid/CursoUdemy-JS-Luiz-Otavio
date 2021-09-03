// Avaliação de Curto-Circuite (Short Circuit)

console.log("Lucas Rachid" && 0 && "Martins");
//Vai retornar 0, porque o numero 0 é avaliado como falso para JavaScript.

console.log("Lucas Rachid" && "Mylene Oliveira" && "Filhos");
// Vai retornar filhos, porque ele passou por Lucas, é verdadeiro, Mylene, verdadeiro e filhos, também é verdadeiro, logo
//ele retorna a ultima afirmacao.

//false = false = Valor falso literal
//falsy = false = Valor avaliado em falso para o java Script
// '', "", ``, null, undefined, NaN - Todos valores Falsy

function falaOi() {
  return "Oi";
}

const vaiExecutar = false;

const vaiExecutar2 = "Lucas Rachid";

console.log(vaiExecutar && falaOi());
console.log(vaiExecutar2 && falaOi());

console.log(0 || false || null || "Rachid" || true);
// Vai retornar Rachid, porque para o OR (OU), precisa apenas de uma expressao verdadeira, entao na primeira que der verdadeiro, ele já vai validar.

const corUsuario = null;
const corPadrao = corUsuario || "preto";
//Vai retornar preto, porque o usuario nao retornor cor, mas vamos dizer que ele tivesse escolhido vermelho, entao a const seria vermelho ao invés de null, logo
// o programa iria retornar vermelho, porque foi a primeira condicao verdadeira.

const a = 0;
const b = null;
const c = "false";
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
//Vai retornar a variavel C, porque embora esteja um valor false, é uma string, que é avaliado pelo JavaScript como um valor verdadeiro.
