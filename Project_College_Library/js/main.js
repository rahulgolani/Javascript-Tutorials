// console.log('Library Project');

// constructor
function Book(name, author, genre) {
  this.name = name;
  this.author = author;
  this.genre = genre;
}

let libraryForm = document.getElementById('library');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
  e.preventDefault()
  console.log('You have submitted library form');
  let name = document.getElementById('bookName').value;
  let author = document.getElementById('author').value;
  let genre;

  let fiction = document.getElementById('fiction');
  let programming = document.getElementById('computerProgramming');
  let biography = document.getElementById('biography');

  if (fiction.checked) {
    genre = fiction.value;
  } else if (programming.checked) {
    genre = programming.value;
  } else if (biography.checked) {
    genre = biography.value;
  }

  let book = new Book(name, author, genre);
  console.log(book);
}