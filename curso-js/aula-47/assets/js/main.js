const iniciar = document.querySelector("#iniciar");
const pausar = document.querySelector("#pausar");
const zerar = document.querySelector("#zerar");
const timer = document.querySelector("#timer");
let segundos = 0;
let time;

function startTimer() {
  time = setInterval(function () {
    segundos++;
    timer.innerHTML = getTimeFromSeconds(segundos);
  }, 1000);
}

function getTimeFromSeconds(seconds) {
  const data = new Date(seconds * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC", // OU GMT
  });
}

console.log(getTimeFromSeconds(12));

iniciar.addEventListener("click", (event) => {
  clearInterval(time);
  timer.style.color = "black";
  startTimer();
});

pausar.addEventListener("click", (event) => {
  timer.style.color = "red";
  clearInterval(time);
});

zerar.addEventListener("click", (event) => {
  timer.style.color = "black";
  clearInterval(time);
  timer.innerHTML = "00:00:00";
  segundos = 0;
});
