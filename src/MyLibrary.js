import React from 'react';
import BookShelf from './BookShelf';

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
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
		)
	}
}

export default MyLibrary;