import React, { useContext } from "react";
import "./MovieDetails.css";
import { MoviesContext } from "../../contexts/MoviesContext";
import { useParams } from "react-router-dom";
const MovieDetails = () => {
  const {
    addToWatchList,
    moviesList,
    removeFromWatchList,
    removeFromStarred,
    addToStarred,
  } = useContext(MoviesContext);
  const { movieId } = useParams();

  const currentMovie = moviesList.find(
    (movie) => movie.id.toString() === movieId
  );

  const {
    id,
    imageURL,
    title,
    summary,
    year,
    genre,
    rating,
    director,
    writer,
    cast,
    starred,
    watchList,
  } = currentMovie;

  const handleWatchList = (e) => {
    e.stopPropagation();
    if (watchList) return removeFromWatchList(id);
    return addToWatchList(id);
  };

  const handleStarred = (e) => {
    e.stopPropagation();
    if (starred) return removeFromStarred(id);
    return addToStarred(id);
  };

 
  return (
    <div id="movie-details" className="all-centered">
      <div id="movie-details-content">
        <section id="image-section">
          <img src={imageURL} alt="" />
        </section>
        <section id="info-section">
          <div>
            <h2>{title}</h2>
            <p>{summary}</p>
          </div>
          <p>Year : {year}</p>
          <p>Genre : {genre}</p>
          <p>Rating : {rating}</p>
          <p>Director : {director}</p>
          <p>Writer : {writer}</p>
          <p>Cast : {cast.join(" , ")}</p>
          <section className="button-section">
            {
              <button
                className={starred ? "secondary-btn" : "primary-btn"}
                onClick={handleStarred}
              >
                {starred ? "unstar" : "star"}
              </button>
            }
            {
              <button
                className={watchList ? "secondary-btn" : "primary-btn"}
                onClick={handleWatchList}
              >
                {watchList ? "Remove from WatchList" : "Add to WatchList"}
              </button>
            }
          </section>
        </section>
      </div>
    </div>
  );
};

export default MovieDetails;
