import { configureStore } from "@reduxjs/toolkit";
import trip from "../features/trip";

export const store = configureStore({
  reducer: {
    trip,
  },
});
