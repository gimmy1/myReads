import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  // Retrieve all books from API
  // Get all the books which belong to shelves

  getAllBooks = () =>  {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      console.log(books)
    })
  }
  componentDidMount = () => this.getAllBooks()

  // componentDidMount() {
  //   BooksAPI.getAll().then((books) => {
  //     this.setState({ books })
  //   })
  // }

  moveShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => this.getAllBooks())
  }

  render() {
    return (
      <BookShelf
        books={this.state.books}
        moveShelf={this.moveShelf}
      />
    )
  }
}


export default BooksApp
