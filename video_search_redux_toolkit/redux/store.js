const { configureStore } = require("@reduxjs/toolkit");
const videoReducer = require("./features/videoSlice");
const filteredVideoReducer = require("./features/filteredVideoSlice");
const { createLogger } = require("redux-logger");

const logger = createLogger();

const store = configureStore({
  reducer: {
    video: videoReducer,
    filteredVideo: filteredVideoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
