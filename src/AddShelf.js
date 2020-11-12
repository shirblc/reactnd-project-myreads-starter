/*
	AddShelf
	MyReads Component
*/

import React from 'react';
import { Link } from 'react-router-dom';

class AddShelf extends React.Component {
	// CTOR
	constructor(props) {
		super(props);
		this.name = React.createRef();
	}
	
	/*
  	Function Name: createShelf()
  	Function Description: Creates a new shelf.
  	Parameters: event (event) - Form submission event.
	----------------
  	Programmer: Shir Bar Lev.
  	*/
	createShelf = (event) => {
		event.preventDefault();
		// if there's a name in the input
		if(this.name.current.value) {
			this.props.shelves.filter(shelf => shelf.name.toLowerCase() === this.name.current.value).length ? window.alert('Shelf already exists. Change the name and try again.') : this.props.createShelf(this.name.current.value);
		}
		// if the input field is empty, alert the user
		else {
			window.alert('Shelf name cannot be empty!');
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
			<div className="search-books-bar">
				<Link className="close-search" to='/'>Close</Link>
				<form onSubmit={this.createShelf}>
					<input type="text" placeholder="Enter bookshelf name" name="bookshelf-name" ref={this.name} />
					<button>Add Shelf</button>
				</form>
			</div>
		)
	}
}

export default AddShelf;