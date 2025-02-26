import { createSlice } from "@reduxjs/toolkit";
import { addJob, fetchJobById, fetchJobs, updateJob } from "../JobsApi";

const initialState = {
  jobs: [],
  job: null,
  isLoading: false,
  isError: false,
  error: "",
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.jobs = [];
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(fetchJobById.pending, (state) => {
        state.isLoading = true;
        state.job = null;
      })
      .addCase(fetchJobById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.job = action.payload;
      })
      .addCase(fetchJobById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.job = null;
      })
      .addCase(addJob.fulfilled, (state, action) => {
        state.jobs.push(action.payload);
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        state.jobs = state.jobs.map(job => 
          job.id === action.payload.id ? action.payload : job
        );
        state.job = action.payload;
      });
  },
});

export default jobsSlice.reducer;
