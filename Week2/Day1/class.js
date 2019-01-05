// CLASSES

class Automobile {
    constructor(wheels, color) {
        this.wheels = wheels
        this.color = color
    }
}

// Note, no perentheses go after the class name because it isn't a function
class Car extends Automobile {
    constructor(wheels, color) {
        super()
        this.wheels = wheels
        this.color = color
    }
    // get method:
    get wheelMessage() {
        return `car has ${this.wheels} wheels`
    }

    // set method:
    set changeWheels(wheelNum) {
        this.wheels = wheelNum
    }

    // The static keyword defines a static method for a class. Static methods aren't called on instances of the class. Instead, they're called on the class itself. These are often utility functions, such as functions to create or clone objects.
    static printCars(cars) {
        const carCount = cars.length
        return `you have ${carCount} cars`
    }
}

const blueCar = new Car(4, 'dodgerblue')
const blackCar = new Car(3, 'black')


const carColor = blueCar.color

blueCar.changeWheels = 8

console.log(blueCar.wheelMessage)

console.log(carColor)

console.log(
    Car.printCars([blueCar, blackCar])
)

