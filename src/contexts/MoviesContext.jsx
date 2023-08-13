import { createContext, useState } from "react";
import { movies } from "../Movies";
export const MoviesContext = createContext();

const getMovies = () => {
  let localMovies = localStorage.getItem("movies");
  if (localMovies) return JSON.parse(localMovies);
  return movies.map((movie) => {
    return { ...movie, watchList: false, starred: false };
  });
};

export function MoviesProvider({ children }) {
  const [moviesList, setMoviesList] = useState(getMovies());
  const [searchFilter, setSearchFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("Rating");
  const [yearFilter, setYearFilter] = useState("Release Year");
  const [genreFilter, setGenreFilter] = useState("All Genres");

  const addToWatchList = (movieId) => {
    let tempMovies = moviesList;
    tempMovies = tempMovies.map((movie) => {
      if (movie.id === movieId) return { ...movie, watchList: true };
      return { ...movie };
    });
    localStorage.setItem("movies", JSON.stringify(tempMovies));
    setMoviesList(tempMovies);
  };

  const removeFromWatchList = (movieId) => {
    let tempMovies = moviesList;
    tempMovies = tempMovies.map((movie) => {
      if (movie.id === movieId) return { ...movie, watchList: false };
      return { ...movie };
    });
    localStorage.setItem("movies", JSON.stringify(tempMovies));
    setMoviesList(tempMovies);
  };

  const addToStarred = (movieId) => {
    let tempMovies = moviesList;
    tempMovies = tempMovies.map((movie) => {
      if (movie.id === movieId) return { ...movie, starred: true };
      return { ...movie };
    });
    localStorage.setItem("movies", JSON.stringify(tempMovies));
    setMoviesList(tempMovies);
  };
  

  const removeFromStarred = (movieId) => {
    let tempMovies = moviesList;
    tempMovies = tempMovies.map((movie) => {
      if (movie.id === movieId) return { ...movie, starred: false };
      return { ...movie };
    });
    localStorage.setItem("movies", JSON.stringify(tempMovies));
    setMoviesList(tempMovies);
  };

  return (
    <MoviesContext.Provider
      value={{
        moviesList,
        searchFilter,
        setSearchFilter,
        ratingFilter,
        setRatingFilter,
        yearFilter,
        setYearFilter,
        genreFilter,
        setGenreFilter,
        addToWatchList,
        removeFromWatchList,
        removeFromStarred,
        addToStarred,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}
