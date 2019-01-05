// This function will fetch books

// fetch allows the code to continue running before the data is available

// fetch returns a promise
const ul = document.querySelector('.books')

function fetchBooks() {
    // console.log('getting some books..')

    // fetch is a function which takes a string argument
    // get books
    // url, options
    const url = 'http://localhost:3000/books'
    const request = fetch(url) // => promise object
    
    // request is an object
    return request
    .then(function(response) {
        return response.json() // => promise object
    })
}

fetchBooks() // => returns a promise
    // books = an array of books
    .then(function(books) {
        console.log(books)
        ul.innerText = '';
        books.forEach(addBook)
})

function addBook(book){
    console.log("In addBook")
    const liBook = createBook(book)
    ul.appendChild(liBook)
}




    // function to create a book
function createBook(book) {
    // create the li wrapper for the book
    const li = document.createElement("li")
    li.classList.add('book')
    li.dataset.id = book.id
    // create the h4 title for the book
    const title = document.createElement('h4')
    title.innerText = book.title

    const price = document.createElement('strong')
    price.innerText = 'Price'
    // create a p tag for the price
    const priceArea = document.createElement('p')
    priceArea.innerText = `$${(book.price / 100.00).toFixed(2)}`

    // button to delete a book
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('btn', 'btn-delete')
    deleteBtn.addEventListener('click', function(e) {
        deleteBookFetch(e).then(id => removeBook(id))
    })
    deleteBtn.innerText = 'Delete Book'


    li.appendChild(title)
    li.appendChild(priceArea)
    li.appendChild(deleteBtn)

    // we're using prepend to put the price before priceArea
    priceArea.prepend(price)


    return li
}

function deleteBookFetch(e) {
    e.target //button
    const id = e.target.parentElement.dataset.id
    // delete book from db 
    const url = `http://localhost:3000/books/${id}`
   
    return fetch(url, {
        method: 'DELETE'
    })
    .then(function() {
        return id
    })
}

function removeBook(id) {
    Array.from(ul.childNodes).forEach(child => {
        if(child.dataset.id === id) {
            ul.removeChild(child)
        }
    })
}

// function addBooks() {
//     var ul = document.getElementById("books");
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode("Four"));
//     ul.appendChild(li);
//   }

// addBooks()


// 1. get the form √
// 2. add a submit event √
// 3. post a book ----
// 4. append newly created book from response

const bookForm = document.querySelector('#bookForm')

bookForm.addEventListener('submit', (e) => {
    postBook(e)
    .then(addBook)
})

function postBook(e) {
    e.preventDefault()
    const form = e.target
    const title = form.title.value
    const isbn = form.isbn.value
    const description = form.description.value
    const price = parseInt(form.price.value)
    const author = form.author.value

    const book = {
        title, description, isbn, price, author
    }
    const url = 'http://localhost:3000/books'
    
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    }

    return fetch(url, options).then(res => res.json())
}




// authors
const authorsList = document.querySelector('#authorsList')

function createAuthor(authorData) {
    const author = document.createElement('li')
    const link = document.createElement('a')
    link.href = '#' // `/authors?id=${id}`
    // link.addEventListener('click', function(e){
    //     e.preventDefault()
    //     alert(authorData.id)
    // })
    const { 
        first_name: firstName, 
        last_name: lastName 
    } = authorData

    link.innerText = `${firstName} ${lastName}`
    author.appendChild(link)
    return author
}

function fetchAuthors() {
    const url = 'http://localhost:3000/authors'
    const authors = fetch(url).then(res => res.json())
    return authors //promise
}

function addAuthor(author) {
    authorsList.appendChild(createAuthor(author))
}

fetchAuthors()
.then(authors => authors.forEach(addAuthor))