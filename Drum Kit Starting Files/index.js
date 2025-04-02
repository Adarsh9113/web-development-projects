// alert("u hev connected to html");
// for(var i=0;i<document.querySelectorAll(".drum").length; i++){
// document.querySelectorAll(".drum")[i].addEventListener("click",function (){
//     alert("i got clicked");
// });
// }

// alert("u have reached web paaegs");
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        // alert("i got clicked");
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        this.style.color="white"; 
 
       

        }
        

        // document.addEventListener("key",function (event) {
        //     console.log(event);
        //     // alert("a key is tapeed");
        // });
        
        // console.log(this.innerHTML);
        // this.style.color="white"; 

    );
}

document.addEventListener("keypress",function (event) {
    console.log(event);
    makeSound(event.key);
    // alert("a key is tapeed");

}
);


function makeSound(key){

    switch(key){

        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();

        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
        case "j":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
        case "s":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
    default:
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
        }
    }