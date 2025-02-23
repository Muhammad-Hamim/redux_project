import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../components/Utils/axios.jsx";

export const fetchBlogPosts = createAsyncThunk(
  "blogPosts/fetchPosts",
  async ({ tags, postId, isSaved, sort }) => {
    let queryString = "";

    // handle tags
    if (tags?.length > 0) {
      queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
    }

    // handle postId
    if (postId) {
      queryString += `${queryString ? "&" : ""}id_ne=${postId}`;
    }

    // handle saved posts
    if (isSaved) {
      queryString += `${queryString ? "&" : ""}isSaved=${isSaved}`;
    }

    // handle sorting
    switch (sort) {
      case "newest":
        queryString += `${queryString ? "&" : ""}_sort=createdAt&_order=desc`;
        break;
      case "most_liked":
        queryString += `${queryString ? "&" : ""}_sort=likes&_order=desc`;
        break;
      default:
        // no sorting needed for default case
        break;
    }

    const response = await axiosInstance.get(`/blogs?${queryString}`);
    return response.data;
  }
);
