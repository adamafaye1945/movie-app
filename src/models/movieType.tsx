interface MovieType {
  Title: string;
  imdbID: string;
  Poster: string;
  Rating: number;
  rated: boolean;
}
interface ResponseApi {
  Response: string;
  Search: MovieType[];
}
export type { MovieType, ResponseApi };
