import { createSlice } from "@reduxjs/toolkit";
import { fetchBlogPost, updateLikePost } from "./blogPostAPI";

//initial state
const initialState = {
  isLoading: false,
  post: {},
  isError: false,
  error: "",
};

//createSlice
const blogPostSlice = createSlice({
  name: "blogPost",
  initialState,
  reducers: {
    likePost: (state, action) => {
      state.post.likes += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogPost.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchBlogPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.post = action.payload;
      })
      .addCase(fetchBlogPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.post = {};
        state.error = action.error.message;
      })
      .addCase(updateLikePost.pending, (state) => {
        state.isError = false;
        state.error = "";
        // Optimistic update
        state.post.likes += 1;
      })
      .addCase(updateLikePost.fulfilled, (state, action) => {
        state.post = action.payload;
      })
      .addCase(updateLikePost.rejected, (state, action) => {
        state.isError = true;
        state.error = action.error.message;
        // Revert optimistic update on failure
        state.post.likes -= 1;
      });
  },
});

export const { likePost } = blogPostSlice.actions;
export default blogPostSlice.reducer;
