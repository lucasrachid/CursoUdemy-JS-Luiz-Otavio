const peso = document.getElementById("weight");
const altura = document.getElementById("height");

document.getElementById("button").addEventListener("click", (event) => {
  event.preventDefault();
  function openAndClose() {
    const toggle = document
      .getElementById("resultado")
      .classList.toggle("show");
    const temClasseInvalido = document
      .getElementById("resultado")
      .classList.contains("invalido");
    if (temClasseInvalido) {
      document.getElementById("resultado").classList.remove("invalido");
    }
  }
  openAndClose();
  const imc = calculoIMC(peso.value, altura.value);
  const resultado = document.getElementById("resultado");

  if (imc >= 1 && imc <= 18.5) {
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)`;
  } else if (imc >= 18.5 && imc <= 24.99) {
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Peso normal)`;
  } else if (imc >= 25 && imc <= 29.99) {
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Sobrepeso)`;
  } else if (imc >= 30 && imc <= 34.99) {
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)`;
  } else if (imc >= 35 && imc <= 39.99) {
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)`;
  } else if (imc >= 40 && imc <= 100) {
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)`;
  } else {
    function invalidIMC() {
      const invalidIMC = document
        .getElementById("resultado")
        .classList.add("invalido");
    }
    invalidIMC();
    resultado.innerHTML = `Dado inválido`;
  }
});

function calculoIMC(peso, altura) {
  return peso / (altura * altura);
}
