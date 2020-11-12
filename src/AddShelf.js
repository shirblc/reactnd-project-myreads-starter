import React from 'react';

class AddShelf extends React.Component {
	// CTOR
	constructor() {
		this.name = React.createRef();
	}
	
	// Check whether the shelf name is empty
	isNameEmpty = () => {
		return this.name.length > 0;
	}

	render() {
		return (
			<div>
				<form onSubmit={this.props.createShelf}>
					<input type="text" placeholder="Enter bookself name" name="bookshelf-name" ref={this.name} />
					<button disabled={this.isNameEmpty()}>Add Shelf</button>
				</form>
			</div>
		)
	}
}

export default AddShelf;