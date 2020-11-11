import React from 'react'
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import './App.css'
import MyLibrary from './MyLibrary';
import Search from './Search';

class BooksApp extends React.Component {
  state = {
	  // existing shelves
	  shelves: [{
		  name: 'Currently Reading',
		  value: 'currentlyReading'
	  }, {
		  name: 'Want to Read',
		  value: 'wantToRead'
	  }, {
		  name: 'Read',
		  value: 'read'
	  }],
	  // existing books
	  books: []
  }

  // Get all books from the server upon inserting the component into the DOM
  componentDidMount() {
	  BooksAPI.getAll().then(books => {
		 this.setState({
			 books: books
		 })
	  })
  }

  // Update a book's current shelf
  updateBookShelf = (updatedBook) => {
	  // update book list in the component state
	  this.setState((currentState) => ({
		  books: [...currentState.books.filter(book => book.id !== updatedBook.id), updatedBook]
	  }))
	  // update the backend's data
	  BooksAPI.update(updatedBook, updatedBook.shelf);
  }

  render() {
    return (
      <div className="app">
			<Route exact path='/' render={
					() => (
						<MyLibrary shelves={this.state.shelves} books={this.state.books} updateBookShelf={this.updateBookShelf} />
					)
				} />
			<Route path='/search' render={
					() => (
						<Search />
					)
				} />
      </div>
    )
  }
}

export default BooksApp
