import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'

class BookSearch extends Component {
  static propTypes = {
    moveShelf: PropTypes.func.isRequired,
    isOnShelf: PropTypes.func.isRequired
  }

  state = {
    results: [],
  }

  clearResults = () => (
    this.setState({results: []})
  )

  bookSearch = (query) => {
    BooksAPI.search(query).then(
      results => {
        // Result exists and it's not an error
        if (results && (!results.error)) {
          for (const book of results) {
            const b = this.props.isOnShelf(book)
            book.shelf = b ? b.shelf : 'none'
          }
          this.setState({ results })
        }
      }
    )

  }
  render() {
    const { moveShelf } = this.props
    const { results } = this.state
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to='/'
            className="close-search"
            onClick={this.clearResults}>
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={e => this.bookSearch(e.target.value)}
              autoFocus
            />
          </div>
        </div>
        <div className="search-books-results">
          <BookList
            books={results}
            moveShelf={moveShelf}
          />
        </div>
      </div>
    )
  }
}


export default BookSearch
