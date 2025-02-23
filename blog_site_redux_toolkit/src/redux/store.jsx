import { configureStore } from "@reduxjs/toolkit";
import blogPostsReducer from "./features/blogPosts/blogPostsSlice";
import blogPostReducer from "./features/blogPost/blogPostSlice";
import relatedPostsReducer from "./features/relatedPosts/relatedPostsSlice";
import filterReducer from "./features/filter/FilterSlice";
const store = configureStore({
  reducer: {
    blogPosts: blogPostsReducer,
    blogPost: blogPostReducer,
    relatedPosts: relatedPostsReducer,
    filter: filterReducer,
  },
});

export default store;
