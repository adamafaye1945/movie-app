import { FC, useEffect, useState } from "react";
import "../App.css";
import { useGetMovieQuery } from "../redux-stuff/apiSlice";
import { MovieList } from "./MovieList";

import { ResponseApi } from "../models/movieType";

const Search: FC = () => {
  const [search, setSearch] = useState("");
  const [apiSearchElement, setApiSearchElement] = useState("");
  const [displayedSearch, setDisplayedSearch] = useState<ResponseApi>()
  // const dispatcher = useDispatch();
  const { data, isFetching } = useGetMovieQuery(apiSearchElement, {
    skip: apiSearchElement === "",
  });
  //question 
  function handleClear(){
    setSearch("")
    setDisplayedSearch(undefined)
  }
  useEffect(
    function () {
      const debounce = setTimeout(() => {
        setApiSearchElement(search);
      }, 1000);
      return () => clearTimeout(debounce);
    },
    [search]
  );
  useEffect(
    function(){
      setDisplayedSearch(data)
    }, [data]
  )
  console.log(data)
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
        <button onClick={handleClear}>Clear search</button>
      </div>
      {isFetching && <p>....Searching 🔎</p>}
      {displayedSearch?.Response === "False" && <h1>No movie found sorry!</h1>}
      {displayedSearch?.Response === "True" && (
        <>
          <h2>Results</h2>
          <MovieList MovieData={displayedSearch?.Search} />
        </>
      )}
    </div>
  );
};
export { Search };