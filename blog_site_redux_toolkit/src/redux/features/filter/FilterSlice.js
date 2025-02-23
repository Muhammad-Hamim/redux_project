import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: "default",
  filter: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setSort, setFilter } = filterSlice.actions;
export default filterSlice.reducer;
