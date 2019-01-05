// // REDUCE Definition & Syntax
// // The reduce() method is used to apply a function to each element in the array to reduce the array to a single value.

// // Reduce vs. For Loop
// // You can think of reduce() as a for loop, that is specifically for using the values of an array to create something new. Consider the following code:

// var arr = [1, 2, 3, 4];
// var sum = 0;
// for(var i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// // sum = 10

// // The goal of the above code is to find the sum of all of the values in our array. It loops through our array and adds each value to a variable one at a time. When it’s done, our sum is equal to 10. While this code works, there is a much easier way to achieve the same result — using the reduce() function.

// // To use the reduce() function, we’ll start with the same simple array of numbers:

// let arr = [1,2,3,4]

// // arr is the array we’re going to reduce. We want to find the sum of all the values in our array. To do this, each iteration we will add the current value to our accumulator and return it. This returned value will then be our new accumulator.

// let sum = arr.reduce((acc, val) => {
//     return acc + val;
// })

// // Awesome. We’ve used the variable acc to represent our accumulator. As our reduce function works through the arr array, the acc value will increase until the function has completed.
// // Once complete, we can log out our sum variable and see that the function worked:

// console.log(sum)

// // Specifying an Initial Value
// // We’re going to sum our array, but this time, we want to start with an initial value of 100.

// let sum = arr.reduce((acc, val) => {
//   return acc + val;
// }, 100);

// // Reduce & ES6
// // Working with arrow functions allows us to simplify our code even more. When you return from an arrow function you can omit the brackets and the return keyword to specify that you are returning a value.
// // The code above is the exact same as this code:

// let sum = arr.reduce((acc, val) => acc + val, 100);


// CHALLENGE
// Consider the following data:
let data = [
  {
    country: 'China',
    pop: 1409517397,
  },
  {
    country: 'India',
    pop: 1339180127,
  },
  {
    country: 'USA',
    pop: 324459463,
  },
  {
    country: 'Indonesia',
    pop: 263991379,
  }
]
// Using the reduce() method, how would you sum up the population of every country except China?

const sum = data.reduce(acc, val) => {
    return acc + country(val)
}

console.log(sum)
