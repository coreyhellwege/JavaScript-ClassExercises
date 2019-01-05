// Changing CSS on Chrome with JavaScript

// fill one box
document.getElementsByClassName('day')[0].style.fill="pink"

// using query selector instead of getElementsByClassName
const array = document.querySelectorAll('.day')

// fill all boxes
for (i=0; i < 369; i++) {document.getElementsByClassName('day')[i].style.fill="pink"}

// fill with random color
function getRandomColor(){
 var color =  "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
 return color;
}

for (i=0; i < 369; i++) {document.getElementsByClassName('day')[i].style.fill=getRandomColor()}

// animate random colour
function changeColour() {
    for (i=0; i < 369; i++) {
    document.getElementsByClassName('day')[i].style.fill=getRandomColor()
    }
}

let animate = window.setInterval(changeColour, 1000)