import React from "react";
import BookCard from "./BookCard";
import { useDispatch, useSelector } from "react-redux";
import { filterFeaturedBooks } from "../redux/filters/actionType";

const BookPage = () => {
  const books = useSelector((state) => state.books.books);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  console.log(filters);
  console.log(books);
  const filterFeaturedBook = (book) => {
    const { status } = filters;
    switch (status) {
      case "Featured":
        return book.featured;
      case "All":
        return true;
      default:
        return true;
    }
  };
  const filterSearchBook = (book) => {
    const { searchText } = filters;
    const matchesStatus = book.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    return matchesStatus;
  };
  const handleFilterFeaturedBooks = (filterText) => {
    dispatch(filterFeaturedBooks(filterText));
  };
  return (
    <div className="order-2 xl:-order-1">
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => handleFilterFeaturedBooks("All")}
            className={`filter-btn ${
              filters.status === "All" && "active-filter"
            }`}
            id="lws-filterAll"
          >
            All
          </button>
          <button
            onClick={() => handleFilterFeaturedBooks("Featured")}
            className={`filter-btn ${
              filters.status === "Featured" && "active-filter"
            }`}
            id="lws-filterFeatured"
          >
            Featured
          </button>
        </div>
      </div>
      {/* book BookCard */}
      {books
        .filter(filterFeaturedBook)
        .filter(filterSearchBook)
        .map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      {/* book BookCard */}
    </div>
  );
};

export default BookPage;
