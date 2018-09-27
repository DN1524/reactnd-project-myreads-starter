import React from 'react';
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
import * as BooksAPI from '../BooksAPI'

class MainPage extends React.Component {
	state = {
		books: []
	}

	async componentDidMount() {
		const books = await BooksAPI.getAll()
		// Grabs all books from the BooksAPI and changes the
		// state so that the books show
		this.setState({ books })
	}

	// changeShelf = (book, shelf) => {
	// 	// Calls the update function from the BooksAPI
	// 	BooksAPI.update(book, shelf)
	// 	// Allows the books to dynamically change shelves
	// 	book.shelf = shelf;
	// 	this.setState(state => ({
	// 		books: this.state.books
	// 		.filter(b => b.id !== book.id)
	// 		.concat(book)
	// 	}))
	// }

	render() {
		return (
			<div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf changeShelf={this.props.changeShelf} name="Currently Reading" books={this.state.books.filter(b => b.shelf === "currentlyReading")}/>
            <Shelf changeShelf={this.props.changeShelf} name="Want to Read" books={this.state.books.filter(b => b.shelf === "wantToRead")}/>
            <Shelf changeShelf={this.props.changeShelf} name="Read" books={this.state.books.filter(b => b.shelf === "read")}/>
          </div>
          {console.log(this.props)}
        </div>
        <div className="open-search">
          <Link to="/search"></Link>
        </div>
      </div>
		);
	}
}

export default MainPage;