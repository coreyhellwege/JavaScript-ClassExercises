// 1. Assign a new empty object to a variable called me

// 2. On the next line, add one key 'age' and set its value to your age

// 3. On the next line, add one key 'current location' and set its value to your current location

let me = {
    age: 25,
    currentLocation: "Melbourne"
}

// 4. Use console.log to display the age and current location on screen

// console.log(me)

// 5. Use code to add an array of hobbies to your me object

me["hobbies"]=["swimming", "footy"]

// Another solution:

me.hobbies = ["swimming", "footy", "guitar"]

// console.log(me)

// 6. Use code to delete your age key

delete me.age;

// console.log(me)

// Another solution:

// delete me["age"]

// 7. Iterate through me.hobbies and log each hobby to the screen

for (let key in me.hobbies) {
    if (me.hobbies.hasOwnProperty(key)) {
        console.log(me.hobbies[key]);
    }
}