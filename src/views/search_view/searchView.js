/*
* SearchView
*/

import React from 'react'
import { Link } from 'react-router-dom'
import Book from '../../components/book/Book'
import * as BooksAPI from '../../BooksAPI'
import '../../App.css'

class SearchView extends React.Component {

  state = {
    searchResults: [],
    query: ''
  }

  search = ( val ) => {
    if ( val.length ) {
      BooksAPI.search( val ).then( books => {
        if (books.length > 0) {
          books = this.assignShelf( books )
          this.setState( () => {
            return { searchResults: books }
          })
        } else {
          this.setState( { searchResults: [] } )
          console.error('Search term not available in database')
        }
      })
    }
  }

  assignShelf = ( books ) => {
    let myBooks = this.props.books
    books.forEach( book => {
      book.shelf = 'none'
      myBooks.forEach( myBook => {
        if( book.id === myBook.id ) {
          book.shelf = myBook.shelf
        }
      })
    })
    return books
  }

  handleChange = ( event ) => {
    let value = event.target.value
    this.setState( () => {
      return { query: value }
    })
    this.search( value )
  }

  addToShelf = ( book, shelf ) => {
    // Change in DB
    this.props.onChange( book, shelf )
    // To view change immediately in search screen
    book.shelf = shelf
    this.forceUpdate()
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={ this.state.query }
              onChange={ this.handleChange }
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            { this.state.query.length > 0 && this.state.searchResults.map(( book, index ) => (
								<Book
									book = { book }
									key = { index }
									onUpdate = { ( shelf ) => { this.addToShelf( book, shelf ) }}
								/>
							))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchView