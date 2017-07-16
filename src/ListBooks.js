import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'


class Shelf extends Component {

}


class ListBooks extends Component {
  state = {
    shelf: ''
  }
// render(){
// 	const { books } = this.state;
// 	let currently = books.filter((book)=>{
// 		 return book.currentlyReading ==='currently'
// 	})
// 	let wantToRead = books.filter((book)=>{
// 		 return book.wantToRead ==='wantToRead'
// 	})
// 	let read = books.filter((book)=>{
// 		 return book.read ==='read'
// 	})

// 	<div>
// 		currently.map((book)=>(
// 			<li></li>
// 		))
// 		wantToRead.map((book)=>(
// 			<li></li>
// 		))
// 		read.map((book)=>(
// 			<li></li>
// 		))
// 	</div>


  render() {
    const { books } = this.props

    return (
      <div className="app">

        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                        <ol className="books-grid">
          {books.map((book) => (
            <li >
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193 }}></div>
                  <div className="book-shelf-changer">
                    <select>
                      <option value="none" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
          ))}
        </ol>
                </div>
              </div>
       
      
            </div>
          </div>

          <div className="open-search">

           <Link to='/search'>Search a book</Link>

          </div>
        </div>

      </div>
    )
  }

 
}

export default ListBooks