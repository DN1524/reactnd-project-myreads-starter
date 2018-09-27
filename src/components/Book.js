import React, { PureComponent }  from 'react';

class Book extends PureComponent {
	render() {
		return (
			<li>
			<div className="book">
        <div className="book-top">
        	{/* Prevents an error under backgroundimage: url when a searched book has no image */}
          <div 
          	className="book-cover"
          	style={{ 
          		width: 128, 
          		height: 193, 
          		backgroundImage: `url(${this.props.book.imageLinks && this.props.book.imageLinks.thumbnail || ""})` }}>
          </div>
          <div className="book-shelf-changer">
            <select
            	value={this.props.book.shelf}
            	onChange={e => this.props.changeShelf(
            		this.props.book, e.target.value
            	)}
            >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
      	{/* Prevents recieving an error when a searched book does not have an author */}
        <div className="book-authors">{this.props.book.authors && this.props.book.authors[0] || "No author found"}</div>
      </div>
      </li>
		)
	}
}

export default Book