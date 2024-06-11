

// const aluno =  {
//     nome: "João",
//     idade: 20,
//     curso: "Programação Front-End",
//     matricula: 12345
// };
// const aluno2 =  {
//     nome: "Miguel",
//     idade: 20,
//     curso: "Programação Front-End",
//     matricula: 12346
// };

// Criando uma função construtora de objetos

function Aluno(nome, idade, curso, matricula, nota1, nota2){
    this.nome = nome;
    this.idade = idade;
    this.curso = curso;
    this.matricula = matricula;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.apresenta = function(){
        alert('Oi meu nome é ' + this.nome);
    }
    this.estuda = function(){
        console.log("Estou estudando ...");
    }
    this.media = function(){
        return (this.nota1 + this.nota2) / 2;
    }
}


const aluno1 = new Aluno("João", 20, "Front-End", 1, 7, 8);
const aluno2 = new Aluno("Maria", 34, "Python", 3, 5, 9);

// console.log(aluno1.nome);
// console.log(aluno1.idade);
// console.log(aluno1.curso);
// console.log(aluno1.matricula);


aluno2.nota1 = 7;

const nomeAluno1 = aluno1.nome;
alert(nomeAluno1);

const mediaAluno1 = aluno1.media();
alert("Sua média é: " + mediaAluno1);

const idadeAluno1 = aluno1["idade"];
alert("Idade: " + idadeAluno1);

