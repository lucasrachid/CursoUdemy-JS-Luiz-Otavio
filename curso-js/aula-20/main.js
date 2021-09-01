// IIFE - Immediately Invoked Function Expression Apenas uma informação, sobre um tipo de função que se auto invoca.

function meuEscopo() {
  const form = document.querySelector(".form");
  //   const resultado = document.querySelector(".resultado");
  const resultado = document.getElementById("resultado");
  const pessoas = [];
  //   form.onsubmit = function (evento) {
  //     evento.preventDefault();
  //   };
  //método preventDefault não vai deixar o navegador atualizar a página, ao clicar em submit no formolário.

  // Pode ser feito também da seguinte maneira.

  function recebeEvento(evento) {
    evento.preventDefault();
    // console.log(`Form não foi enviado ${contador}`);
    // let contador = 1;
    // contador++;
    const nome = document.querySelector(".nome");
    const sobrenome = document.querySelector(".sobrenome");
    const peso = document.querySelector(".peso");
    const altura = document.querySelector(".altura");

    // console.log(nome.value, sobrenome.value, peso.value, altura.value);

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });

    console.log(pessoas);

    resultado.innerHTML += `<p> Nome: ${nome.value}<br> Sobrenome: ${sobrenome.value}<br> Peso: ${peso.value} KG<br> Altura: ${altura.value} CM </p>`;
  }

  form.addEventListener("submit", recebeEvento);
}

meuEscopo();
