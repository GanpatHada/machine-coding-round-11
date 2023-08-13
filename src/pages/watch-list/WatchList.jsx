import React, { useContext } from 'react'
import { MoviesContext } from '../../contexts/MoviesContext'
import MoviesCard from '../../components/movies-card/MoviesCard'

const WatchList = () => {
  const{moviesList}=useContext(MoviesContext)  
  const watchListMovies=moviesList.filter(movie=>movie.watchList===true)
  return (
    <div id='watch-list' className='content'>
    {
        watchListMovies.map(movie=>{
            return(
                <MoviesCard movie={movie} key={movie.id}/>
            )
        })
    }
    </div>
  )
}

export default WatchList