// Task 2, Step 2: Manipulating Existing Elements
// Update the header text to exactly match what the test expects
const header = document.getElementById('header');
header.textContent = 'Flatbooks Technical Books';

// Remove the example placeholder <li> element
const deleteLi = document.getElementById('delete-this');
deleteLi.remove();

// Task 2, Step 3: Book Elements
// Books catalog - titles, authors, and images must match the test exactly
const books = [
  {
    title: "Eloquent JavaScript: A Modern Introduction to Programming",
    author: "Marijn Haverbeke",
    image: "https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
  },
  {
    title: "HTML and CSS: Design and Build Websites",
    author: "Jon Duckett",
    image: "https://images-na.ssl-images-amazon.com/images/I/41OeYKS9v7L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
  },
  {
    title: "Cracking the Coding Interview",
    author: "Gayle Laakmann McDowell",
    image: "https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
  }
];

// Select the ul where books will be appended
const bookList = document.getElementById('book-list');

// Loop through each book and build its elements
books.forEach(book => {
  // Create the <li> container
  const bookContainer = document.createElement('li');
  bookContainer.className = 'list-li';

  // Create the book image
  const bookImage = document.createElement('img');
  bookImage.src = book.image;
  bookImage.alt = book.title;

  // Create the book title
  const bookTitle = document.createElement('h3');
  bookTitle.textContent = book.title;

  // Create the book author
  const bookAuthor = document.createElement('p');
  bookAuthor.textContent = book.author;

  // Append children into the <li> container
  bookContainer.appendChild(bookImage);
  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookAuthor);

  // Append the completed <li> to the <ul>
  bookList.appendChild(bookContainer);
});