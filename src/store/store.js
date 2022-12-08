import { configureStore } from "@reduxjs/toolkit";
import playListSliceReducer from "./playlistSlice";
import playerReducer from "./playerSlice";

export const store = configureStore({
  reducer: {
    playlist: playListSliceReducer,
    plaer: playerReducer,
  },
});
