import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';
import Home from './Home';
import { Routes, Route} from 'react-router-dom'; 
import Layout from './components/Layout';
import PublicLayout from './PublicLayout';
import Login from "./Login"
import Register from './Register';
import MoviesDetails from './MoviesDetails';
import PrivateRoute  from './components/PrivateRoute';


function App() {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              setSearch={setSearch}
              rating={rating}
              setRating={setRating}
            />
          }
        >
          <Route index element={<Home />} />
          <Route
            path="movies"
            element={
              <PrivateRoute>
                <MovieList search={search} rating={rating} />
              </PrivateRoute>
             }
          />
          <Route path="movie/:title" element={<MoviesDetails />} />
        </Route>
        <Route path="/" element={<PublicLayout />}>
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
