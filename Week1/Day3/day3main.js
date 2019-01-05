// // When a function asks for a function you can either give it a declared function or an anonymous function. Anonymous functions are useful for callbacks. 

// // Declare a variable and assign a function to it:

// const addition = function(x, y) {
//     return x + y
// }

// console.log(
//     addition(4,12)
// )

// console.log("--------------------------")

// // Now let's use this function elsewhere:

// const printVal = function(num) {
//     console.log(num)
// }

// const products = [
//     595,
//     695,
//     400,
//     300
// ]

// // Passing a declared function as an argument:

// products.forEach(printVal)

// console.log("--------------------------")

// // Using an Anonymous function as an argument:

// products.forEach(function(num) {
//     console.log(num)
// })

// console.log("--------------------------")


// // If you dont include a return in a function, it will always return undefined

// const result = products.map(function(num){
//     return num * 5
// })

// console.log(result)


// console.log("--------------------------")

// // Search array methods on Mozilla
// // Concat method (adding items to the array):

// const newProducts = products.concat([3,4,5])

// console.log(newProducts)


// console.log("--------------------------")



// // Reduce method:
// // The reduce() method executes a reducer function (that you provide) on each member of the array resulting in a single output value.

// const total = products.reduce(function(accumulator, currentValue){
//     return accumulator + (currentValue * 2)
// }, 50)

// console.log(total)



// console.log("--------------------------")



// const characters = ['a', 'p', 'p', 'l', 'e']

// console.log(
//     characters.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue
//     }, 'COMPANY: ')
// )


// console.log("--------------------------")



// const person = {
//     firstName: "Corey",
//     age: 25,
//     hobbies: ["guitar", "footy"],
//     printGreeting: function(){
//         return (`Hello, ${person.firstName}`)
//     }
// }

// console.log(person.printGreeting())



// console.log("--------------------------")



// const users = [
//     '1', '2', '23'
// ]

// console.log(
// users.filter(function(id) {
//     return '1' != id
// })
// )

// console.log(
//     users.find(function(id) {
//         return id == '23'
//     })
// )



// console.log("--------------------------")



// MY MAP FUNCTION:

function myMap(arr, fn){
    const newArr = []
    let i = 0
    const len = arr.length
    while(i<len){
        newArr.push(fn(arr[i]))
        i++
    }
    return newArr
}

const arr = [5, 6, 7]

const newArr = myMap(arr, function(item){
    return item * 3
})

console.log(newArr)