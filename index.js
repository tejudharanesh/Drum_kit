//selecting element from click event
for(var i=0; i<document.querySelectorAll(".drum").length;i++){
     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        makesound(this.innerHTML);
        buttonAnimation(this.innerHTML);
     });
} 

//selecting key from key board
addEventListener("keypress",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});

//playing audio based on the sound
function makesound(key){
    var element = key.toUpperCase();
    switch(element){
        case "Q":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "W":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "E":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "R":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "T":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "Y":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "U":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        default:
            console.log(this.innerHTML);

    }
}

function buttonAnimation(key){
    var element = key.toUpperCase();
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add('pressed');
    setTimeout(() => {activeButton.classList.remove('pressed')}, 100);
};








