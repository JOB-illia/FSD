import { configureStore } from "@reduxjs/toolkit";
import { ViewerReducer } from "~/src/entities/viewer";

export const store = configureStore({
  reducer: {
    viewer: ViewerReducer,
  },
  devTools: true,
});