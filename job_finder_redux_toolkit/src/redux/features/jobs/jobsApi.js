import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../components/Utils/axios.jsx";

export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async ({ searchString, sortBySalary, filterByJobType }) => {
    try {
      let queryString = "";

      // Handle search with proper encoding
      if (searchString?.trim()) {
        // Encode the search string to handle spaces and special characters
        queryString += `q=${encodeURIComponent(searchString.trim())}`;
      }

      // Handle job type filter with exact match
      if (filterByJobType) {
        queryString += queryString ? "&" : "";
        // Use exact match for job type
        queryString += `type=${encodeURIComponent(filterByJobType)}`;
      }

      // Add sorting
      if (sortBySalary) {
        queryString += queryString ? "&" : "";
        queryString += `_sort=salary&_order=${
          sortBySalary === "low" ? "asc" : "desc"
        }`;
      }

      const response = await axiosInstance.get(
        `/jobs${queryString ? `?${queryString}` : ""}`
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch jobs: " + error.message);
    }
  }
);

export const deleteJob = createAsyncThunk("jobs/deleteJob", async (jobId) => {
  await axiosInstance.delete(`/jobs/${jobId}`);
  return jobId;
});
