import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Book from "./components/Plants"

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Book} />
      </Router>
    );
  }
}

export default App;
