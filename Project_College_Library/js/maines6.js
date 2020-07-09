console.log('ES6 Version');
displayBook();
class Book {
  constructor(name, author, genre) {
    this.name = name;
    this.author = author;
    this.genre = genre;
  }
}

class Display {
  add(book) {

    let bookArr;
    let bookObj = localStorage.getItem('books');
    if (bookObj == null) {
      bookArr = [];
    } else {
      bookArr = JSON.parse(bookObj);
    }
    bookArr.push(book);
    localStorage.setItem('books', JSON.stringify(bookArr));
    displayBook();
  }

  clear() {
    let libraryForm = document.getElementById('library');
    libraryForm.reset(); //clears the values on the form
  }

  validate(book) {
    if (book.name.length <= 3 || book.name == '') {
      return false;
    } else if (book.author.length <= 3 || book.author == '') {
      return false;
    } else {
      return true;
    }
  }

  show(type, val) {
    let message = document.getElementById('message');
    let errorMessage = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>${type.toUpperCase()}</strong> ${val}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;
    message.innerHTML = errorMessage;

    //Arrow function to remove the message after 1 second
    setTimeout(() => {
      message.innerHTML = '';
    }, 5000);
  }
}

// Display.prototype.displayBook = function() {
function displayBook() {
  let bookArr;
  let bookObj = localStorage.getItem('books');
  if (bookObj == null) {
    bookArr = [];
  } else {
    bookArr = JSON.parse(bookObj);
  }
  tableBody = document.getElementById('tableBody');
  let booksToDisplay = '';
  bookArr.forEach(function(element) {
    booksToDisplay += `
    <tr>
      <td>${element.name}</td>
      <td>${element.author}</td>
      <td>${element.genre}</td>
    </tr>
    `;
  });

  if (bookArr.length != 0) {
    tableBody.innerHTML = booksToDisplay;
  } else {
    tableBody.innerHTML = '';
  }

}


//getting the form
let libraryForm = document.getElementById('library');
//adding submit event on the form
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
  //on submit the page reloads, to prevent the default behaviour
  e.preventDefault()
  console.log('You have submitted library form');
  let name = document.getElementById('bookName').value;
  let author = document.getElementById('author').value;
  let genre;

  let fiction = document.getElementById('fiction');
  let programming = document.getElementById('computerProgramming');
  let biography = document.getElementById('biography');
  //.checked is used to see if the radio is on or not
  if (fiction.checked) {
    genre = fiction.value;
  } else if (programming.checked) {
    genre = programming.value;
  } else if (biography.checked) {
    genre = biography.value;
  }

  let book = new Book(name, author, genre);
  console.log(book);

  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show('success', 'Your Book has been added successfully');
  } else {
    display.show('warning', 'Please verify the values');
  }


}


//TODO - Store data in localstorage - done
//  Delete the book
// Add scrollBar