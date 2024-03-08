import { useDispatch, useSelector } from "react-redux";
import { MovieType } from "../models/movieType";
import { AddInTrackedMovie } from "../redux-stuff/movieSice";
import { FC } from "react";
import { RootState } from "../redux-stuff/store";
interface movieProps {
  Amovie: MovieType;
}

const Movie: FC<movieProps> = ({ Amovie }) => {
  const dispatcher = useDispatch();
  const state = useSelector((state: RootState) => state.movieReducer);

  //finfing if movie is already tracked and disbale button 
  let isAdded: boolean;
  if (state.find((movie) => movie.imdbID === Amovie.imdbID)) {
    isAdded = true;
  } else {
    isAdded = false;
  }

  console.log(state);
  function handleAddToStore() {
    dispatcher(AddInTrackedMovie(Amovie));
  }
  return (
    <div className="movie">
      <img src={Amovie.Poster} alt="" />
      <span>{Amovie.Title}</span>
      <button disabled={isAdded} onClick={handleAddToStore}>
        {!isAdded ? `Add ${Amovie.Title}` : "Already Added the  movie"}
      </button>
    </div>
  );
};
export { Movie };
