import React from 'react'
import './App.css'
import { Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import SearchPage from './components/SearchPage';
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  changeShelf = (book, shelf) => {
    // Calls the update function from the BooksAPI
    BooksAPI.update(book, shelf)
    // Allows the books to dynamically change shelves
    book.shelf = shelf;
    this.setState(state => ({
      books: this.state.books
      .filter(b => b.id !== book.id)
      .concat(book)
    }))
  }

  async componentDidMount() {
   const books = await BooksAPI.getAll()
   // Grabs all books from the BooksAPI and changes the
   // state so that the books show
   this.setState({ books })
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={ MainPage } />
        <Route exact path="/search" component={ SearchPage } />
      </div>
    );
  }
}

export default BooksApp
