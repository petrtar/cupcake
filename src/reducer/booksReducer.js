const booksReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_BOOKS":
      let addAge = false;
      state.forEach((basketBook, i) => {
        if (basketBook.info.id === action.data.info.id) {
          state[i].age = Number(state[i].age) + Number(action.data.age);
          addAge = true;
        }
      });
      if (addAge) {
        return state;
      } else return state.concat([action.data]);
    case "DELETE_BOOKS":
      const arrBooks = state.filter((book) => {
        return book.info.id !== action.id;
      });
      return arrBooks;
    default:
      return state;
  }
}

export default booksReducer;