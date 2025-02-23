import { createSlice } from "@reduxjs/toolkit";
import { fetchBlogPosts } from "./blogPostsAPI";

//initial state
const initialState = {
  isLoading: false,
  posts: [],
  isError: false,
  error: "",
};

//createSlice
const blogPostsSlice = createSlice({
  name: "blogPosts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogPosts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchBlogPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchBlogPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.posts = [];
        state.error = action.error.message;
      });
  },
});

export default blogPostsSlice.reducer;
