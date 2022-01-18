

var numberOfDrums=document.querySelectorAll(".drum").length;

//detecting button press or click
for(var i=0;i<numberOfDrums;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        playSound(this.innerHTML);
        buttonAnimations(this.innerHTML);
    });
}

//detecting key press
document.addEventListener("keydown",function(event){
    playSound(event.key);
    buttonAnimations(event.key);
})


//playing sound
function playSound(key){
    switch(key){
        case "w":
            var audio= new Audio("sounds/tom-1.mp3");
            audio.play();
        break;
        case "a":
            var audio= new Audio("sounds/tom-2.mp3");
            audio.play();
        break;
        case "s":
            var audio= new Audio("sounds/tom-3.mp3");
            audio.play();
        break;
        case "d":
            var audio= new Audio("sounds/tom-4.mp3");
            audio.play();
        break;
        case "j":
            var audio= new Audio("sounds/snare.mp3");
            audio.play();
        break;
        case "k":
            var audio= new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;
        case "l":
            var audio= new Audio("sounds/crash.mp3");
            audio.play();
        break;
    }
}


//adding animations 
function buttonAnimations(currentKey){
    document.querySelector("."+currentKey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+currentKey).classList.remove("pressed");
    },100)
}