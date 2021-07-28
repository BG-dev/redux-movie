import React from "react";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";

function App() {
  return (
    <React.Fragment>
      <h1> <span>Redux</span> Movies</h1>
      <div className="container">
        <MovieList/>
        <MovieDetails/>
      </div>
    </React.Fragment>
  );
}

export default App;
