// alert("Adicionando JS ao HTML");

// console.log(document.head);

// console.log(document.getElementsByTagName("h1"));

// console.log(document.getElementsByClassName("titulo"));

// document.querySelector("p em").textContent = "AÇAÍ";

var listaBotoes = document.querySelectorAll("button");

console.log(listaBotoes);

for (var i = 0; i < listaBotoes.length; i++){
    // console.log(listaBotoes[i]);
    listaBotoes[i].textContent = "Compre Aqui!";
}


document.querySelector("p").innerHTML = "Eu gosto de açaí!";
document.querySelector("p").textContent = "Eu gosto de AÇAÍ!";


// document.querySelector("h1").style.color = "palevioletred";
// document.querySelector("h1").style.fontFamily = "cursive";

document.querySelector("h1").classList.add("titulo-estilo");

// document.querySelector("body").style.backgroundColor = "palegoldenrod";
// document.querySelector("h1").style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
// document.querySelector("p").style.color = "cornflowerblue";

document.querySelector("body").classList.add("body-estilo");
document.querySelector("h1").classList.add("h1-estilo");
document.querySelector("p").classList.add("p-estilo");

// var myButton = document.querySelector("button");

// myButton.addEventListener("click", function(){
//     alert("Esse botão foi clicado");
// })

// var myButton = document.querySelectorAll("button");

// for (var i = 0 ; i < myButton.length ; i++){
//     myButton[i].addEventListener("click", function(){
//         alert("O botão " + (i + 1) + " foi clicado");
//     })
// }


var myButton = document.querySelector("button");

myButton.addEventListener("click", function (){
    document.querySelector("h1").textContent = "Goodbye!";
})


