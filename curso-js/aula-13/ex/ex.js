const nome = prompt("Qual é o seu nome completo: ");

document.body.innerHTML += `Seu nome completo é: <strong>${nome}</strong> <br>`;
document.body.innerHTML += `Ele possui <strong>
  ${nome.replaceAll(" ", "").length}
</strong> caracteres.<br>`;
document.body.innerHTML += `A segunda letra do seu nome é <strong>${nome[1]}</strong><br>`;
document.body.innerHTML += `O primeiro índice da letra R é o <strong>
  ${nome.indexOf("R")}
</strong> <br>`;
document.body.innerHTML += `O último índice da letra A é o <strong>
   ${nome.lastIndexOf("a")}
</strong> <br>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>
  ${nome.slice(-3)}
</strong><br>`;
document.body.innerHTML += `As palavras do seu nome são: <strong>
  ${nome.split(" ")}
</strong><br>`;
document.body.innerHTML += `Seu nome com letras maiúsculas fica:<strong> ${nome.toUpperCase()}</strong><br>`;
document.body.innerHTML += `Seu nome com letras minúsculas fica: <strong>${nome.toLowerCase()}</strong>`;
