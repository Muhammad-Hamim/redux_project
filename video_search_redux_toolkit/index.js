const store  = require("./redux/store");
const {
  fetchVideo,
  fetchFilteredVideo,
} = require("./redux/features/apis");

// Subscribe to state changes
store.subscribe(() => {
//   const state = store.getState();
//   console.log("Current state:", state);
});

// Fetch initial videos
store.dispatch(fetchVideo()).then(() => {
  const state = store.getState();
  const tags = state.video.tags; // Assuming tags are in video slice
  if (tags) {
    store.dispatch(fetchFilteredVideo(tags));
  }
});
