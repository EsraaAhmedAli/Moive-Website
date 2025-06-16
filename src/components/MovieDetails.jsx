import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../redux/Slice/favoritesSlice';
import { FaStar } from 'react-icons/fa';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const imgPath = "https://image.tmdb.org/t/p/w500/";

function MovieDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies.items);
  const favorites = useSelector((state) => state.favorites.items);

  const movie = movies.find((m) => m.id.toString() === id);

  if (!movie) return <p>Loading or Movie not found...</p>;

  const isFav = favorites.some((fav) => fav.id === movie.id);

  const toggleFavorite = () => {
    if (isFav) {
      dispatch(removeFromFavorites(movie.id));
    } else {
      dispatch(addToFavorites(movie));
    }
  };

  return (
    <div style={styles.container}>
      <img
        src={movie.poster_path ? imgPath + movie.poster_path : 'https://via.placeholder.com/300x450?text=No+Image'}
        alt={movie.title}
        style={styles.image}
      />
      <div style={styles.details}>
        <div style={styles.header}>
          <h1 style={{ margin: 0 }}>{movie.title}</h1>
          <span onClick={toggleFavorite} style={styles.heartIcon}>
            {isFav ? <FaHeart color="red" size={24} /> : <FaRegHeart size={24} />}
          </span>
        </div>
        <p><strong>Overview:</strong> {movie.overview}</p>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p>
          <strong>Rating:</strong>  <FaStar color="gold" style={{ marginLeft: '2px' }} />  {movie.vote_average}


        </p>

      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    gap: '2rem',
    padding: '2rem',
    border: '1px solid #ccc',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#fefefe',
    maxWidth: '900px',
    margin: '2rem auto'
  },
  image: {
    width: '300px',
    borderRadius: '10px',
    objectFit: 'cover'
  },
  details: {
    flex: 1
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  heartIcon: {
    cursor: 'pointer'
  }
};

export default MovieDetails;
