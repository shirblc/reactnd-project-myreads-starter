import React from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';

class MyLibrary extends React.Component {
	render() {
		return (
		<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
				  {this.props.shelves.map(shelf => (
					  <BookShelf key={shelf.value} shelfName={shelf.name} shelfBooks={this.props.books.filter(book => book.shelf == shelf.value)} onUpdate={this.props.updateBookShelf}/>
				  ))}
              </div>
            </div>
            <div className="open-search">
			  <Link to='/search'>Add a book</Link>
            </div>
          </div>
		)
	}
}

export default MyLibrary;