import React from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList'

const bookShelves = ['currentlyReading', 'wantToRead', 'read']

function BookShelf(props) {
  const {books, moveShelf} = props

  return (
    <div>
      {bookShelves.map(bookshelf=>(
        <div key={bookshelf} className="bookshelf">
          <h2 className="bookshelf-title">{bookshelf}</h2>
          <div className="bookshelf-books">
          <BookList
              books={
                books.filter(
                  book => book.shelf === bookshelf
              )}
              moveShelf={moveShelf}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  moveShelf: PropTypes.func.isRequired
}



export default BookShelf
