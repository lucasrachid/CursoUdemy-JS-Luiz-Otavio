// const array = [1, 2, 3];
// array.push(4);
// array[0] = "Rachid";
// console.log(array);

const pessoa1 = {
  nome: "Lucas",
  sobrenome: "Rachid",
  idade: 25,
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

// [ COLCHETES ] - ARRAY
// { CHAVES } - OBJETO

function criapessoa(nome, sobrenome, idade) /* PARAMETRO */ {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
  };
}

const pessoa2 = criapessoa("Lucas", "Rachid", 25); /* ARGUMENTO */
console.log(pessoa2);

// Pode ser criado a funcao da seguinte maneira

function criaPessoa2(nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
}

const pessoa01 = criaPessoa2("Mylene", "Silva", 20);
console.log(pessoa01);

const pessoaFuncional = {
  nome: "Max",
  sobrenome: "Rangel",
  idade: 25,

  fala() {
    console.log(
      `Olá ${this.nome}, o seu sobrenome é ${this.sobrenome} e voce tem ${pessoaFuncional.idade} anos`
    );
  },
  incrementaIdade() {
    this.idade++;
    // console.log(this.idade);
  },
};

pessoaFuncional.fala();
pessoaFuncional.incrementaIdade();
pessoaFuncional.fala();
pessoaFuncional.incrementaIdade();
pessoaFuncional.fala();
pessoaFuncional.incrementaIdade();
pessoaFuncional.fala();
