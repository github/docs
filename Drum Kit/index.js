var noOfDrums=document.querySelectorAll(".drum").length;
for(var i=0;i<noOfDrums;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",call);
}
function call()
{
  var letter=this.innerHTML;
  makeSound(letter);
  animate(letter);
}
document.addEventListener("keydown",function(event) {
  makeSound(event.key);
  animate(event.key);
});

function makeSound (key)
{
  switch (key) {
    case 'w':
    var tom1=new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

    case 'a':
    var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
    break;

    case 's':
    var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
    break;

    case 'd':
    var audio=new Audio("sounds/crash.mp3");
    audio.play();
    break;
    case 'j':
    var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;

    case 'k':
    var audio=new Audio("sounds/tom-4.mp3");
    audio.play();
    break;

    case 'l':
    var audio=new Audio("sounds/snare.mp3");
    audio.play();
    break;

    default:
    console.log(letter);
  }
}
function animate(eventkey)
{
  var cl=document.querySelector("."+eventkey);
  cl.classList.add("pressed");
  setTimeout(function(){
    cl.classList.remove("pressed");
  },100);
}
