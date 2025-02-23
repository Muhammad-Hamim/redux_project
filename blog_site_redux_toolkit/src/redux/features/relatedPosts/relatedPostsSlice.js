import { createSlice } from "@reduxjs/toolkit";
import { fetchRelatedPosts } from "./relatedPostsAPI";

//initial state
const initialState = {
  isLoading: false,
  posts: [],
  isError: false,
  error: "",
};

//createSlice
const relatedPostsSlice = createSlice({
  name: "blogPosts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedPosts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchRelatedPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchRelatedPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.posts = [];
        state.error = action.error.message;
      });
  },
});

export default relatedPostsSlice.reducer;
