import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Movies from './pages/movies/Movies';
import WatchList from './pages/watch-list/WatchList';
import StarredMovies from './pages/starred-movies/StarredMovies';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <main>
       <Routes>
          <Route exact path='/' element={<Movies/>}/>
          <Route exact path='/watchList' element={<WatchList/>}/>
          <Route exact path='/starredMovies' element={<StarredMovies/>}/>
       </Routes>
       </main>  
    </div>
  );
}

export default App;
