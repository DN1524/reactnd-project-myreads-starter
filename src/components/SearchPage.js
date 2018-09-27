import React from 'react';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash';
import Book from './Book';
import * as BooksAPI from '../BooksAPI';


class SearchPage extends React.Component {
		state = {
			books: [],
			results: [],
			query: ''
		}

	componentDidMount() {
		// Grabs all books from the BooksAPI and changes the
		// state so that the books show
		BooksAPI.getAll()
			.then(book => {
				this.setState({ books: book })
		})
	}
	// Allows users to add books from the SearchPage into
	// any of the three shelves in the MainPage.
	// changeShelf = (book, shelf) => {
	// 	BooksAPI.update(book, shelf) 
	// 	// Allows the books to dynamically change shelves
	// 	book.shelf = shelf;
	// 	this.setState(state => ({
	// 		books: this.state.books
	// 		.filter(b => b.id !== book.id)
	// 		.concat(book)
	// 	}))
	// }

	updateQuery = (query) => {
		// Calls startSearch() to update the search results
		// based on the the given query
		this.setState (
			{ query: query.trim() },
			this.startSearch
		)
	}

	startSearch = debounce(() => {
		const query = this.state.query

		if (query === "" || query === undefined) {
			return this.setState({ results: [] });
		}
		// Shows the books that best matches the current query
		
		BooksAPI.search(query)
		.then( result => {
			if (result.error) {
				// returns a blank array if no results are available
				this.setState({ results: [] });
			} else {
				this.setState({ results: result })
			}
		})
	}, 400)

	render() {
		return (
			<div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input 
            	type="text" 
            	placeholder="Search by title or author" 
            	value={this.state.query}
            	onChange={e => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          	{this.state.results.map((book, key) => 
          		<Book
          			changeShelf={this.props.changeShelf}
          			book={book}
          			key={key} 
          		/>
          	)}
          </ol>
        </div>
      </div>
		);
	}
}

export default SearchPage;