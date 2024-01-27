class pessoa {
   nome;
   idade;

constructor(nome, idade) {
   this.nome = nome ? nome : 'Desconhecido';
   this.idade = idade ? idade : 0;
}

   descrever() {
       console.log(`Ola, eu sou ${this.nome}!`);
   }
};

const jesse = new pessoa('Jessé', 29);


const andressa = new pessoa();
// andressa.nome = 'Andressa';
// andressa.idade = 28;

// console.log(jesse);
// console.log(andressa);
// jesse.descrever();
// andressa.descrever();

// FUNÇÕES RECEBENDO OBJETOS COMO PARAMETRO

function compararIdades(p1, p2) {
   if (p1.idade > p2.idade) {
       console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
   } else if (p2.idade > p1.idade) {
       console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
   } else {
       console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
   }
};

const pessoa1 = new pessoa('José', 40);
const pessoa2 = new pessoa('Maria', 40);
compararIdades(pessoa1, pessoa2);

new pessoa('Carlos', 13).descrever();
