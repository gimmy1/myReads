import React from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'
import BookSearch from './BookSearch'

class BooksApp extends React.Component {
  state = {
    books: [],
    view: 'notsearch'
  }

  // Retrieve all books from API
  // Get all the books which belong to shelves

  getAllBooks = () =>  {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  componentDidMount = () => this.getAllBooks()


  moveShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => this.getAllBooks())
  }


  render() {
    return (
      <div className="app">
        <Route path="/search" render={({ history }) => (
          <BookSearch
            books={this.state.books}
            moveShelf={this.moveShelf}
          />
        )} />

        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>My Reads</h1>
            </div>
            <BookShelf
              books={this.state.books}
              moveShelf={this.moveShelf}
            />
            <div className="open-search">
              <Link to="/search">Search</Link>
            </div>
          </div>
        )} />
      </div>
    )
  }
}


export default BooksApp
