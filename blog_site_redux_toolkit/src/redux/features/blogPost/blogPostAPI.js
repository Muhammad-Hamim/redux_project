import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../components/Utils/axios";

export const fetchBlogPost = createAsyncThunk(
  "blogPost/fetchPost",
  async (id) => {
    const response = await axiosInstance.get(`/blogs/${id}`);
    return response.data;
  }
);

export const updateLikePost = createAsyncThunk(
  "blogPost/likePost",
  async (post) => {
    const response = await axiosInstance.patch(`/blogs/${post.id}`, {
      likes: post.likes + 1,
    });
    return response.data;
  }
);
