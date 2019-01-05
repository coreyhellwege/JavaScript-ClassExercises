// FACTORY FUNCTIONS

// Hashes in Javascript are called objects.
// You can add a function to an obeject.

// Objects are useful for storing numerous values associated with one thing. 
// The keyword 'this' is used to reference an object.

const x = {
    firstName: "Bob"
}

// duplicate:
const b = x
// Using = in JavaScript is a reference. So b is pointing to x.
b.firstName = 'Larry'
b.lastName = 'Brown'

console.log(x)



let carsCount = 0

// A Factory Functions is just a function that returns a brand new object
// Every time the function is run it will return a brand new object
function car(color) {
    carsCount ++
    console.log('generating another car', carsCount)
    return {
        wheels: 4,
        color: color,
        // Without using 'this' the following code will return the value assigned to 'color' when the object was created, even if the value was re-assigned afterwards. By using 'this' the latest value will be referenced.
        printCarColor: function() {
            console.log(this.color)
        }
    }
}

const redCar = car('red')
const blueCar = car('dodgerblue')
const blackCar = car('black')

blackCar.color = 'pink'
// console.log(blackCar)
blackCar.printCarColor()

