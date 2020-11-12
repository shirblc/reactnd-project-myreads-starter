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

	/*
  	Function Name: componentDidMount()
  	Function Description: Gets all books from the server upon inserting the component into the DOM. This method is automatically triggered by React.
  	Parameters: None.
	----------------
  	Programmer: Shir Bar Lev.
  	*/
	componentDidMount() {
		BooksAPI.getAll().then(books => {
			this.setState({
				books: books
			})
		})
	}

	/*
  	Function Name: updateBookShelf()
  	Function Description: Updates a book's current shelf. This method is triggered by the Book component, upon changes to the book's shelf.
  	Parameters: updatedBook (object) - the updated book object.
	----------------
  	Programmer: Shir Bar Lev.
  	*/
	updateBookShelf = (updatedBook) => {
		// update book list in the component state
		this.setState((currentState) => ({
			books: [...currentState.books.filter(book => book.id !== updatedBook.id), updatedBook]
		}))
		// update the backend's data
		BooksAPI.update(updatedBook, updatedBook.shelf);
	}
  
	/*
  	Function Name: runSearch()
  	Function Description: Runs a search for the given search query and adds current shelves to the search results.
  	Parameters: searchQuery (string) - the search query string.
	----------------
  	Programmer: Shir Bar Lev.
  	*/
	runSearch = (searchQuery) => {
		BooksAPI.search(searchQuery).then((matchingBooks) => {
			// check there are matches before checking each match
			matchingBooks.length &&
			// Check if any of the search results is already in the library
			matchingBooks.forEach(matchingBook => {
				const libraryMatch = this.state.books.filter(book => matchingBook.id === book.id);
				// if one the current search result is already in the library, set its shelf accordingly
				if(libraryMatch.length !== 0) {
					matchingBook.shelf = libraryMatch[0].shelf;
				}
				// otherwise set the book's shelf to 'none'
				else {
					matchingBook.shelf = 'none';
				}
			});
			// update the component state with those books
			this.setState({
				currentSearch: matchingBooks
			})
		})
	}
	
	/*
  	Function Name: createShelf()
  	Function Description: Creates a new bookshelf. This method is triggered by AddShelf upon creating a new shelf.
  	Parameters: shelfName (string) - the new shelf's name.
	----------------
  	Programmer: Shir Bar Lev.
  	*/
	createShelf = (shelfName) => {
		// Add the shelf to the current state
		this.setState((currentState) => ({
			shelves: [...currentState.shelves, {
				name: shelfName,
				value: shelfName.replaceAll(' ', '')
			}]
		}))
	}
	
	/*
  	Function Name: clearMatches()
  	Function Description: Clears the search results (currentSearch) array.
  	Parameters: None.
	----------------
  	Programmer: Shir Bar Lev.
  	*/
	clearMatches = () => {
		this.setState({
			currentSearch: []
		})
	}
	
	/*
  	Function Name: render()
  	Function Description: Renders the component.
  	Parameters: None.
	----------------
  	Programmer: Shir Bar Lev.
  	*/
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
							<Search matches={this.state.currentSearch} onSearch={this.runSearch} onUpdate={this.updateBookShelf} shelves={this.state.shelves} clearMatches={this.clearMatches} />
						)
					} />
				<Route path='/shelves/add' render={
						({history}) => (
							<AddShelf shelves={this.state.shelves} createShelf={(shelfName) => {
								this.createShelf(shelfName);
								// redirect the user back to the main page
								history.push('/');
							}} />
						)
					} />
			</div>
		)
	}
}

export default BooksApp
