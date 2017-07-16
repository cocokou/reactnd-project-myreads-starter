import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class SearchBooks extends Component {
    state = {
    query: ''
  }

  render() {

    // let showingBooks
    // if (query) {
    //   const match = new RegExp(escapeRegExp(query), 'i')
    //   showingBooks = books.filter((book) => match.test(book.name))
    // } else {
    //   showingbooks = books
    // }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search' to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">

          </ol>
        </div>
      </div>
    )
  }
}