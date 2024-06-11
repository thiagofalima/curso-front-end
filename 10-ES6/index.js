import {soma, mult} from "./modulo.js";

const s = soma(2, 3);
const m = mult(6, 5);

console.log(s);
console.log(m);

class Aluno {
    constructor(nome, idade,curso){
        this.nome = nome;
        this.idade= idade;
        this.curso= curso;
    }

apresentar(){
    console.log('Olá, meu nome é' + this.nome);
     }
}

const aluno1 = new Aluno("João Silva", 20, "Ciência da Computção");
const aluno2 = new Aluno("Maria Souza", 18, "Engenharia Eletrica");

aluno1.apresentar();
aluno2.apresentar();

// Arrow Functions

const dobro = (x) => x * 2;
const resultado = dobro(4);
console.log(resultado);

const cumprimenta = (nome) => "Oi, eu me chamo " + nome;
alert(cumprimenta("Thiago"));

