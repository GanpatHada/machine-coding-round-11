import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Movies from './pages/movies/Movies';
import WatchList from './pages/watch-list/WatchList';
import StarredMovies from './pages/starred-movies/StarredMovies';
import AddMovie from './components/add-movie/AddMovie';
import { useContext } from 'react';
import MoviesCard from './components/movies-card/MoviesCard';
import { MoviesContext } from './contexts/MoviesContext';
import MovieDetails from './pages/movie-details/MovieDetails';

function App() {
  const{addMovieModal}=useContext(MoviesContext)
  return (
    <div className="App">
       <Navbar/>
       {addMovieModal&&<AddMovie/>}
       <main>
       <Routes>
          <Route exact path='/' element={<Movies/>}/>
          <Route exact path='/watchList' element={<WatchList/>}/>
          <Route exact path='/starredMovies' element={<StarredMovies/>}/>
          <Route exact path='/movies/:movieId' element={<MovieDetails/>}/>
       </Routes>
       </main>  
    </div>
  );
}

export default App;
