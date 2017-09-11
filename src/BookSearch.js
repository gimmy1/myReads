import React, { Component} from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import ListBooks from './BookList'

class BookSearch extends Component {
  state = {
    results: [],
  }

  clearResults = () => (
    this.setState({results: []})
  )
  render() {
    return (
      <div>Search Books</div>
    )
  }
}

export default BookSearch
