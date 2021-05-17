function Book(title, author, pages, summary, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.summary = summary;
  this.read = read;
}

const books = [
  new Book('Americana', 'Chimanda', 300, 'A young girl in a foriegn land', false),
  new Book('Born Rich', 'Rick Aderson', 234, 'make money while young', true),
];

const bookContainer = document.getElementById('books');
const addButton = document.getElementById('add');
const addBookForm = document.querySelector('form');

function renderBook(book, ind) {
  const template = `<div class="card mb-3 me-3" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${book.author}</h6>
        <p class="card-text">${book.summary}</p>
        <p class="card-text">${book.pages}<span>Pages</span></p>
        <button type="button" class="btn btn-info text-white card-link" 
          id="toggle-${ind}" ${book.read ? 'disabled' : ''}>${book.read ? 'Read' : 'Mark as read'}</button>
        <button type="button" class="btn btn-danger text-white card-link" id="delete-${ind}">Delete</button>
    </div>
  </div>`;
  bookContainer.innerHTML += template;
}

function getBooks() {
  bookContainer.innerHTML = '';
  books.forEach((book, ind) => renderBook(book, ind));
}

function addBook(title, author, pages, summary, read = false) {
  books.push(new Book(title, author, pages, summary, read));
  getBooks();
}

document.addEventListener('click', (event) => {
  if (event.target && event.target.id) {
    const [name, id] = event.target.id.split('-');
    if (name === 'toggle') {
      toggle(id)
    } else if (name === 'delete') {
      deleteBook(id)
    };
  };
});

addButton.addEventListener('click', () => {
  addBookForm.classList.toggle('d-none')
});

addBookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = event.target.title.value;
  const author = event.target.author.value;
  const pages = event.target.pages.value;
  const summary = event.target.summary.value;
  addBook(title, author, pages, summary);
  event.target.reset();
});

function toggle(ind) {
  books[ind].read = true;
  getBooks();
}

function deleteBook(ind) {
  books.splice(ind, 1);
  getBooks();
}

getBooks();