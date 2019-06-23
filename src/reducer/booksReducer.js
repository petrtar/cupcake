const booksReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_BOOKS": 
          return state.concat([action.data])
          default: 
          return state;
        case "DELETE_BOOKS": 
          const arrBooks = state.filter((book) => {
              return book.info.id !== action.id;
          });
          return arrBooks;
      }
}
 
export default booksReducer;