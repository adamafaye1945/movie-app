import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./apiSlice";
import movieSlice from "./movieSice";

const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    movieReducer: movieSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export { store };
