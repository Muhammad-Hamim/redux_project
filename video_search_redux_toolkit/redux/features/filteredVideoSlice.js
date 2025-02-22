const { createSlice } = require("@reduxjs/toolkit");
const { fetchFilteredVideo } = require("./apis");

//initial state
const initialState = {
  loading: false,
  filteredVideos: [],
  error: "",
};

//filtered video slice
const filteredVideoSlice = createSlice({
  name: "filteredVideo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFilteredVideo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFilteredVideo.fulfilled, (state, action) => {
      state.loading = false;
      state.filteredVideos = action.payload;
      state.error = "";
    });
    builder.addCase(fetchFilteredVideo.rejected, (state, action) => {
      state.loading = false;
      state.filteredVideos = [];
      state.error = action.error.message;
    });
  },
});

//export
module.exports = filteredVideoSlice.reducer;

