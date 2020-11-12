/*
	Search
	MyReads Component
*/

import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

class Search extends React.Component {
	state = {
		searchQuery: ''
	}

	/*
  	Function Name: componentDidMount()
  	Function Description: Clears the previous search and its results upon inserting the component into the DOM. This method is automatically triggered by React.
  	Parameters: None.
	----------------
  	Programmer: Shir Bar Lev.
  	*/
	componentDidMount() {
		this.setState({
			searchQuery: ''
		});
		this.props.clearMatches();
	}
	
	/*
  	Function Name: searchUpdate()
  	Function Description: Updates the search query upon update from the relevant text field..
  	Parameters: newString (string) - string to be used as current search query.
	----------------
  	Programmer: Shir Bar Lev.
  	*/
	searchUpdate = (newString) => {
		this.setState({
			searchQuery: newString
		});
		// if the search query isn't empty, run the search
		if(newString) {
			this.props.onSearch(newString);
		}
		// otherwise clear the current matches
		else {
			this.props.clearMatches();
		}
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
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to='/'>Close</Link>
					<div className="search-books-input-wrapper">
						{/*
						NOTES: The search from BooksAPI is limited to a particular set of search terms.
						You can find these search terms here:
						https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

						However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
						you don't find a specific author or title. Every search is limited by search terms.
						*/}
						<input type="text" placeholder="Search by title or author" value={this.state.searchQuery} onChange={(event) => (this.searchUpdate(event.target.value))} />
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{this.props.matches.length ? (
							this.props.matches.map(book => (
								<Book key={book.id} book={book} onShelfUpdate={this.props.onUpdate} shelves={this.props.shelves} />
							))) : (
							<div>No matches were found.</div>
							)
						}
					</ol>
				</div>
          </div>
		)
	}
}

export default Search;