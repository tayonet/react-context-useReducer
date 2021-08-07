import React from "react";

// useReducer is a more efficient alternative to useState in case you are dealing with
// complex applications that needs several interactions with the state objects
const BookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        {
          title: action.payload.title,
          author: action.payload.author,
          price: action.payload.price,
        },
      ];
    case "REMOVE_BOOK":
      return state.filter((book) => book.title !== action.payload);

    default:
      return state;
  }
};
export default BookReducer;
