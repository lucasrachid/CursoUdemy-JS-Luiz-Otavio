// try {
//   console.log(naoExisto);
// } catch (err) {
//   console.log("Erro");
//   console.log(err);
// }

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("X e Y precisam ser números.");
  }
  return x + y;
}

try {
  console.log(soma(5, 8));
  console.log(soma("i", 8));
} catch (err) {
  console.log("Alguma coisa mais amigável para o Usuário");
}
