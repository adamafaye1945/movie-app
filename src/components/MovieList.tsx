import { FC } from "react";
import { MovieType } from "../models/movieType";
import { Movie } from "./movie";

type MovieListProps = {
  MovieData: MovieType []| undefined;
};

const MovieList: FC <MovieListProps> = ({ MovieData }) => {
  return (
    <div className="movieList">
      {MovieData &&
        MovieData.map((movie) => <Movie Amovie={movie} key={movie.imdbID} />)}
    </div>
  );
}
export { MovieList };
