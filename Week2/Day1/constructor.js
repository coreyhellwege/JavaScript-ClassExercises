// CONSTRUCTOR FUNCTIONS
// explain..

// uppercase naming convention
function Car(color) {
    this.color = color
    this.wheels = 4
}

// This references the object
Car.prototype.printCarColor = function() {
    console.log(this.color)
}

// To create a new object using a Constructor Function we use the keyword 'new'
// Each object will store it's own function. 
const redCar = new Car('red')
const blueCar = new Car('blue')

redCar.printCarColor()

// __proto__
// Use prototype to avoid the object from returning a function
// Note, don't edit objects with a double underscore in javacscript


// Note: when calling this function, if you don' use 'new' to create an object, it will return 'undefined'
function Truck(wheels) {
    this.wheels = wheels
}

function run() {
    console.log(`the ${this.wheels} wheels are spinning`) 
}

const tesla = new Truck(20)

// Bind allows you to use a foreign function on a foreign object

run.bind({wheels: 10})()
run.bind(tesla)()


// Note: You can change the value of properties inside a constant but you can't change the property itself
const merc = new Truck(15)
merc.wheels = 16
run.bind(merc)()


// ----------------------------------------------------------------------- //
// BIND:

function printName() {
    console.log(this.name)
}

const dog = {
    name: 'Snowy'
}

const cat = {
    name: 'Garfield'
}

// In this example, if you dont use 'bind', 'printName' will return 'undefined' because 'this' in the function above is referencing the global value of 'this'
printName.bind(cat)()