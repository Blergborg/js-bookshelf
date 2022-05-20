// == js-bookshelf ==
// book objs are going to be stored in a simple array.
// books are going to be displayed to user and user will be able to add new books.
// user will also be able to edit books and toggle read/unread status

let myLibrary = [
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
  const books = document.querySelector(".books")
  myLibrary.forEach( element => {
    // make book-card template string
    const bookTemplate = `
    <div class="book-card" id="${myLibrary.indexOf(element)}}">
      <h3>${element.title}</h3>
      <p>By: ${element.author}</p>
      <label for="readStatus">${element.read ? "Read" : "Unread"}</label>
      <input name="readStatus" type="checkbox">
    </div>
    `;
    // add a book-card to the books div
    // TODO: Check if I'm supposed to do this, I think innerHTML is a security problem...
    books.innerHTML += (bookTemplate);
  })
}

displayBooks();
