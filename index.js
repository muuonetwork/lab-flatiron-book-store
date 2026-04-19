
// Flatbook – index.js
// Task 2: Manipulate the DOM to display the bookstore catalog


//  Book catalog data 
const store = {
  name: "Flatbook",
  books: [
    {
      title: "The Pragmatic Programmer",
      author: "David Thomas & Andrew Hunt",
      image:
        "https://covers.openlibrary.org/b/id/8739161-L.jpg",
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      image:
        "https://covers.openlibrary.org/b/id/8739220-L.jpg",
    },
    {
      title: "You Don't Know JS",
      author: "Kyle Simpson",
      image:
        "https://covers.openlibrary.org/b/id/10521563-L.jpg",
    },
    {
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      image:
        "https://covers.openlibrary.org/b/id/8258524-L.jpg",
    },
    {
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      image:
        "https://covers.openlibrary.org/b/id/6869620-L.jpg",
    },
  ],
};

// Task 2, Step 2: Manipulate existing elements 

// Select the existing <h1> and update its text to the store name
const storeTitle = document.getElementById("store-title");
storeTitle.textContent = store.name;

// Task 2, Step 3: Create book elements 

// Select the container where book cards will live
const bookList = document.getElementById("book-list");

// Loop over every book in the catalog
store.books.forEach((book) => {
  // 1. bookContainer – wrapper card for one book
  const bookContainer = document.createElement("div");
  bookContainer.classList.add("book-container");

  // 2. bookImage – the cover art
  const bookImage = document.createElement("img");
  bookImage.src = book.image;
  bookImage.alt = book.title;
  bookImage.classList.add("book-image");

  // 3. bookTitle – heading with the book's title
  const bookTitle = document.createElement("h2");
  bookTitle.textContent = book.title;
  bookTitle.classList.add("book-title");

  // 4. bookAuthor – paragraph with the author's name
  const bookAuthor = document.createElement("p");
  bookAuthor.textContent = `By ${book.author}`;
  bookAuthor.classList.add("book-author");

  //Append child elements to bookContainer 
  bookContainer.appendChild(bookImage);
  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookAuthor);

  //  Append bookContainer to the main book list
  bookList.appendChild(bookContainer);
});

console.log(`${store.name} loaded ${store.books.length} book(s) successfully!`);
