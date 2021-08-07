import React, { createContext, useReducer, useEffect } from "react";
import BookReducer from "../reducers/BookReducer";

// create the context object that will also be exported

export const BookContext = createContext();

// create the provider component that takes children props

const BookProvider = ({ children }) => {
  // create the useState object

  // use the useReducer function to accept a reducer and the initial state
  // The dispatch function is used in components to dispatch the type of action that we
  // want performed on the state
  // books represent the state which will be assigned the initial state that is passed as the second
  // parameter to the useReducer hook

  const [books, dispatch] = useReducer(BookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });

  // create useEffect hook
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  // now we need to pass the state and the dispatch function to the BookContext.Provider as value

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {/* pass the children props that represents all components that the context will be wrapped in  */}
      {children}
    </BookContext.Provider>
  );
};

// export the provider as default export
export default BookProvider;
