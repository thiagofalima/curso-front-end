new Vue({
    el:"#app",
    data:{
        titulo: 'Usando VueJS!',
        texto: 'um texto bem daora aqui',
        atributo: 'minha-classe',
        placeholder: 'O que está pensando?',
        mudaCor: false,
    },
    methods:{
        handleClick(){
            alert('Boa noite!');
        },

        mudaTitulo(event){
            this.titulo = event.target.value;
        },

        mudaTexto(event){
            this.texto = event.target.value; 
        },
        destacaParagrafo(){
            this.mudaCor = !this.mudaCor;
        },
        postaPubli(){
            alert('Post publicado!');
        },
    },
})

