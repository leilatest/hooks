import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';
function App() {
  const [search, setSearch]= useState("");
    const [rating, setRating] = useState(0);

  return (
    <div className="App">
      <NavBar setSearch={setSearch} rating={rating} setRating={setRating} />
      <MovieList search={search} rating={rating} />
    </div>
  );
}

export default App;
