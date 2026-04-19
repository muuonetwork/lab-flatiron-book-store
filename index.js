// --- TASK 2: Step 2: Manipulating Existing Elements ---

// The test expects the header with ID 'header' to have this exact text
const header = document.querySelector('#header');
if (header) {
    header.textContent = "Flatbooks Technical Books";
}

// --- TASK 2: Step 3: Book Elements ---

function renderBooks(books) {
    const bookList = document.querySelector('#book-list');

    // Clear the "delete-this" placeholder if it exists (the error log showed it)
    bookList.innerHTML = '';

    books.forEach(book => {
        // Create the container
        const bookContainer = document.createElement('div');
        
        // Create elements exactly as requested
        const bookTitle = document.createElement('h2');
        bookTitle.textContent = book.title;

        const bookAuthor = document.createElement('p');
        bookAuthor.textContent = book.author; // Just the name, no extra "By:" string

        const bookImage = document.createElement('img');
        bookImage.src = book.image;

        // Append to container
        bookContainer.appendChild(bookTitle);
        bookContainer.appendChild(bookAuthor);
        bookContainer.appendChild(bookImage);

        // Append to the actual DOM
        bookList.appendChild(bookContainer);
    });
}

// The tests are looking for the books from the 'inventory' variable
if (typeof inventory !== 'undefined') {
    renderBooks(inventory);
}