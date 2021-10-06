// Escopo Léxico.
const nome = "Rachid";

function falaNome() {
  console.log(nome);
}

falaNome();

// A função conhece as variáveis criada nos "vizinhos", do escopo global.

function usaFalaNome() {
  falaNome();
}

usaFalaNome();
