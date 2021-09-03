// entre 0 e 11.59 - bom dia
// 12 e 17.59 - boa tarde
// 18 e 23.59 - boa noite
// Qualquer horário que nao exista, colocar qualquer outra mensagem

const hora = 11;
if (hora >= 0 && hora <= 11.59) {
  console.log("Bom dia");
} else if (hora >= 12 && hora <= 17.59) {
  console.log("Boa tarde");
} else if (hora >= 18 && hora <= 23.59) {
  console.log("Boa noite");
} else console.log("Isso é hora de acordar ?");

const grana = true;

if (grana) {
  console.log("Vou sair de casa");
} else {
  console.log("Vou guardar dinheiro");
}
