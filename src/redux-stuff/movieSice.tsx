import { createSlice } from "@reduxjs/toolkit";
import { MovieType } from "../models/movieType";

const initialState: MovieType[] = [];

const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {
    AddInTrackedMovie: (state, action) => {
      state.push(action.payload);
    },
    deleteMovie: (state, action) => {
      return state.filter((movie) => movie.imdbID !== action.payload);
    },
    onclear: () => {
      return initialState;
    },
  },
});

const { AddInTrackedMovie, deleteMovie } = movieSlice.actions;

export { AddInTrackedMovie, deleteMovie };
export default movieSlice.reducer;
