import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ResponseApi } from "../models/movieType";

const API_KEY: string = "f631dc49";


const movieApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://www.omdbapi.com" }),
  endpoints: (builder) => ({
    GetMovie: builder.query<ResponseApi | undefined, string>({
      query: (searchedMovie) => `?apikey=${API_KEY}&s=${searchedMovie}`,
    }),
  }),
});

const { useGetMovieQuery } = movieApi;
export { useGetMovieQuery, movieApi };
