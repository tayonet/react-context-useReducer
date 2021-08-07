import React from "react";
import "./bookcard.css";
export default function BookCard(props) {
  return (
    <div className="card">
      <div className="book-title">
        <h4>{props.book.title}</h4>
      </div>
      <div className="book-author">
        <h4>by {props.book.author}</h4>
      </div>
      <div className="book-price">
        <h5>${props.book.price}</h5>
      </div>
      <div className="delete-note">
        <h6>delete</h6>
      </div>
    </div>
  );
}
