import React, { Component } from "react";

import axios from "axios";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
    // this.loadBooks = this.loadBooks.bind(this);
  }

  componentDidMount() {
    this.loadBooks();
  }

  async loadBooks() {
    const promise = await axios.get("/api/plants");
    const status = promise.status;
    console.log(promise)
    if (status === 200) {
      const data = promise.data.data;
      this.setState({ books: data });
    }
  }

  render() {
    return (
      <div>
        <h1>Books</h1>
      </div>
    )
  }
}