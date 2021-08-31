//Java Script, disponibiliza nativamente módulo Math e nele possui diversos métodos.
let num1 = 9.44578;
console.log(Math.floor(num1)); // Para arredondar o valor para baixo.
console.log(Math.ceil(num1)); // Para arredondar o valor para cima.
console.log(Math.round(num1)); // Para arredondar o valor, para o integral mais próximo.

console.log(Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 300)); // Ele retorna qual o valor maior dessa sequência.
console.log(Math.min(1, 23, 50, 0, -20, 1050)); // Retorna o menor valor dessa sequência.
console.log(Math.random()); // Irá gerar um número aleatório, entre 0 e 1, porém o 1 não está incluso.

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // Para gerar um numero aleatorio, entre 10 e 5, sendo o valor maximo 10 e o minimo 5.
console.log(aleatorio);
