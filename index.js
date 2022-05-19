// == js-bookshelf ==
// book objs are going to be stored in a simple array.
// books are going to be displayed to user and user will be able to add new books.
// user will also be able to edit books and toggle read/unread status

let myLibary = [
  {title:'Dune', author:'Frank Herbert', read:true}, 
  {title:'It', author:'Stephen King', read:false}
];

// Book constructor
function Book(title, author) {
  this.title = title 
  this.author = author
  this.read = false
}

// Toggle a Book's read status
Book.prototype.toggleRead = function() {
  this.read = !this.read;
}

function addBookToLibrary() {

}

function removeBookFromLibrary() {

}

function displayBooks() {

}
