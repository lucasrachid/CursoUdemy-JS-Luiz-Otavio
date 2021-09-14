const paragrafos = document.querySelector(".paragrafos");
//SELECIONANDO VARIOS ELEMTNOS
const ps = paragrafos.querySelectorAll("p");

//Captando os estilos computados pelo browser
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of ps) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = "#FFFFFF";
  p.style.borderRadius = "5px";
  console.log(p); // ITERANDO ELEMENTOS
}
