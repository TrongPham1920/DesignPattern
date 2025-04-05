import { configureStore } from "@reduxjs/toolkit";
import count from "./count";

export const store = configureStore({
  reducer: {
    example: count,
  },
});
