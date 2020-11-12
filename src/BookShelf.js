import React from 'react';
import Book from './Book';

// Book shelf component
function BookShelf(props) {
	return (
		<div className="bookshelf">
			  <h2 className="bookshelf-title">{props.shelfName}</h2>
			  <div className="bookshelf-books">
				<ol className="books-grid">
					{props.shelfBooks.map(book => (
						<Book key={book.id} book={book} onShelfUpdate={props.onUpdate} shelves={props.shelves} />
					))}
				</ol>
			  </div>
			</div>
	)
}

export default BookShelf;