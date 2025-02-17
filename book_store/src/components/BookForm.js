import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_BOOK } from "../redux/books/actions";

const BookForm = () => {
  const dispatch = useDispatch();
  const [bookInfo, setBookInfo] = useState({
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(e.target);
    setBookInfo({
      ...bookInfo,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(bookInfo);
    dispatch(ADD_BOOK(bookInfo));
  };

  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
      <form className="book-form" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label htmlFor="name">Book Name</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookname"
            name="name"
            value={bookInfo.name}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="category">Author</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookauthor"
            name="author"
            value={bookInfo.author}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="image">Image Url</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookthumbnail"
            name="thumbnail"
            value={bookInfo.thumbnail}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookprice"
              name="price"
              value={bookInfo.price}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="rating">Rating</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookrating"
              name="rating"
              min={1}
              max={5}
              value={bookInfo.rating}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex items-center">
          <input
            id="input-Bookfeatured"
            type="checkbox"
            name="featured"
            className="w-4 h-4"
            checked={bookInfo.featured}
            onChange={handleChange}
          />
          <label htmlFor="featured" className="ml-2 text-sm">
            This is a featured book
          </label>
        </div>
        <button type="submit" className="submit" id="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookForm;
