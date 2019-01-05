// we want to uses classes to represent elements on a page

// create a shelf class that creates a ul and 
// attaches itself to an element of your choice on 
// the page (this could be body element or a div with an id)

// create a book class that creates a book element (li tag) with a title 
// create an addBook method to the shelf class that 
// takes a book class and adds it as a child to the ul

// create several books for the bookshelf

class Shelf {
    constructor(element) {
        this.element = element
    }
}

