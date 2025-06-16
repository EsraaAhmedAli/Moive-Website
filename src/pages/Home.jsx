import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/Slice/moviesSlice';
import MovieCard from '../components/MovieCard';
import ImageSlider from '../components/ImageSlider';
import Footer from '../components/Footer';

export default function Home() {
  const dispatch = useDispatch();
  const { items: movies, status, error } = useSelector((state) => state.movies);
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMovies());
    }
  }, [dispatch, status]);


  const filteredMovies = movies?.filter((movie) =>
    movie.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <ImageSlider />
      <h1 style={{ margin: "2em", textAlign: "center", color: "white" }}> Most viewed movies </h1>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <input 
       
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '100%',
            maxWidth: '1250px',
            background:"rgb(20, 23, 27)" ,
            color:"wheat"
          }}
        />
      </div>

      {status === 'loading' && <p style={{ textAlign: 'center' }}>Loading movies...</p>}
      {status === 'failed' && <p style={{ textAlign: 'center', color: 'red' }}>Error: {error}</p>}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
        {status === 'succeeded' && filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          status === 'succeeded' && <p style={{ color: 'white' }}>No movies found  </p>
        )}
      </div>
     
    </>
  );
}
