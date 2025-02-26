import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./features/jobs/jobsSlice";
import jobReducer from "./features/job/jobSlice";
import filterReducer from "./features/filter job/filterJobsSlice";
const store = configureStore({
  reducer: {
    jobsReducer,
    jobReducer,
    filterReducer,
  },
});

export default store;
