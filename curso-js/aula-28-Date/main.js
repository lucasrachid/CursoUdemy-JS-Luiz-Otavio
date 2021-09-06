//Funcao DATE é uma funcao construtora.
// Para utilizar o objeto date, sempre utilizar a palavra new
const tresHoras = 60 * 60 * 3 * 1000; // 60 segundos * 60 * 3horas * 1000 milésimos que é o tempo do JavaScript
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia);
// const data = new Date(0); - 01/01/1970 Timestamp Unix ou época unix, seria o marco 0
// se eu quiser qualquer data, anterior a 01/01/1970, devo colocar valor negativo no argumento
// se for uma data posterior, colocar valor positivo
console.log(data.toString());

const novaData = new Date(2021, 3, 20, 15, 14, 27, 500); // Ano, mês Abril (mesma regra dos indices, vai de 0 ao 11), dia, horas, minutos, segundos, milésimos de segundos
console.log(novaData.toString());

const dataNova = new Date("2021-04-24 20:20:59"); // Uma maneira de pegar data, e horario
console.log(dataNova.toString());
console.log("Dia", dataNova.getDate()); // Fatiamento
console.log("Mês", dataNova.getMonth() + 1); // Fatiamento, os meses comecam contar no 0
console.log("Ano", dataNova.getFullYear()); // Fatiamento
console.log("Hora", dataNova.getHours()); // Fatiamento
console.log("Min", dataNova.getMinutes()); // Fatiamento
console.log("Seg", dataNova.getSeconds()); // Fatiamento
console.log("ms", dataNova.getMilliseconds()); // Fatiamento
console.log("Dia semana", dataNova.getDay()); // Fatiamento

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  //   console.log(data);
  const dia = zeroAEsquerda(data.getDate());
  const mes = data.getMonth() + 1;
  const ano = data.getFullYear();
  const hora = data.getHours();
  const min = data.getMinutes();
  const seg = data.getSeconds();

  return `Hoje é ${dia}/${mes}/${ano} e agora é ${hora}:${min}:${seg}`;
}

const outraData = new Date();
formataData(outraData);
const dataBrasil = formataData(outraData);
console.log(dataBrasil);

// Dias da semana em JavaScript começam no 0 e vai até o 6, sendo:
// 0 Domingo, 1 segunda, 2 terça, 3 quarta, 4 quinta, 5 sexta, 6 sabado.
