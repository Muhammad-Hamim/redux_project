import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../components/Utils/axios.jsx";

export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async ({
    searchString = "",
    sortBySalary = "",
    filterByJobType = "",
  } = {}) => {
    try {
      let queryString = "";

      // Handle search with proper encoding
      if (searchString?.trim()) {
        queryString += `q=${encodeURIComponent(searchString.trim())}`;
      }

      // Add sorting - simplified logic
      if (sortBySalary) {
        queryString += queryString ? "&" : "";
        queryString += `_sort=salary&_order=${
          sortBySalary === "low" ? "asc" : "desc"
        }`;
      }

      // Handle job type filter
      if (filterByJobType) {
        queryString += queryString ? "&" : "";
        queryString += `type=${encodeURIComponent(filterByJobType)}`;
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

export const fetchJobById = createAsyncThunk(
  "jobs/fetchJobById",
  async (jobId) => {
    const response = await axiosInstance.get(`/jobs/${jobId}`);
    return response.data;
  }
);

export const addJob = createAsyncThunk("jobs/addJob", async (jobData) => {
  const response = await axiosInstance.post("/jobs", jobData);
  return response.data;
});

export const deleteJob = createAsyncThunk("jobs/deleteJob", async (jobId) => {
  await axiosInstance.delete(`/jobs/${jobId}`);
  return jobId;
});

export const updateJob = createAsyncThunk("jobs/updateJob", async (jobData) => {
  const response = await axiosInstance.patch(`/jobs/${jobData.id}`, jobData);
  return response.data;
});
