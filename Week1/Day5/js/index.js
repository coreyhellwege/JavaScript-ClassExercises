// img.addEventListener('click', function(event) {
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

//   const photo = document.querySelector('#photo')

//   photo.addEventListener('click', function() {
//     alert("You hovered over the button!")
// })







// REQUESTS AND RESPONSES

// OLD STYLE SOLUTION:

const jokeBtn = document.querySelector('#jokeBtn')
const h1 = document.querySelector('#joke')

jokeBtn.addEventListener('click', randomJoke)

function randomJoke(){
    // somehow get a random joke

    // XMLHttpRequest - Takes two arguments, the first is a METHOD and the second is a URL
    // url https://api.chucknorris.io/jokes/random

    // we are going to use a HTTP GET method
    const url = 'https://api.chucknorris.io/jokes/random'
    // Now we need to make an instance to open a connection:
    const ajax = new XMLHttpRequest()
    // open up the connection:
    ajax.open('GET', url)
    // We now have to tell the function to do something when the event triggers:
    ajax.onreadystatechange = function(){
    // in the console, lets extract the readyState (opened, loading etc), status code (200 success etc) and the responseText (text received from the server)
        console.log(
            ajax.readyState, 
            ajax.status, 
            ajax.responseText
            )
        // now we're going to check if the method's readyState is 4-DONE and the status is 200-SUCCESS
        if(ajax.readyState === 4 && ajax.status === 200) {
        // then we will parse the server text which is JSON into Javascript and store the result in an object variable
            const response = JSON.parse(ajax.responseText)
            // so now we can extract the 'value' key from the 'response' object and store it in an object variable 'joke'
            const joke = response.value
            // and then we display the 'joke' object in an H1
            h1.innerText = joke
        }
    }
    // Finally we need to invoke the send method on the 'ajax' object variable
    ajax.send()
}







