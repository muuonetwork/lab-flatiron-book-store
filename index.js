const store = {
  name: "Flatbooks Technical Books",
  books: [
    {
      title: "Eloquent JavaScript: A Modern Introduction to Programming",
      author: "Marijn Haverbeke",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51qitten%2BZL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    },
    {
      title: "JavaScript and JQuery: Interactive Front-End Web Development",
      author: "Jon Duckett",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51JyBMLlCvL._SX396_BO1,204,203,200_.jpg",
    },
    {
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    },
    {
      title: "You Don't Know JS Yet",
      author: "Kyle Simpson",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41MnHMhHOrL._SX331_BO1,204,203,200_.jpg",
    },
    {
      title: "Cracking the Coding Interview",
      author: "Gayle Laakmann McDowell",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51cUVaBWZjL._SX348_BO1,204,203,200_.jpg",
    },
  ],
};
 
// ─── Step 2: Update the existing header element ───────────────
const header = document.getElementById("header");
header.textContent = store.name;
 
// ─── Step 3: Remove the placeholder list item ─────────────────
const deleteLi = document.getElementById("delete-this");
if (deleteLi) {
  deleteLi.remove();
}
 
// ─── Step 4: Create and append a book card for each book ──────
const bookList = document.getElementById("book-list");
 
store.books.forEach((book) => {
  // bookContainer – wrapper <li> for one book
  const bookContainer = document.createElement("li");
  bookContainer.classList.add("book-container");
 
  // bookImage – the cover image
  const bookImage = document.createElement("img");
  bookImage.src = book.image;
  bookImage.alt = book.title;
  bookImage.classList.add("book-image");
 
  // bookTitle – heading with the book title
  const bookTitle = document.createElement("h2");
  bookTitle.textContent = book.title;
  bookTitle.classList.add("book-title");
 
  // bookAuthor – paragraph with the author name
  const bookAuthor = document.createElement("p");
  bookAuthor.textContent = book.author;
  bookAuthor.classList.add("book-author");
 
  // Append all children to bookContainer
  bookContainer.appendChild(bookImage);
  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookAuthor);
 
  // Append bookContainer to #book-list
  bookList.appendChild(bookContainer);
});
 
console.log(`${store.name} loaded ${store.books.length} book(s) successfully!`);
