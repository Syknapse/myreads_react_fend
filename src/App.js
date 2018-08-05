/*
* APP
*/

import React from 'react';
import { Route } from "react-router-dom";
import HomeView from '../src/views/home_view/home_view';
import SearchView from '../src/views/search_view/search_view';
import './App.css';
// import * as BooksAPI from './BooksAPI'

class App extends React.Component {

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