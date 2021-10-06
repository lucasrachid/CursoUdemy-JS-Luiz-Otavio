function retornaFuncao() {
  const nome = "Rachid";
  return () => {
    return nome;
  };
}

const funcao = retornaFuncao("Lucas");
console.log(funcao());

// Closure é a habilidade da função de poder acessar o seu escopo léxico.
// Escopo da propria função, escopo da função que ela estiver criada e escopo global.
