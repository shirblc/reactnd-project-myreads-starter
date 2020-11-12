import React from 'react'
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import './App.css'
import MyLibrary from './MyLibrary';
import Search from './Search';
import AddShelf from './AddShelf';

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
		  }, {
			  name: 'None',
			  value: 'none'
		  }],
		  // existing books
		  books: [],
		  // running search
		  currentSearch: []
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
  
	// run a search
	runSearch = (searchQuery) => {
		BooksAPI.search(searchQuery).then((books) => {
			// update the component state with those books
			this.setState({
				currentSearch: books
			})
		})
	}
	
	// Create a new shelf
	createShelf = (shelfName) => {
		// Add the shelf to the current state
		this.setState((currentState) => ({
			shelves: [...currentState.shelves, {
				name: shelfName,
				value: shelfName.replaceAll(' ', '')
			}]
		}))
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
							<Search matches={this.state.currentSearch} onSearch={this.runSearch} onUpdate={this.updateBookShelf} />
						)
					} />
				<Route path='/shelves/add' render={
						() => (
							<AddShelf createShelf={this.createShelf} />
						)
					} />
			</div>
		)
	}
}

export default BooksApp
