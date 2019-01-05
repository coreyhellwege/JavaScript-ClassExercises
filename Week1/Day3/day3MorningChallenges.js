// Morning challenge

// We want you to be able to write a function that returns all of the values of an object’s own properties (return the objects values in an array).

// Make sure you’re writing your functions the old school way (not es6 with the arrow notation).

// Example:
// values({one: 1, two: 2, three: 3});
// => [1, 2, 3]

// Your code here!
const values = function(object) {
    return Object.keys(object)
}

console.log(
    values({one: 1, two: 2, three: 3})
)

// The function above is an anonymous function expression. Why is this the case?

// How would we write the same function declaratively? How would we write it as an named function expression?

function values(object) {
    return Object.keys(object)
}

// Now solve the problem using es6 syntax.

