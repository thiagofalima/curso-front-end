function Programador(nome, idade, linguagem, empresa){
    this.nome = nome;
    this.idade = idade;
    this.linguagem = linguagem;
    this.empresa = empresa;

    this.apresenta = function(){
        alert("Oi meu nome é " + this.nome);
    }
}

const prog1 = new Programador("Marcelin", 45, "Python", "AWS");
const prog2 = new Programador("Jorgin", 32, "Java", "IBM");