import React, { useContext } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { MoviesContext } from '../../contexts/MoviesContext'
const Navbar = () => {
   const{setSearchFilter,searchFilter}=useContext(MoviesContext) 
  return (
    <nav>
        <h2>IMDB</h2>
        <div id="search-box" className='all-centered'>
            <input type="search" value={searchFilter} placeholder='search by title,cast or director' onChange={(e)=>setSearchFilter(e.target.value)} />
        </div>
        <div className="navs">
            <ul className='all-centered'>
                <li className="nav"><NavLink to='/'>Movies</NavLink></li>
                <li className="nav"><NavLink to='/watchList'>Watch List</NavLink></li>
                <li className="nav"><NavLink to='/starredMovies'>Starred Movies</NavLink></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar