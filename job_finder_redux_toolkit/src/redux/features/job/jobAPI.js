import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../components/Utils/axios";

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



export const updateJob = createAsyncThunk("jobs/updateJob", async (jobData) => {
  const response = await axiosInstance.patch(`/jobs/${jobData.id}`, jobData);
  return response.data;
});
