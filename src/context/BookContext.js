import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'Ralia the sugar girl', id: 1},
        {title: 'Ali goes to school', id: 2},
        {title: 'Shannara Chronicles', id: 3},
        {title: 'Who stole the meat from the pot', id: 4}
    ])
  return (
   <BookContext.Provider value={{books}}>
       {props.children}
   </BookContext.Provider>
  )
}

export default BookContextProvider;