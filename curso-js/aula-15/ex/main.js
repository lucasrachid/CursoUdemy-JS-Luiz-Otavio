const num1 = prompt("Diga o seu número: ");

document.body.innerHTML += `<h1>Seu número é <strong>${num1}</strong><br></h1>`;
document.body.innerHTML += `Raiz quadrada: <strong>${Math.sqrt(
  num1
)}</strong><br>`;
document.body.innerHTML += `O número <strong>${num1}</strong> é inteiro ? <strong>
    ${Number.isInteger(num1)}
</strong> <br>`;
document.body.innerHTML += `É NaN: <strong>${Number.isNaN(num1)}</strong> <br>`;
document.body.innerHTML += `Arredondando para baixo <strong>${Math.floor(
  num1
)}</strong> <br>`;
document.body.innerHTML += `Arredondando para cima <strong>${Math.ceil(
  num1
)}</strong> <br>`;
document.body.innerHTML += `Com duas casas decimais: <strong>${num1.toFixed(
  2
)}</strong>`;
