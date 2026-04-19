// --- TASK 2: Step 2: Manipulating Existing Elements ---

// 1. Select the main title (usually an h1) and update its text
const mainTitle = document.querySelector('h1');
if (mainTitle) {
    mainTitle.textContent = "Flatbook Bookstore Catalog";
}

// --- TASK 2: Step 3: Book Elements ---

// This function takes the book object and handles the DOM creation
function renderBooks(books) {
    // Select the container where books will be appended
    // Ensure this ID matches your index.html (commonly #book-list or #container)
    const bookList = document.querySelector('#book-list');

    books.forEach(book => {
        // 1. Create the container for the individual book
        const bookContainer = document.createElement('div');
        bookContainer.className = 'book-card'; // Adds a class for styling

        // 2. Create the Title element
        const bookTitle = document.createElement('h2');
        bookTitle.textContent = book.title;

        // 3. Create the Author element
        const bookAuthor = document.createElement('p');
        bookAuthor.textContent = `Author: ${book.author}`;

        // 4. Create the Image element
        const bookImage = document.createElement('img');
        bookImage.src = book.image;
        bookImage.alt = book.title;
        bookImage.style.width = "150px"; // Keeps layout clean

        // --- TASK 2: Step 3 (Append elements) ---
        
        // Append title, author, and image to the bookContainer
        bookContainer.appendChild(bookTitle);
        bookContainer.appendChild(bookAuthor);
        bookContainer.appendChild(bookImage);

        // Finally, append the full bookContainer to the existing DOM list
        bookList.appendChild(bookContainer);
    });
}

// Check if the bookData object exists before running the function
if (typeof bookData !== 'undefined') {
    renderBooks(bookData);
}