// challenge 1:
// Define the function `threeMult`, which takes one argument (a number), and returns the result of that number multiplied by 3. Define a method called `arrMult` that takes an array as an argument. In `arrMult`, use the function `threeMult` on each element of the array that was passed in as the argument. Return the array that results from this (each element multiplied by 3), and store in a well-named variable.

// Remember in JS that we have to use the return keyword! (edited)

function threeMult(num) {
    return num * 3
}

console.log(threeMult(5))

// long solution:

function arrMult(numArr) {
    const result = []
    const arrLength = numArr.length
    for(let i = 0; i < arrLength; i++) {
        arr[i] = threeMult(numArr[i])
    }
    return result
}

// quicker solution:

// forEach





// challenge 2:
// Define a well-named function that takes one argument and returns `true` if that argument is even, and false if the argument is an odd number. Define a method `divOrMultTwo` which takes a number as an argument. Using your first defined function, if the number is even this method returns the result of that number divided by 2. If the number is odd it returns the result of that number multiplied by 2. Store the result of a call to this function in a variable. (edited)