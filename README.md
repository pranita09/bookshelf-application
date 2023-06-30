# MCR-01

## Bookshelf Application

Create a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read.

### App Features:

1. In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are: Currently Reading, Want to Read and Read
2. Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Note that the default value for the control should always be the current shelf the book is on.
3. You will also have to implement the Routing functionality. The main page has a link to /search, a search page that allows you to find books to add to your library. The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. To keep the interface consistent, you may consider re-using some of the code you used to display the books on the main page.
4. When a book is on a bookshelf (in the main application page), it should have the same state on both the main and search pages. For example: If the book is in the ‘currently reading’ state on the bookshelf (main application page), it should also be in the ‘currently reading’ state on the search page.
5. The search page also has a link to / (the root URL), which leads back to the main page. When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.
