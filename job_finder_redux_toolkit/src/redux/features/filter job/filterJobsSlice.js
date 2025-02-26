import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
  search: "",
  sortBySalary: "",
};

const filterJobsSlice = createSlice({
  name: "filterJobs",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSortBySalary: (state, action) => {
      state.sortBySalary = action.payload;
    },
  },
});

export default filterJobsSlice.reducer;
export const { setFilter, setSearch, setSortBySalary } =
  filterJobsSlice.actions;
