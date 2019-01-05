// FOR EACH

// Note forEach methods look for a function.

// You can create a function and assign it to a variable (this is smart if you want to re-use the function):

const multTwo = function(num) {
    console.log(num * 2)
    return num * 2
}

// Function declaration:

function multiTwo(num) {
    console.log(num * 2)
    return num * 2
}

// Another (less-readable) way is to pass in an anonymous function as an argument of the forEach loop:

arr.forEach(function(num) {
    console.log(num * 2)
    return num * 2
})

const arr = [1, 2, 3, 4, 5]

arr.forEach(multTwo)

// Every time the forEach loops it will run the function


// IFFY - immediately-invoked function expression:

(function(text){
    console.log(text)
})("My anonymous function")



// CALL BACKS

// first argument is a function, second argument is the delay (in milliseconds)

// This code will run the first task, then the third task, then the second task last will run last because it has a 2 second delay

console.log("ran first")
setTimeout(function(){
    console.log("ran second")
}, 2000)
console.log("ran third")

// You can assign the time-delay and function as arguments to the function (outside of the call back) so they can be changed:

function eggTimer(time, func) {
    console.log(`timer is set for ${time} seconds`)
    setTimeout(func, time)
    console.log("timer set")
}

eggTimer(2000, function(){
    console.log("timer has finished!")
})

// Also, in this code the function 'eggTimer' takes the 'time' argument first, but remember that in the 'setTimeout' callback you have to pass in the delay 'time' as the second argument.

// If you have multiple call-backs, they will run simultaneously and each will finish in order of their individual delay.







function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function randNum() {
    return randomIntFromInterval(1000, 4000)
}


function eggTimer(time, fn) {
    console.log(`timer set for ${time} seconds`)
    setTimeout(fn, time)
    console.log('timer set')
}

/*
1. run egg timer
2. set the time as first argument
3. set a function (any you like) as the second argument
*/ 

eggTimer(randNum(), function() {
    console.log('take out the eggs')
})

eggTimer(randNum(), function() {
    console.log('pasta cooked, serve on plate')
})

eggTimer(randNum(), function() {
    console.log('letting the steak rest')
})
console.log('------')


// Different ways of writing functions (older to newer):

function multiplyElements(myArr, num) {

    const array1 = myArr.map(function(x) {
        return x * num
    })


    const array2 = myArr.map((x) => {
        return x * num 
    })

    const array3 = myArr.map( x => x * num)
};


// Challenge:

// This code returns null becuase it evaluates the setTimeout last

function add(first, second, callback) {
    let result = null
    setTimeout(function(){
        // calculating incredibly long math
        result = first + second
        callback(result)
    }, 2000)
};

console.log(
    add(20, 3, function(res) {
        console.log(res)
    })
)

// Don't run a function until setTimeout is complete

// Call backs are like do-blocks in ruby. They are particularly useful when you have asyncronous code. 




