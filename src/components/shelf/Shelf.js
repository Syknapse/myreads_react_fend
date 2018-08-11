/*
* Shelf
*/

import React from 'react'
import Book from '../book/Book'

class Shelf extends React.Component {

    moveToShelf = ( book, shelf)  => {
        this.props.changeShelf( book, shelf )
    }

    render() {
        const books = this.props.books

        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ this.props.name }</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">

                        { books.map( ( book, index ) => (
														<Book
															book= { book }
															key= { index }
															onUpdate= { shelf => { this.moveToShelf( book, shelf ) } }
														/>
													))
                        }

                    </ol>
                </div>
            </div>
        )
    }
}

export default Shelf