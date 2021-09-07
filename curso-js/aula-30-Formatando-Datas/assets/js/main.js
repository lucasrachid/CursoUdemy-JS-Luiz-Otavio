const data = new Date();
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
const dia = zeroAEsquerda(data.getDate());
const mes = getMesTexto(data.getMonth() + 1);
const ano = data.getFullYear();
const hora = data.getHours();
const min = data.getMinutes();
const seg = zeroAEsquerda(data.getSeconds());

function getDiaSemanaTexto(diaSemana) {
  let diaSemanaTexto;
  switch (diaSemana) {
    case 0:
      diaSemanaTexto = "domingo";
      return diaSemanaTexto;
    //   break;
    case 1:
      diaSemanaTexto = "segunda-feira";
      return diaSemanaTexto;
    //   break;
    case 2:
      diaSemanaTexto = "terça-feira";
      return diaSemanaTexto;
    //   break;
    case 3:
      diaSemanaTexto = "quarta-feira";
      return diaSemanaTexto;
    //   break;
    case 4:
      diaSemanaTexto = "quinta-feira";
      return diaSemanaTexto;
    //   break;
    case 5:
      diaSemanaTexto = "sexta-feira";
      return diaSemanaTexto;
    //   break;
    case 6:
      diaSemanaTexto = "sábado";
      return diaSemanaTexto;
    //   break;
    default:
      diaSemanaTexto = "";
      return diaSemanaTexto;
    //   break;
  }
}

function getMesTexto(mes) {
  let mesTexto;
  switch (mes) {
    case 1:
      mesTexto = "Janeiro";
      return mesTexto;
    //   break;
    case 2:
      mesTexto = "Fevereiro";
      return mesTexto;
    //   break;
    case 3:
      mesTexto = "Março";
      return mesTexto;
    //   break;
    case 4:
      mesTexto = "Abril";
      return mesTexto;
    //   break;
    case 5:
      mesTexto = "Maio";
      return mesTexto;
    //   break;
    case 6:
      mesTexto = "Junho";
      return mesTexto;
    //   break;
    case 7:
      mesTexto = "Julho";
      return mesTexto;
    //   break;
    case 8:
      mesTexto = "Agosto";
      return mesTexto;
    //   break;
    case 9:
      mesTexto = "Setembro";
      return mesTexto;
    //   break;
    case 10:
      mesTexto = "Outubro";
      return mesTexto;
    //   break;
    case 11:
      mesTexto = "Novembro";
      return mesTexto;
    //   break;
    case 12:
      mesTexto = "Dezembro";
      return mesTexto;
    default:
      mesTexto = "";
      return mesTexto;
    //   break;
  }
}

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

const paragrafo = document.querySelector("h1");
paragrafo.innerHTML = `${diaSemanaTexto}, ${dia} de ${mes} de ${ano} - ${hora}:${min}:${seg}`;
