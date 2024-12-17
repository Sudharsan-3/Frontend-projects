var randamNumber1=(Math.random());
var dicenumber=(Math.floor(randamNumber1*6)+1);
console.log(dicenumber);
if (dicenumber===1){
    document.querySelector(".img1").setAttribute("src","./images/dice1.png");
}
else if(dicenumber===2){
    document.querySelector(".img1").setAttribute("src","./images/dice2.png");
}
else if(dicenumber===3){
    document.querySelector(".img1").setAttribute("src","./images/dice3.png");
}
else if(dicenumber===4){
    document.querySelector(".img1").setAttribute("src","./images/dice4.png");
}
else if(dicenumber===5){
    document.querySelector(".img1").setAttribute("src","./images/dice5.png");
}
else{
    document.querySelector(".img1").setAttribute("src","./images/dice6.png");
}

var randamNumber2=(Math.random());
var dicenumber1=(Math.floor(randamNumber2*6)+1)
console.log(dicenumber1);
if (dicenumber1===1){
    document.querySelector(".img2").setAttribute("scr","./images/dice1.png");
}
else if(dicenumber1===2){
    document.querySelector(".img2").setAttribute("src","./images/dice2.png");
}
else if(dicenumber1===3){
    document.querySelector(".img2").setAttribute("src","./images/dice3.png");
}
else if(dicenumber1===4){
    document.querySelector(".img2").setAttribute("src","./images/dice4.png");
}
else if(dicenumber1===5){
    document.querySelector(".img2").setAttribute("src","./images/dice5.png");
}
else{
    document.querySelector(".img2").setAttribute("src","./images/dice6.png");
}


if (dicenumber>dicenumber1){
    console.log(document.querySelector(".container h1").innerHTML="Player 1 Won");
 }
 else if (dicenumber<dicenumber1){
    console.log(document.querySelector(".container h1").innerHTML="Player 2 Won");
 }
 else{
    console.log(document.querySelector(".container h1").innerHTML="Draw");
 }