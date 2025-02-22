const store = require("../store");
const { createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

// Helper function to convert view string to number
const convertViewsToNumber = (viewStr) => {
  if (typeof viewStr !== "string") return 0;

  const normalized = viewStr.toLowerCase();
  if (normalized.endsWith("k")) {
    return parseFloat(normalized) * 1000;
  }
  return parseFloat(normalized) || 0;
};

//fetch video
const fetchVideo = createAsyncThunk("video/fetchVideo", async () => {
  const response = await fetch("http://localhost:9000/videos");
  const data = await response.json();
  return data;
});

const fetchFilteredVideo = createAsyncThunk(
  "video/fetchFilteredVideo",
  async (tags) => {
    const queryString = tags?.map((tag) => `tags_like=${tag}`).join("&");
    console.log(
      `filter video link: http://localhost:9000/videos?${queryString}`
    );
    const response = await fetch(`http://localhost:9000/videos?${queryString}`);
    const data = await response.json();

    // Sort videos by views in descending order
    const sortedData = data.sort((a, b) => {
      const viewsA = convertViewsToNumber(a.views);
      const viewsB = convertViewsToNumber(b.views);
      return viewsB - viewsA;
    });

    return sortedData;
  }
);

module.exports = { fetchVideo, fetchFilteredVideo };
