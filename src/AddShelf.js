import React from 'react';
import { Link } from 'react-router-dom';

class AddShelf extends React.Component {
	// CTOR
	constructor(props) {
		super(props);
		this.name = React.createRef();
	}
	
	// Check whether the shelf name is empty
	isNameEmpty = () => {
		return this.name.length > 0;
	}

	render() {
		return (
			<div>
				<Link className="close-search" to='/'>Close</Link>
				<form onSubmit={this.props.createShelf}>
					<input type="text" placeholder="Enter bookself name" name="bookshelf-name" ref={this.name} />
					<button disabled={this.isNameEmpty()}>Add Shelf</button>
				</form>
			</div>
		)
	}
}

export default AddShelf;