import React, { useContext } from 'react'
import './MoviesCard.css'
import { MoviesContext } from '../../contexts/MoviesContext'
import { Link, useLocation, useNavigate } from 'react-router-dom'
const MoviesCard = ({movie:{imageURL,summary,title,id,watchList,starred}}) => {
  const location=useLocation() ;
  const navigate=useNavigate() 
  const{addToWatchList,removeFromWatchList,removeFromStarred,addToStarred}=useContext(MoviesContext)
  const handleWatchList=(e)=>{
    e.stopPropagation()
    if(watchList)
       return removeFromWatchList(id)
    return addToWatchList(id)   
  }

  const handleStarred=(e)=>{
    e.stopPropagation()
    if(starred)
       return removeFromStarred(id)
    return addToStarred(id)   
  }

  const handleCardClick=()=>{
      navigate(`/movies/${id}`)
  }

  return (
        <div className='card' onClick={handleCardClick}>
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