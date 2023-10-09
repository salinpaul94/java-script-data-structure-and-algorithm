// Object example 1
let obj = new Object();

// Object example 2
let obj1 = {};

obj2 = {
  name: {
    first: "Gandalf",
    last: "The Grey",
  },
  address: "Middle Earth",
};

// Object example 3
function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
  this.printIsbn = function () {
    console.log(this.isbn);
  };
}

let book = new Book("Title", "Page", "ISBN");

console.log(book.title); // outputs the book title

book.title = "New Title"; // Update the value of the book title

console.log(book.title); // Output the updated value

Book.prototype.printTitle = function () {
  console.log(this.title);
};

book.printTitle();
book.printIsbn();
