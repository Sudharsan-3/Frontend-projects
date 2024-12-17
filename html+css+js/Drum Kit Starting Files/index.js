var drums = document.querySelectorAll(".drum").length;
for (var i = 0; i < drums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttoninnerHtml = this.innerHTML;
        console.log(buttoninnerHtml);
        KeePress(buttoninnerHtml);
        buttonanimation(buttoninnerHtml);
    });
}

document.addEventListener("keypress",function(event){
    console.log(event);
    KeePress(event.key);
    buttonanimation(event.key);
    
})

function KeePress(s){
    switch (s) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var kisck = new Audio("./sounds/crash.mp3");
            kisck.play();
            break;
        case "l":
            var kisck = new Audio("./sounds/kick-bass.mp3");
            kisck.play();
            break;
        default:
            console.log(buttoninnerHtml);
            break;
    }
}

function buttonanimation(animation){
 var activation =  document.querySelector("."+animation);
activation.classList.toggle("pressed");
   setTimeout(function(){
    activation.classList.toggle("pressed")
   },110)
}