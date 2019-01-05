// OLD JAVASCRIPT CONVENTION

// To declare a variable
var name = "Corey"

// To declare a variable and then set a value to it
var surname
surname = "Hellwege"


// NEW JAVASCRIPT CONVENTION

// Defining a constant (value can't be changed). Naming convention is camel case.
const fruitName = "Apple"

// Defining a variable
let type = "Fruit"



// Practice
const age = 25

const person = {
    firstName: "Corey",
    age: age
}

const fruits = [
    "banana",
    "apple",
    "pineapple"
]

const friend = true


// METHODS

function printHello() {
    console.log("Hello World")
}

// To invoke (call)the function we need to put perentheses after the functions name
printHello()


// ARGUMENTS

function printGreeting(greet) {
    console.log(greet)
}

printGreeting("hola")
printGreeting("G'Day")


// RETURNS
// If you dont include 'return' the method will return undefined.
// If you put console.log instead of return, it would just print the answer as a string and not the actual value. That's why we assign the value to a constant called 'result' and print 'result' with console.log

function add(x, y) {
    return x + y
}

const result = add(2,4)

console.log(result)


// ANONYMOUS FUNCTIONS
// Storing a function as a value

let multiply = function(x, y) {
    return x * y
}

const multiplyResult = multiply(5,7)

console.log(multiplyResult)

// You can then do things like access the value of 'multiply' in an array. 
const mathFunctions = [
    multiply
]

// You can do other things like adding a function as a value into another function


// IF STATEMENTS (CONTROL FLOW)
const x = 10

if (x > 10) {
    console.log("you have a number higher than 10")
} else if (x == 10) {
    console.log("you number is 10")
} else {
    console.log("you have a number less than 10")
}


// SWITCH STATEMENT (CONTROL FLOW)

switch(result) {
    case 10:
    console.log("it is 10")
    break
    default:
    console.log("everything else")
}



function mainMenu() {
    console.log(`
        1. Cheese Roll
        2. Sandwich
    `)
}

function menuLoop() {
    mainMenu()
}

menuLoop()

