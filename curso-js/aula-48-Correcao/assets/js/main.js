const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function criaLi() {
  const li = document.createElement("li");
  return li;
}

inputTarefa.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    if (!inputTarefa.value)
      return alert("O campo de tarefa deve ser preenchido.");
    criaTarefa(inputTarefa.value);
    limpaInput();
  }
});

function limpaInput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

function criaBotaoApagar(li) {
  li.innerHTML += " ";
  const botaoApagar = document.createElement("button");
  botaoApagar.innerHTML = "Apagar";
  botaoApagar.setAttribute("class", "apagar");
  botaoApagar.setAttribute("title", "Apagar esta tarefa");
  li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerHTML = textoInput;
  tarefas.appendChild(li);
  criaBotaoApagar(li);
  salvarTarefas();
}

btnTarefa.addEventListener("click", () => {
  if (!inputTarefa.value)
    return alert("O campo de tarefa deve ser preenchido.");
  criaTarefa(inputTarefa.value);
  limpaInput();
});

document.addEventListener("click", (e) => {
  const el = e.target;
  if (el.classList.contains("apagar")) {
    el.parentElement.remove();
    salvarTarefas();
  }
});

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll("li");
  const listaDeTarefas = [];
  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas); // CONVERTE ELEMENTOS JS EM STRING PARA GUARDAR NA MEMORIA DO NAVEGADOR.
  localStorage.setItem("tarefas", tarefasJSON);
  console.log(tarefasJSON);
}

function adicionarTarefasSalvas() {
  const tarefas = localStorage.getItem("tarefas");
  const listaDeTarefas = JSON.parse(tarefas); // PEGA OS DADOS ARMAZENADOS EM STRING E TRANSFORMA EM ARRAY NOVAMENTE.
  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}

adicionarTarefasSalvas();
