const { createSlice } = require("@reduxjs/toolkit");
const { fetchVideo, fetchFilteredVideo } = require("./apis");
//initial state
const initialState = {
  loading: false,
  initialVideos: {},
  tags: [],
  error: "",
};

//video slice
const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVideo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchVideo.fulfilled, (state, action) => {
      state.loading = false;
      state.initialVideos = action.payload;
      state.tags = state.initialVideos.tags;
      state.error = "";
    });
    builder.addCase(fetchVideo.rejected, (state, action) => {
      state.loading = false;
      state.initialVideos = {};
      state.error = action.error.message;
    });
  },
});

//export
module.exports = videoSlice.reducer;
