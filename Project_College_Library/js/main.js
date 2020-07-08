// console.log('Library Project');

// constructor
function Book(name, author, genre) {
  this.name = name;
  this.author = author;
  this.genre = genre;
}

function Display() {

}

Display.prototype.add = function(book) {
  tableBody = document.getElementById('tableBody');
  let count = document.get
  let newBook = `
  <tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.genre}</td>
  </tr>
  `;
  tableBody.innerHTML += newBook;

}

Display.prototype.clear = function() {
  let libraryForm = document.getElementById('library');
  libraryForm.reset(); //clears the values on the form
}

Display.prototype.validate = function(book) {
  if (book.name.length <= 3 || book.name == '') {
    return false;
  } else if (book.author.length <= 3 || book.author == '') {
    return false;
  } else {
    return true;
  }
}

Display.prototype.show = function(type, val) {
  let message = document.getElementById('message');
  errorMessage = `
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
  }, 1000);
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