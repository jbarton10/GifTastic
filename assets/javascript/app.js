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
    //Clear out gifs div
    $("#gifs").empty();
    
    var buttonClicked = $(this).text();
    buttonClicked = buttonClicked.replace(" ", "-");

   


    //Might need to make a for loop that turns spaces into dashes
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + buttonClicked + "&api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj";

  

    $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
            console.log(response);
            console.log(queryURL);
            //Loop to make gifs
            for (var i = 0; i < 10; i++){
                console.log(response.data[i].url);
                var newGif= $("<img>");
                //Should initially be still
                newGif.attr("src", response.data[i].bitly_gif_url);
                //Still image for gif
                newGif.attr("still", response.data[i].url);
                newGif.attr("animated", response.data[i].bitly_gif_url);
                newGif.attr("class", "gifImage");
                newGif.attr("data-state", "still");
                $("#gifs").append(newGif);

            }
            
        });


});

//On click function to add more buttons as well as gifs to the page
//MIGHT NEED THIS FOR BUG FIX       $("body").on("click", ".button class name", function that you want to call)
$("#submitButton").on("click", function(){
    //Clear out gifs div
    $("#gifs").empty();
    
    var enteredInput = $("#actualInput").val();
    enteredInput.replace(" ","-");
    console.log(enteredInput);

     //Makes the input a button, can go anywhere in the code
     //Also makes sure that the button can only be added once
     if (!(topics.includes(enteredInput))){
     var newButton= $("<button>"+enteredInput+ "</button>");
     newButton.attr("class", "buttons");
     $("#button-div").append(newButton);
     topics.push(enteredInput);
     console.log(topics);
    }


     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + enteredInput + "&api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj";
    $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
            console.log(response);
            console.log(queryURL);
            //Loop to make gifs
            for (var i = 0; i < 11; i++){
                console.log(response.data[i].url);
                var newGif= $("<img>");
                //Should make it still for each
                newGif.attr("src", response.data[i].bitly_gif_url);
                //Still image for gif
                newGif.attr("still", response.data[i].url);
                newGif.attr("animated", response.data[i].bitly_gif_url);
                newGif.attr("class", "gifImage");
                newGif.attr("data-state", "still");
                $("#gifs").append(newGif);
            }
            
        });

});
//Function used to make the giphs both pause and play
$(".gifImage").on("click", function(){
    var state = $(this).attr("data-state");
    var animate; //URL for giph that moves
    var pause; //URL for paused giph

    if(state ==="animate"){
        $(this).attr("src",pause);
        $(this).attr("data-state", "still");
    }
    if(state ==="pause"){
        $(this).attr("src",animate);
        $(this).attr("data-state", "animate");
    }

});
