var buttonColors=["red","blue","green","yellow"] ;
var gamePattern =[];
var userClickedpattern=[];

var gameStart = false;
var level = 0;


$(".btn").click(function(){

    var userChosenColor = $(this).attr("id");
    userClickedpattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    // console.log(userChosenColor)
    checkAnswer(userClickedpattern.length-1);
});

function nextSequence(){
    userClickedpattern=[];
    level++;
    $("#level-title").text("Level "+ level) ;
    var randomNUmber,randomChosenColour;
    randomNUmber = Math.floor(Math.random()*4);
    randomChosenColour = (buttonColors[randomNUmber]);
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    
    
}
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function animatePress(currentColour){
    setTimeout(function(){
        $("#"+currentColour).addClass("pressed").fadeIn(100).fadeOut(100).fadeIn(100);
        $("#"+currentColour).removeClass("pressed");
        },10);
 }

 $(document).keypress(function(){
    if (!gameStart){
       $("#level-title").text("Level "+ level) ;
        nextSequence();
        gameStart = true;
        
    }
 })
function checkAnswer(currrentLevel){
    if (gamePattern[currrentLevel] === userClickedpattern[currrentLevel]){
        console.log("correct");
        if (userClickedpattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000)
        }
    }
    else{
        setTimeout(function(){
            $("body").addClass("red");
            });
            setTimeout(function(){
                $("body").removeClass("red");               
                },200)
        $("#level-title").text("Game Over, Press Any Key to Restart");
        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();
        console.log("wrong");
        startOver();
    }
}

function startOver(){
    $("body").keypress(function(){
        location.reload();
    })
    // level = 0;
    // gamePattern = [];
    // gameStart = flase;    
}
 
