import React, { useContext } from 'react'
import { MoviesContext } from '../../contexts/MoviesContext'
import MoviesCard from '../../components/movies-card/MoviesCard'

const StarredMovies = () => {  
  const {moviesList}=useContext(MoviesContext)  
  const starredMovies=moviesList.filter(movie=>movie.starred===true)
  return (
    <div className='content'>
        {starredMovies.map(movie=>{
            return (
                <MoviesCard movie={movie} key={movie.id}/>
            )
        })}
    </div>
  )
}

export default StarredMovies