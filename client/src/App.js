import React, { Component } from 'react';
import FindBook from './components/books/FindBook';
import Header from './components/layout/Header';
import Jumbotron from './components/layout/Jumbotron';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header />
        <Jumbotron />
        <FindBook />
      </div>
    );
  }
}

export default App;
