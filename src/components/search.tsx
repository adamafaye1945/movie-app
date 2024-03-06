import { useEffect, useState } from "react";
import "../App.css";
import { useGetMovieQuery } from "../redux-stuff/apiSlice";
import { MovieList } from "./MovieList";

function Search() {
  const [search, setSearch] = useState("");
  const [apiSearchElement, setApiSearchElement] = useState("");
  const { data } = useGetMovieQuery(apiSearchElement, {
    skip: apiSearchElement === "",
  });

  

  useEffect(
    function () {
      const debounce = setTimeout(() => {
        setApiSearchElement(search);
      }, 1000);
      return () => clearTimeout(debounce);
    },
    [search]
  );

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Movie search app 🎥</h1>
      <div className="search">
        <p>search your movies here</p>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="look up your movie here"
          type="text"
        />
        <button>Clear search</button>
      </div>
      {data?.Response && (
        <>
          <h2>Results</h2>
          <MovieList MovieData={data?.Search} />
        </>
      )}
    </div>
  );
}
export { Search };
