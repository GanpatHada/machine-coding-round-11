import React, { useContext } from 'react'
import './MoviesCard.css'
import { MoviesContext } from '../../contexts/MoviesContext'
import { useLocation } from 'react-router-dom'
const MoviesCard = ({movie:{imageURL,summary,title,id,watchList,starred}}) => {
  const location=useLocation()  
  const{addToWatchList,removeFromWatchList,removeFromStarred,addToStarred}=useContext(MoviesContext)
  const handleWatchList=()=>{
    if(watchList)
       return removeFromWatchList(id)
    return addToWatchList(id)   
  }

  const handleStarred=()=>{
    if(starred)
       return removeFromStarred(id)
    return addToStarred(id)   
  }

  return (
    <div className='card'>
        <section className="image-section">
            <img src={imageURL} alt="..." />
        </section>
        <section className="info">
            <h3>{title}</h3>
            <p>{summary}</p>
        </section>
        <section className="button-section">
            {location.pathname!=='/watchList'&&<button className={starred?'secondary-btn':"primary-btn"} onClick={handleStarred}>{starred?'unstar':'star'}</button>}
            {location.pathname!=='/starredMovies'&&<button className={watchList?'secondary-btn':"primary-btn"} onClick={handleWatchList}>{watchList?'Remove from WatchList':'Add to WatchList'}</button>}
        </section>
    </div>
  )
}

export default MoviesCard