try {
  // É executada, enquanto não tiver erros
  //   console.log(a);
  console.log("Abri um arquivo.");
  console.log("Manipulei o arquivo e gerou um erro.");
  console.log("Fechei o arquivo.");

  try {
    console.log(b);
  } catch (err) {
    console.log("Deu erro");
  } finally {
    console.log("Finally novamente.");
  }
} catch (err) {
  // Ao apresentar erro, irá executar este bloco
  console.log("Tratando o erro.");
} finally {
  // Sempre será executado, a não ser que você o omita, dando erro ou nao.
  console.log("Eu sempre sou executado.");
}

function retornarHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instância de Date.");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}
try {
  const data = new Date("01-01-1970 12:58:12");
  const hora = retornarHora(11);
  console.log(hora);
} catch (err) {
  //Tratar erro.
} finally {
  console.log("Tenha um bom dia.");
}
