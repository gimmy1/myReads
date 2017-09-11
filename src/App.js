import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from './BooksAPI'
import BookShelves from './BookShelves'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  // Retrieve all books from API
  // Get all the books which belong to shelves

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="list-books-content">
        <BookShelves
          books={this.state.books}
        />
      </div>
    )
  }
}


export default BooksApp
