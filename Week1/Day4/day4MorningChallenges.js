// Function notations

// Functions are all over javascript and they vary in form. This guide (and challenge) will help you with recognising the different function notations.

// declarative function
function add(x, y) {
    return x + y
}

// pointing to another function e.g. pointing to add
const myAdd = add

// variable with an anonymous function expression (as value)
const add = function() {
    return x + y
}

// arrow functions multiline
const add = (x, y) => {
    return x + y
}

// single line arrow functions
const add = (x, y) => x + y

// implicit return over multiple lines
const add = (x, y) => (
    x + y 
)

// Challenge

// Duplicate the above code but for multiply, divide, subtract

// Be sure to test one at a time (since declaring something twice will break execution)

// declarative function
function divide(x, y) {
    return x / y
}

// variable with an anonymous function expression (as value)
const divide = function(x, y) {
    return x / y
}

// arrow functions multiline
const divide = (x, y) => {
    return x / y
}

// single line arrow functions
const divide = (x, y) => x / y

// implicit return over multiple lines
const divide = (x, y) => (
    x / y 
)

console.log(divide(9,3))

