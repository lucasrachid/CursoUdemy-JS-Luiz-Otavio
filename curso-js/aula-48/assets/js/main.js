// const buttonAdicionarTarefa = document.querySelector("#addTarefa");
// const adicionarTarefa = document.querySelector("#tarefa");
// const resultado = document.querySelector("#resultado");
// const listaTarefas = [];

// buttonAdicionarTarefa.addEventListener("click", () => {
//   listaTarefas.push(adicionarTarefa.value);
//   atualizar();
// });

// function atualizar() {
//   resultado.innerHTML = `<li >`;
// }

const buttonAdicionarTarefa = document.querySelector("#addTarefa");
const adicionarTarefa = document.querySelector("#tarefa");
const resultado = document.querySelector("#resultado");
const listaTarefas = [];

buttonAdicionarTarefa.addEventListener("click", () => {
  listaTarefas.push(adicionarTarefa.value);
  resultado.innerHTML += `<li class="info">
        ${listaTarefas[listaTarefas.length - 1]}
        <button class="buttInfo">Apagar</button>
      </li>`;
});
