import { ADD_BOOK, DELETE_BOOK, EDIT_BOOK } from "./actions";

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
