import { MovieType } from "../models/movieType";
type trackedProps = {
  trackedMovie: MovieType;
};
function TrackedMovie({ trackedMovie }: trackedProps) {
  return (
    <div className="movie">
      <img src={trackedMovie.Poster} alt="" />
      <span>{trackedMovie.Title}</span>
      <button>Finished watching</button>
    </div>
  );
}
export { TrackedMovie };
