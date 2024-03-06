import { useSelector } from "react-redux";
import { MovieType } from "../models/movieType";
import { TrackedMovie } from "./TrackedMovie";
import { RootState} from "../redux-stuff/store";


function TrackedMovieList() {
  const trackedMovies: MovieType[] = useSelector((store:RootState)=>store.movieReducer)
  return (
    <div className="tracked">
      <h1>Tracked Movies</h1>
      {trackedMovies.map((movie)=> <TrackedMovie trackedMovie={movie}/>)}
    </div>
  );
}
export { TrackedMovieList };
