import { configureStore } from "@reduxjs/toolkit";
import playListSliceReducer, { getPlaylist } from "./playlistSlice";

export const store = configureStore({
  reducer: {
    playlist: playListSliceReducer,
  },
});
