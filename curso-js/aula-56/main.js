// Factory Functions
// Funções Fábricas

function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    fala: function (assunto) {
      return `${nome} está ${assunto}`;
    },
  };
}
// Quando uma função, está dentro de um objeto, é chamada de método.

const p1 = criaPessoa("Lucas", "Rachid");
const p2 = criaPessoa("Maria", "Joaquina");
console.log(p1);
console.log(p1.fala("falando sobre JS."));
console.log(p2.fala("Falando sobre JS."));

// this se refere a quem chamar o objeto

function criaPessoa2(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    //GETTER
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    //SETTER
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
      console.log(valor);
    },

    fala: function (assunto = "falando sobre NADA.") {
      return `${this.nome} está ${assunto}`;
    },
    altura: altura,
    peso: peso,
    // imc: function () {
    //   const indice = this.peso / this.altura ** 2;
    //   return indice.toFixed(2);
    // },
    // GETTER
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p3 = criaPessoa2("Lucas", "Rachid", 1.7, 103);
// console.log(p3.imc);

p3.nomeCompleto = "Mylene de Oliveira Silva";
// console.log(p3.nomeCompleto);
// console.log(p3.nome);
// console.log(p3.sobrenome);
console.log(p3.fala());

const p4 = criaPessoa2("Max", "Rangel", 1.8, 80);
const p5 = criaPessoa2("Ariel", "Oliveira", 1.8, 130);

console.log(p4.imc);
console.log(p5.imc);
