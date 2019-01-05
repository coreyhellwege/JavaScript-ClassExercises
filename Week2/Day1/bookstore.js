// // create class Book
//     // - title
//     // - isbn
//     // - author

// // create 5 instances
// // add them to an array
// // loop through array
// // print each book title with isbn

// class Book {
//     constructor(title, isbn, author) {
//     this.title = title
//     this.isbn = isbn
//     this.author = author
//     }
// }

// const theAlchemist = new Book('The Alchemist', 9780061122415, 'Paulo Coelho')
// const ikigai = new Book('Ikigai', 9780143130727, 'Hector Garcia')
// const designThinking = new Book('Designing for Growth', 9780231158381, 'Jeanne Liedtka, Tim Ogilvie')

// const bookArr = []

// bookArr.push(theAlchemist, ikigai, designThinking)

// // console.log(bookArr)

// bookArr.forEach(function(element) {
//     console.log(`Book Title: ${element.title}, ISBN: ${element.isbn}`);
// });





// ----------------------------------------------------------------------- //
// Beast Mode
// experiment by doing the same thing but with factory & constructor functions

// Factory Function:

// function book(title, isbn, author) {
//     return {
//         title: title,
//         isbn: isbn,
//         author: author
//     }
// }

// const theAlchemist = book('The Alchemist', 9780061122415, 'Paulo Coelho')
// const ikigai = book('Ikigai', 9780143130727, 'Hector Garcia')
// const designThinking = book('Designing for Growth', 9780231158381, 'Jeanne Liedtka, Tim Ogilvie')

// console.log(theAlchemist)


// Constructor Function:

function Book(title, isbn, author) {
    this.title = title,
    this.isbn = isbn,
    this.author = author
}

// Note: The rocket return function ignores 'this', so this function won't work:
// Book.prototype.printBookTitle = () => console.log(this.title)

Book.prototype.printBookTitle = function() {
    console.log(this.title)
}


const theAlchemist = new Book('The Alchemist', 9780061122415, 'Paulo Coelho')
const ikigai = new Book('Ikigai', 9780143130727, 'Hector Garcia')
const designThinking = new Book('Designing for Growth', 9780231158381, 'Jeanne Liedtka, Tim Ogilvie')

theAlchemist.printBookTitle()