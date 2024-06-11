

document.querySelector("body").addEventListener("keydown", function(event){
    if (event.key === "h"){
        alert("hello world");
    }else{
        console.log("A foi " + event.key + " pressionada");
    }
})