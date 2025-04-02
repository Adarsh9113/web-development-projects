var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;
 
var images1 = "images/dice"+ randomNumber1 +".png";
var images2 = "images/dice"+ randomNumber2 +".png";
 
document.querySelector(".dice .img1").setAttribute("src",images1);
document.querySelector(".dice .img2").setAttribute("src",images2);



if(randomNumber1>randomNumber2){
    document.querySelector(".winner p").innerHTML=("fist win");
}
else if(randomNumber1===randomNumber2){
    document.querySelector(".winner p").innerHTML=("draws ");
}
else{
    document.querySelector(".winner p").innerHTML=("second win");
}
var player1=prompt("enter player 1");
var player2=prompt("player2");
document.querySelectorAll(".dice p")[0].innerHTML=(player1);
document.querySelectorAll(".dice p")[1].innerHTML=(player2);