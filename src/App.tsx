import React from "react";
import { Search } from "./components/search";
import { TrackedMovieList } from "./components/TrackedMovieList";
function App() {
  return (
    <div className="App">
      <div className="application ">
        <Search />
        <TrackedMovieList />
      </div>
    </div>
  );
}

export default App;
