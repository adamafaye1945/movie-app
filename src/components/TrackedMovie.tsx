import { FC, useState } from "react";
import { MovieType } from "../models/movieType";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie, updateRating } from "../redux-stuff/movieSice";
import { Rating } from "./rating";
import { RootState } from "../redux-stuff/store";


interface trackedProps {
  trackedMovie: MovieType;
}
const TrackedMovie: FC<trackedProps> = ({ trackedMovie }) => {
  const state =  useSelector(
    (store: RootState) => store.movieReducer
  );
  const ifrating = state.find((movie)=> movie.imdbID === trackedMovie.imdbID)?.Rating
  let stateRating = ifrating ? ifrating : 1

  const [rating, setRating] = useState(1);
  const dispatcher = useDispatch();
  function handleRating() {
    dispatcher(updateRating({ imbID: trackedMovie.imdbID, rating }));
  }
  function handleDelete() {
    dispatcher(deleteMovie(trackedMovie.imdbID));
  }
  console.log(rating);
  return (
    <div className="movie">
      <img src={trackedMovie.Poster} alt="" />
      <span>{trackedMovie.Title}</span>
      {!trackedMovie.rated ? (
        <>
          <select
            name="cars"
            id="cars"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          >
            <option value={1}>⭐️</option>
            <option value={2}>⭐️⭐️</option>
            <option value={3}>⭐️⭐️⭐️</option>
            <option value={4}>⭐️⭐️⭐️⭐️</option>
            <option value={5}>⭐️⭐️⭐️⭐️⭐️</option>
          </select>
          <button onClick={handleRating}>Rate</button>
        </>
      ) : (
        <Rating rating={stateRating} />
      )}

      <button onClick={handleDelete}> Delete </button>
    </div>
  );
};
export { TrackedMovie };
