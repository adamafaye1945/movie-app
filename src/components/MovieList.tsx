import { MovieType } from "../models/movieType";
import { Movie } from "./movie";

type MovieListProps = {
  MovieData: MovieType []| undefined;
};
function MovieList({ MovieData }: MovieListProps) {
  return (
    <div className="movieList">
      {MovieData &&
        MovieData.map((movie) => <Movie movie={movie} key={movie.imdbID} />)}
    </div>
  );
}
export { MovieList };
