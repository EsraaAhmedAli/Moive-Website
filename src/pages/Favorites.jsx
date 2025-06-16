import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { removeFromFavorites } from '../redux/Slice/favoritesSlice';
import { FaTrash } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import '../styles/Favouirt.css';

const imgPath = "https://image.tmdb.org/t/p/w500/";

function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  const handleDelete = (movie) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to remove "${movie.title}" from your favorites?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFromFavorites(movie.id));
        Swal.fire('Deleted!', `"${movie.title}" has been removed.`, 'success');
      }
    });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{color:"white"}}>Your Favorite Movies</h2>
      {favorites.length === 0 ? (
        <p style={{color:"white"}}>No favorite movies yet.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {favorites.map((movie) => (
            <div key={movie.id} style={{
              width: '300px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#fff',
              position: 'relative',
              height:"500px"
            }}>
              <img
                src={movie.poster_path ? imgPath + movie.poster_path : 'https://via.placeholder.com/200x300?text=No+Image'}
                alt={movie.title}
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
              {/* Trash icon in corner */}
              <button
                onClick={() => handleDelete(movie)}
                style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1.1rem'
                }}
                title="Delete from favorites"
              >
                <FaTrash color='red' />
              </button>
              <div style={{ padding: '0.5rem' }}>
                <h4 style={{
                  margin: '0 0 0.5rem 0',
                  fontSize: '1rem',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis'
                }}>
                  {movie.title}
                </h4>
                

            
                        <p><strong>Release Date:</strong> {movie.release_date}</p>
                        <p>
                            <FaStar color="gold" style={{ marginLeft: '2px' }} />  {movie.vote_average}
                        <button
                onClick={() => handleDelete(movie)}
                style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1.1rem'
                }}
                title="Delete from favorites"
              >
                <FaTrash color='red' />
              </button>
                        </p>
              </div>

              <button class="btn"   onClick={() => handleDelete(movie)} style={{
                  position: 'absolute',
                  top: '420px',
                  right: '20px',
                  fontSize: '1.1rem'
                }}> Remove From Favouirt</button>
              
            </div>
            
            
          ))}
          
        </div>
        
      )}
      
    </div>
    
    
  );
}

export default Favorites;
