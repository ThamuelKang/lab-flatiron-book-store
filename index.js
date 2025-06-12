const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id: 1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',

        },
        {
            id: 2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id: 3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id: 4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"

        },
        {
            id: 5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id: 6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'

        }
    ]
}

// Write your code here!

const bookStoreTitle = document.getElementById("header")
bookStoreTitle.textContent = bookStore.name;

const bookList = document.getElementById("book-list")

bookStore.books.forEach(book => {


    const newBook = document.createElement('li')
    newBook.classList.add('bookContainer')
    bookList.append(newBook)

    const newTitle = document.createElement('h3')
    newTitle.classList.add('bookTitle')
    newTitle.textContent = book.title
    newBook.append(newTitle)

    const bookAuthor = document.createElement('p')
    bookAuthor.textContent = book.author
    newBook.append(bookAuthor)

    const bookImage = document.createElement('img')
    bookImage.src = book.imageUrl;
    newBook.append(bookImage)
})

document.getElementById('delete-this').remove()


// Create a new element for each book
// Loop through every book
// Each book is saved in the books property of the bookStore variable
// Within the loop create and change the following new elements:
// Create an li element called bookContainer
// Create an h3 element called bookTitle
// Set bookTitle textContent to the title of the book
// Create an p element called bookAuthor
// Set bookAuthor textContent to the author of the book
// Create an img element called bookImage
// Set bookImage src to the image url of the book (Reminder you can change any attribute of an html element including the src in the same way as you would change the textContent)
// Select the element with the id of book-list and save it to the variable bookList
// Append elements to html
// Append bookTitle,bookAuthor, and bookImage elements to bookContainer element
// Append bookContainer element to bookList
