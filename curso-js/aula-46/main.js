function mostrarHora() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}

// function funcaoDoInterval() {
//   console.log(mostrarHora());
// }

// setInterval(() => {
//   console.log(mostrarHora());
// }, 1000);

// Pode colocar dentro de uma variável também

const timer = setInterval(() => {
  console.log(mostrarHora());
}, 1000);

// ///////////////////////////////// SET TIME OUT //////////////////////////////////////////// //
setTimeout(() => {
  clearInterval(timer);
}, 5000);
