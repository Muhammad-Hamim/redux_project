import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../components/Utils/axios";

export const fetchRelatedPosts = createAsyncThunk(
  "relatedPost/fetchRelatedPosts",
  async ({ tags, postId }) => {
    const limit = 5;
    let queryString =
      tags?.length > 0
        ? tags.map((tag) => `tags_like=${tag}`).join("&") +
          `&id_ne=${postId}&_limit=${limit}`
        : `&id_ne=${postId}&_limit=${limit}`;
    const response = await axiosInstance.get(`/blogs?${queryString}`);
    return response.data;
  }
);
