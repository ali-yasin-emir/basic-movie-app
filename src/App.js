import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard.jsx';
const App = () => {
  // API_KEY = c06e2dce

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // const movie1 = movies[0];

  const searchMovies = async (title) => {
    const API_URL = `https://www.omdbapi.com/?s=${title}&apikey=c06e2dce`;
    const response = await fetch(API_URL);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies('spiderman');
  }, []);

  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='container'>
        <div className='search'>
          <input
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            value={searchTerm}
            placeholder='Search for movies'
          ></input>
          <img
            onClick={() => {
              searchMovies(searchTerm);
            }}
            src={SearchIcon}
            alt='search'
          ></img>
        </div>
      </div>
      {movies?.length > 0 ? (
        <div className='container'>
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
