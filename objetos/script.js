const pessoa = {
    nome: 'Jesse',
    sobrenome: 'Alves',
    idade: 29,
    email: 'jessealves@example.com',

    descreva: function (params) {
        console.log(`Ola, eu sou ${this.nome} ${this.sobrenome}!`);
    }
}

// console.log(pessoa.nome + " " + pessoa.sobrenome);

pessoa.altura = 1.75;

// console.log(pessoa.altura);
// console.log(pessoa);
// pessoa.descreva();
// pessoa.estado = 'Paraná';

// const atributo = 'idade';

// console.log(pessoa[atributo]);
// console.log(pessoa['idade']);


