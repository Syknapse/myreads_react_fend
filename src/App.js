/*
* APP
*/

import React from 'react';
import { Route } from "react-router-dom";
import HomeView from '../src/views/home_view/homeView';
import SearchView from '../src/views/search_view/searchView';
import './App.css';
import * as BooksAPI from './BooksAPI'

class App extends React.Component {

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => console.log(books))
      .catch(error => console.error("Failed to fetch books", error));
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <HomeView/>)}>
        </Route>

        <Route path="/search" render={() => (
          <SearchView/>)}>
        </Route>
      </div>
    )
  }
}

export default App