import { ADD_BOOK, DELETE_BOOK, EDIT_BOOK, LOAD_BOOKS } from "./actions";

export const loadBook = (books) => {
  return {
    type: LOAD_BOOKS,
    payload: books,
  };
};
export const addBook = (bookInfo) => {
  return {
    type: ADD_BOOK,
    payload: bookInfo,
  };
};

export const deleteBook = (bookId) => {
  return {
    type: DELETE_BOOK,
    payload: bookId,
  };
};

export const editBook = (bookInfo) => {
  return {
    type: EDIT_BOOK,
    payload: bookInfo,
  };
};
