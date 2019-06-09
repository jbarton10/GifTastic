//Initial array
var topics= ["Daft Punk", "Turtles", "Nintendo", "Pokemon", "Chess", "Computer Science"];

//Loop meant for populating the page initially
for (var i =0; i < topics.length; i++){
    console.log(topics[i]);
    var newButton= $("<button>"+topics[i]+ "</button>");
    newButton.attr("class", "buttons");
    $("#button-div").append(newButton);
}

//On click function used for bringing up gifs to the page
$(".buttons").on("click", function(){


});
