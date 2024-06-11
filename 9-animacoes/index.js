$("h1").css("color", "darkcyan");
$("h1").css("font-size", "48px");

$("h1").css({
    "color": "darkcyan",
    "font-size": "48px"
})

// document.querySelector("h1").style.color = "darkcyan";
// document.querySelector("h1").style.fontSize = "48px";

// document.querySelector("button").classList.add("")

$("button").addClass("my-button");


// $("button").removeClass("my-button");


// $("button").toggleClass("my-button");


// $("h1").text("Goodbye");

// $("p").html("Eu gosto de acaí!");

// $("p").append("<input>");
// $("p").prepend("<input>");

$("p").before("<h2>Título: </h2>");

$("h2").after("<hr>");

$("input").attr("placeholder", "Acompanhamentos")

// $("h1").click(function(){
//     $("h1").fadeOut(500);
//     $("h1").fadeIn(500);
// })

$("body").keydown(function(event){
    if (event.key === "Enter"){
        $("input").slideToggle(500);
    }
})

$("p").on("mouseenter", function(){
    $("em").addClass("em-style");
})
$("p").on("mouseleave", function(){
    $("em").removeClass("em-style");
})

$("h1").click(function(){
    $("h1").animate({"font-size": "12px"}, 1000).
    animate({"font-size": "48px"}, 1000);
})

