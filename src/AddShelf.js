import React from 'react';
import { Link } from 'react-router-dom';

class AddShelf extends React.Component {
	// CTOR
	constructor(props) {
		super(props);
		this.name = React.createRef();
	}
	
	// Create shelf
	createShelf = (event) => {
		event.preventDefault();
		// if there's a name in the input
		if(this.name.current.value) {
			this.props.createShelf(this.name.current.value);
		}
		// if the input field is empty, alert the user
		else {
			window.alert('Shelf name cannot be empty!');
		}
	}

	render() {
		return (
			<div className="search-books-bar">
				<Link className="close-search" to='/'>Close</Link>
				<form onSubmit={this.createShelf}>
					<input type="text" placeholder="Enter bookself name" name="bookshelf-name" ref={this.name} />
					<button>Add Shelf</button>
				</form>
			</div>
		)
	}
}

export default AddShelf;