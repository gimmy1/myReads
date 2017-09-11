import React from 'react'
// import PropTypes from 'prop-types'
import BookList from './BookList'

function BookShelves(props) {
  const { books } = props
  const bookShelves = ['Currently Reading', 'Want to Read', 'Read']

  return (
    <div>
      {bookShelves.map(shelf=>(
        <div key={shelf} className="bookshelf">
          <h2 className="bookshelf-title">{shelf}</h2>
          <div className="bookshelf-books">
          <BookList
              books={books.filter(book=>book.shelf===shelf)}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default BookShelves
