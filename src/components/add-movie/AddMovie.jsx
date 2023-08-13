import React, { useContext, useState } from 'react'
import './AddMovie.css'
import { MoviesContext } from '../../contexts/MoviesContext'
const AddMovie = () => {
  const{addMovieModal,setAddMovieModal}=useContext(MoviesContext) 
   
  const [newMovie,setNewMovie]=useState()
   
  return (
    <div id='add-movie' className='all-centered' onClick={()=>setAddMovieModal(false)}>
        <div id="add-movie-content" onClick={e=>e.stopPropagation()}>
            <h2>Add Movie</h2>
        </div>
    </div>
  )
}

export default AddMovie