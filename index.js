const books = [
  new Book(
    "Americana",
    "Chimanda",
    300,
    "A young girl in a foriegn land",
    false
  ),
  new Book("Born Rich", "Rick Aderson", 234, "make money while young", true),
];

const bookContainer = document.getElementById("books");
const addButton = document.getElementById("add");
const addBookForm = document.querySelector("form");

function Book(title, author, pages, summary, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.summary = summary;
  this.read = read;
}

function getBooks() {
  bookContainer.innerHTML = "";
  books.forEach((book, ind) => renderBook(book, ind));
}

function renderBook(book, ind) {
  const template = `<div class="card mb-3 me-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${book.author}</h6>
            <p class="card-text">${book.summary}</p>
            <p class="card-text">${book.pages}<span>Pages</span></p>
            <button type="button" class="btn btn-info text-white card-link" 
              id="toggle-${ind}" ${book.read ? "disabled" : ""}>${
    book.read ? "Read" : "Mark as read"
  }</button>
            <button type="button" class="btn btn-danger text-white card-link" id="delete-${ind}">Delete</button>
        </div>
</div>`;
  bookContainer.innerHTML += template;
}

document.addEventListener("click", (event) => {
  if (event.target) {}
});

getBooks();