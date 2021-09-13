// Inicio, Fim e Passo.
// i = index, mas podemos utilizar qualquer outro nome.
// Posso inicializar o index, com numeros negativos, também pode se utilizar de numeros positivos e negativos para o passo.
for (let i = 0; i <= 10; i++) {
  console.log(`Linha ${i}`);
}

for (let i = 0; i <= 10; i++) {
  const par = i % 2 == 0 ? "par" : "ímpar";
  console.log(i, par);
}

const frutas = ["Maçã", "Maracujá", "Uva", "Banana"];
for (let i = 0; i < frutas.length; i++) {
  console.log(`Índice ${i}`, frutas[i]);
}
