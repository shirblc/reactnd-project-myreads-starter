/*
	Book
	MyReads Component
*/

import React from 'react';

// Single book component
class Book extends React.Component {
	state = {
		currentShelf: this.props.book.shelf
	}

	// 
	/*
  	Function Name: render()
  	Function Description: Updates the shelf in which the book should be displayed. This method is triggered upon changes to the 'select' input's value.
  	Parameters: value (string) - the new shelf in which to display the book.
	----------------
  	Programmer: Shir Bar Lev.
  	*/
	updateShelf = (value) => {
		this.setState({
			currentShelf: value
		});
		let updatedBook = this.props.book;
		updatedBook.shelf = value;
		this.props.onShelfUpdate(updatedBook);
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
			<li>
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks && this.props.book.imageLinks.thumbnail})` }}></div>
						<div className="book-shelf-changer">
							<select value={this.state.currentShelf ? this.state.currentShelf : 'none'} onChange={(event) => (this.updateShelf(event.target.value))}>
								<option value="move" disabled>Move to...</option>
								{
									this.props.shelves.map(shelf => (
										<option key={shelf.value} value={shelf.value}>{shelf.name}</option>
									))
								}
							</select>
						</div>
					</div>
					<div className="book-title">{this.props.book.title}</div>
					<div className="book-authors">{this.props.book.authors && this.props.book.authors.join(' & ')}</div>
				</div>
			</li>
		)
	}
}

export default Book;