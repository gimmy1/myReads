import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'

class BookSearch extends Component {
  state = {
    results: []
  }

  search = (e) => {
    const query = e.target.value.trim();

    if (!query) {
        this.setState({ results: [] });
        return;
    }

    BooksAPI.search(query, 20).then(
      results => {
        if (results && (!results.error)) {
          results = results.map((book) => {
            const bookInShelf = this.props.books.find(b=>b.id===book.id)
            if (bookInShelf) {
              book.shelf = bookInShelf.shelf
            }
            else {
              book.shelf = 'None'
            }
            return book
          })
        }
        this.setState({results})
    });
  };
  render() {
    const { books, moveShelf } = this.props
    const { results } = this.state
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" onChange={this.search}/>
          </div>
        </div>
        <div className="search-books-results">
          <BookList
            books={results}
            moveShelf={moveShelf}
          />
        </div>
      </div>
    );
  }
}

BookSearch.PropTypes = {
  books: PropTypes.array.isRequired,
  moveShelf: PropTypes.func.isRequired
}

export default BookSearch
