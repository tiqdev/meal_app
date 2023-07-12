import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "./slice/meal.js";

export default configureStore({
  reducer: {
    meal: mealReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
