import { useDispatch } from "react-redux";
import { MovieType } from "../models/movieType";
import { AddInTrackedMovie } from "../redux-stuff/movieSice";
type movieProps = {
  movie: MovieType;
};

function Movie({ movie }: movieProps) {
  const dispatcher = useDispatch();
  function handleAddToStore(){
    dispatcher(AddInTrackedMovie(movie));
  }
  return (
    <div className="movie">
      <img src={movie.Poster} alt="" />
      <span>{movie.Title}</span>
      <button onClick={handleAddToStore}>Add {movie.Title}</button>
    </div>
  );
}
export { Movie };
