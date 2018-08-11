/*
* APP
*/

import React from 'react'
import { Route } from "react-router-dom"
import HomeView from '../src/views/home_view/homeView'
import SearchView from '../src/views/search_view/searchView'
import './App.css'
import * as BooksAPI from './BooksAPI'

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    this.setBooksState()
  }

	// Get all the books previously on my shelves
	setBooksState() {
    BooksAPI.getAll()
      .then( books => this.setState({ books }))
      .catch(error => console.error("Failed to fetch books", error))
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then( () => { this.setBooksState() } )
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <HomeView
            books={this.state.books}
            onChange={this.changeShelf}
          />
        )}>
        </Route>

        <Route path="/search" render={() => (
          <SearchView
            books={this.state.books}
            onChange={this.changeShelf}
          />
        )}>
        </Route>
      </div>
    )
  }
}

export default App