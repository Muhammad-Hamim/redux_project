import { loadBook } from "../actionType";

const fetchBooks = async (dispatch) => {
  const response = await fetch("http://localhost:9000/books");
  const books = await response.json();
  console.log(books);
  dispatch(loadBook(books));
};
export default fetchBooks;
