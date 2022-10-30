import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./searchIcon.svg";
import MovieCard from "./components/MovieCard";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=25f29436";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const serachMovies = async (title) => {
    const result = await fetch(`${API_URL}&s=${title}`);
    const data = await result.json();
    console.log(data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {
    serachMovies();
  }, []);

  return (
    <div className="app">
      <h1>Movie List</h1>
      <div className="search">
        <input
          placeholder="search for movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => serachMovies(searchTerm)}
        />
      </div>
      {/* {console.log(movies.length)} */}
      {/* <div className="container">
        {movies.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </div> */}
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => {
            return <MovieCard movie={movie} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>No movie found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
