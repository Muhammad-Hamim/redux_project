import { ADD_BOOK, DELETE_BOOK, EDIT_BOOK, LOAD_BOOKS } from "./actions";
import initialState from "./initialState";

//generate the book id dynamically
const generateBookId = (books) => {
  if (!books || books.length === 0) {
    return 1;
  }
  const maxId = books.reduce((max, book) => Math.max(max, book.id), 0);
  return maxId + 1;
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case ADD_BOOK:
      return {
        ...state,
        books: [
          ...state.books,
          { ...action.payload, id: generateBookId(state.books) },
        ],
      };
    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    case EDIT_BOOK:
      //find the book using the id
      //replace the updated info
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id ? { ...book, ...action.payload } : book
        ),
      };
    default:
      return state;
  }
};

export default booksReducer;
