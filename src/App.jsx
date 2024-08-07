import { useState, useEffect } from 'react';
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';

export default function App() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    const data = await response.json();
    setMovie(data);
  };

  useEffect(() => {
    getMovie('Clueless');
  }, []);

  return (
    <div className='App'>
      <Form movieSearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}
