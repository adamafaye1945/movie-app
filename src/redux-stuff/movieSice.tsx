import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MovieType } from "../models/movieType";

// state tp hold on to tracked movei
// initializing the state with localStorage
const initialState: MovieType[] = [];
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  if (key && key !== "debug") {
    const item = localStorage.getItem(key);
    if (item) {
      const movie: MovieType = JSON.parse(item);
      initialState.push(movie)
    }
  }
}

//movie slice to care of adding, deleting and clearing movie in state
const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {
    //action creator
    //add movie
    AddInTrackedMovie: (state, action: PayloadAction<MovieType>) => {
      if (
        state.find((movie: MovieType) => movie.imdbID === action.payload.imdbID)
      ) {
        return;
      }
      state.push(action.payload);
      localStorage.setItem(
        action.payload.imdbID,
        JSON.stringify(action.payload)
      );
    },
    //delete mov
    deleteMovie: (state, action: PayloadAction<string>) => {
      localStorage.removeItem(action.payload);
      return state.filter((movie) => movie.imdbID !== action.payload);
    },
    //delete all
    onclear: () => {
      return initialState;
    },
    //update rating of the movie
    updateRating: (
      state,
      action: PayloadAction<{ imbID: string; rating: number }>
    ) => {
      const movieToUpdate = state.find(
        (movie) => movie.imdbID === action.payload.imbID
      );
      if (movieToUpdate) {
        movieToUpdate.Rating = action.payload.rating;
        movieToUpdate.rated = true;
        localStorage.setItem(
          movieToUpdate.imdbID,
          JSON.stringify(movieToUpdate)
        );
      }
    },
  },
});

const { AddInTrackedMovie, deleteMovie, onclear, updateRating } =
  movieSlice.actions;

export { AddInTrackedMovie, deleteMovie, onclear, updateRating };
export default movieSlice.reducer;
