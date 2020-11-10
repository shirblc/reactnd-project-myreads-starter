import React from 'react';

// Single book component
class Book extends React.Component {
	state = {
		currentShelf: this.props.currentShelf
	}

	// update the shelf in which the book should be displayed
	updateShelf = (value) => {
		this.setState({
			currentShelf: value
		});
	}
	
	// render method
	render() {
		return (
			 <li>
				<div className="book">
				  <div className="book-top">
					<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("{this.props.coverUrl}")' }}></div>
					<div className="book-shelf-changer">
					  <select value={this.state.currentShelf} onChange={(event) => (this.updateShelf(event.target.value))}>
						<option value="move" disabled>Move to...</option>
						<option value="currentlyReading">Currently Reading</option>
						<option value="wantToRead">Want to Read</option>
						<option value="read">Read</option>
						<option value="none">None</option>
					  </select>
					</div>
				  </div>
				  <div className="book-title">{this.props.title}</div>
				  <div className="book-authors">{this.props.author}</div>
				</div>
			  </li>
		)
	}
}

export default Book;