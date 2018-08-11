/*
* Book
*/

import React from 'react'

class Book extends React.Component {

	// placeholder image for books with no cover
	handleThumbnails( book ) {
		if ( !book.imageLinks ) {
			book.imageLinks = []
			book.imageLinks.smallThumbnail = 'http://via.placeholder.com/128x158'
			book.imageLinks.thumbnail = 'http://via.placeholder.com/128x188?text=no+cover'
		}
	}


	renderShelfSelector( book ) {
		return (
			<select onChange={this.changeShelf} value={book.shelf}>
				<option value="move" disabled>Move to...</option>
				<option value="currentlyReading">Currently Reading</option>
				<option value="wantToRead">Want to Read</option>
				<option value="read">Read</option>
				<option value="none">None</option>
			</select>
		)
	}

	changeShelf = ( e ) => {
		this.props.onUpdate(e.target.value)
	}

	renderBookInfo( book ) {
		return (
			<div>
				<div className="book-title">{book.title}</div>
				<div className="book-authors">{book.authors}</div>
			</div>
		)
	}

	render() {
		const book = this.props.book
		console.log(book)

		this.handleThumbnails( book )

		return(
			<li>
				<div className="book">
					<div className="book-top">
						<div className="book-cover"
							title={ book.description }
							style={ { width: 128, height: 188, backgroundImage: `url("${book.imageLinks.thumbnail}")` } }
							>
						</div>
						<div className="book-shelf-changer">
							{this.renderShelfSelector( book ) }
						</div>
					</div>
					{this.renderBookInfo( book ) }
				</div>
			</li>
		)
	}
}

export default Book