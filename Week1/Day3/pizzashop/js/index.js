// // Things to know:
// // Need to be able to capture, send and receive data

// // targeting customElements
// // adding events 
// // ajax


// // btn is an object
// const btn = document.querySelector('#btn1')
// const text = document.querySelector('#titleInput')
// const title = document.querySelector('#title')
// // console.dir(btn)

// btn.addEventListener('click', function(event) {
//     event.target.style.backgroundColor = getRandomColor()
// })

// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }



// btn.addEventListener('dblclick', function(event) {
//     // alert("You hovered over the button!")
//     event.target.style.backgroundColor = random_bg_color()
// })

// function random_bg_color() {
//     var x = Math.floor(Math.random() * 256);
//     var y = Math.floor(Math.random() * 256);
//     var z = Math.floor(Math.random() * 256);
//     var bgColor = "rgb(" + x + "," + y + "," + z + ")";
//  console.log(bgColor);
  
//     document.body.style.background = bgColor;
//     }

// random_bg_color();

// // btn.addEventListener('mouseout', function(event) {
// //     alert("You released the click!")
// // })



// text.addEventListener("input", changeText)

// function changeText(event) {
//     const text = event.target.value
//     title.innerHTML = ''
//     const arr = text.split('').map(function(char){
//         return addColorToCharacter(char)
//     })
//     .forEach(function(element) {
//         title.appendChild(element)
//     })
// }

// const randColor = () => "#"+((1<<24)*Math.random()|0).toString(16)

// function addColorToCharacter(char) {
//     const span = document.createElement('span')
//     span.innerText = char
//     span.style.color = randColor()
//     return span
// }



// Challenge: Add items to a list.

const btn = document.querySelector('#btn')
const text = document.querySelector('#textInput')
const list = document.querySelector('#list')

btn.addEventListener('click', function(){
    const li = document.createElement('li')
    li.innerText = text.value
    list.appendChild(li)
    textInput.value = ''
})

