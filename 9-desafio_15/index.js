// const preco = $(".preco").text();

$("button.livro").click(function(){
    alert("Compra realizada no valor de " + $("#livro").text());
})

$("button.jogo").click(function(){
    const preco = $("#jogo").text();
    alert("Compra realizada no valor de " + preco);
})

$("button.monitor").click(function(){
    const preco = $("#monitor").text();
    alert("Compra realizada no valor de " + preco);
})

