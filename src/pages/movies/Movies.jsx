import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/MoviesContext";
import './Movies.css'
import MoviesCard from "../../components/movies-card/MoviesCard";
const Movies = () => {
  const { moviesList,searchFilter,ratingFilter,setRatingFilter,yearFilter,setYearFilter,genreFilter,setGenreFilter} = useContext(MoviesContext);


  const getMovies=()=>{
      let movies=moviesList;
      movies=movies.filter(({title,cast,director})=>{
        return (title.toLowerCase().includes(searchFilter.toLowerCase())||
        director.toLowerCase().includes(searchFilter.toLowerCase())||
        cast.join(' ').toLowerCase().includes(searchFilter.toLowerCase()))
         
      })
      if(ratingFilter!=='Rating')
      {
        movies=movies.filter(({rating})=>rating===Number(ratingFilter))
      }
      if(yearFilter!=='Release Year')
      {
        movies=movies.filter(({year})=>year===Number(yearFilter))
      }
      if(genreFilter!=='All Genres')
      {
        movies=movies.filter(({genre})=>genre.includes(genreFilter))
      }
       
      return movies
  }


  const getGenres = () => {
    const allGenres = moviesList.flatMap(({ genre }) => {
      return genre;
    });
    return ["All Genres", ...new Set(allGenres)];
  };
  const getyears = () => {
    let years = [];
    for (let y = 1990; y <= 2023; y++) years.push(y);
    return ['Release Year',...years];
  };

  const getRating = () => {
    return ["Rating", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  };
  return (
    <div id="movies">
      <header>
        <h3>Movies</h3>
      <select value={genreFilter} onChange={e=>setGenreFilter(e.target.value)}>
        {getGenres().map((genre, index) => {
          return <option key={index}>{genre}</option>;
        })}
      </select>
      <select value={yearFilter} onChange={(e)=>setYearFilter(e.target.value)}>
        {getyears().map((year, index) => {
          return <option key={index}>{year}</option>;
        })}
      </select>
      <select value={ratingFilter} onChange={(e)=>setRatingFilter(e.target.value)}>
        {getRating().map((rating, index) => {
          return <option key={index}>{rating}</option>;
        })}
      </select>
      <button className="primary-btn">Add a Movie</button>
      </header>
      <main>
        {getMovies().map(movie=>{
            return(
                <MoviesCard key={movie.id} movie={movie} />
            )
        })}
      </main>
    </div>
  );
};

export default Movies;
