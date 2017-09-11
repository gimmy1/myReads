import React from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'
import BookSearch from './BookSearch'
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
      <div className="app">
       <Route path='/search' component={BookSearch}/>

       <Route exact path='/' render={() => (
         <div className='list-books'>
            <div className='list-books-title'>
              <h1>My Reads</h1>
            </div>

            <div className="list-books-content">
              <BookShelves
                books={this.state.books}
              />
            </div>

            <div className='open-search'>
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )}>
        </Route>
      </div>
    )
  }
}


export default BooksApp
