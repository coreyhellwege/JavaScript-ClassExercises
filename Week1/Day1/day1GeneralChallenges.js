let user = "jerry"

if (user == "tom") {
    console.log("Hello Tom")
} else {
    console.log("Hello someone other than Tom")
}


let age = 18

if (age ==18) {
    console.log("Welcome to the Casino!")
}

let userAge = prompt("Please enter your age")

if (userAge >= 18) {
    alert("Welcome to the Casino!")
} else {
    alert("You are too young to enter!")
}


// Beast Mode
// 1. Assign an empty array to a students variable.

let students = []

// 2. Use the push method to add a student called Sarah

// students.push("Sarah")

// 3. Use prompt to ask the user for their name, add it to the array.

// let newStudent = prompt("Please enter your name")

// students.push(newStudent)

// alert(students)

// 4. Use a loop to ask the user for 3 names, add them all to the array.

let i;
for (i = 0; i < 3; i++) { 
    let name = prompt("Please enter your name")
    let age = prompt("Please enter your age")
    students.push(name, age)
    alert(`Hello ${name}, you are ${age} years old!`)
}

// 5. Loop through the array and use the alert method to read each user back to the user.

// alert(students[0])
// alert(students[1])
// alert(students[2])
// alert(students[3])
// alert(students[4])

students.forEach(alert)

// Beast ++
// 1. Store objects in your students array

// 2. Each student should have a name and age property.



