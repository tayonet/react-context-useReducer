import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookCard from "./book-card/BookCard";
import "./bookListing.css";
export default function BookListing() {
  // collect data from BookContext
  const { books, dispatch } = useContext(BookContext);
  // loop through books array and display the data
  return (
    <div className="listing">
      {books.map((book, index) => (
        <div
          className="book-card"
          key={book.title}
          onClick={() => dispatch({ type: "REMOVE_BOOK", payload: book.title })}
        >
          <BookCard book={book} />

          {/* <h4>Book Title : {book.title}</h4>
          <h5>Book Author : {book.author}</h5>
          <p>Book Price : {book.price}</p> */}
        </div>
      ))}
    </div>
  );
}
