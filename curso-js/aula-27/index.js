// const pontuacaoUsuario = 999;

// if (pontuacaoUsuario >= 1000) {
//   console.log("Usuário VIP");
// } else {
//   console.log("Usuário normal");
// }

// OPERACAO TERNARIA - Condicao para valor verdadeiro(?) e Condicao para valor falso(:)

const pontuacaoUsuario = 1000;
const nivelUsuario =
  pontuacaoUsuario >= 1000
    ? console.log("Usuario VIP")
    : console.log("Usuario Normal");

const corUsuario = "Pink";
const corPadrao = corUsuario || "Preta";
console.log(corPadrao);
