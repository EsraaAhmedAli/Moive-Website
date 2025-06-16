import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../redux/Slice/favoritesSlice';
import { FaHeart, FaRegHeart, FaTrash, FaStar, FaEllipsisV } from 'react-icons/fa';
import { useState } from 'react';
import { RiPencilFill } from "react-icons/ri";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router";
import { deleteMovie } from '../redux/Slice/moviesSlice';
import '../styles/moivecard.css';

const imgPath = "https://image.tmdb.org/t/p/w500/";

function MovieCard({ movie, showDelete = false }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.some((fav) => fav.id === movie.id);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  if (!movie) return null;

  const toggleFavorite = (e) => {
    e.preventDefault();
    isFavorite
      ? dispatch(removeFromFavorites(movie.id))
      : dispatch(addToFavorites(movie));
  };



  const toggleMenu = (e) => {
    e.preventDefault();
    setShowMenu((prev) => !prev);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete "${movie.title}" from all movies?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteMovie(movie.id));
        dispatch(removeFromFavorites(movie.id));

        Swal.fire('Deleted!', `"${movie.title}" has been deleted.`, 'success');
      }
    });
  };

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card-link">
      <div className="movie-card">
        <img
          src={movie.poster_path ? imgPath + movie.poster_path : 'https://via.placeholder.com/200x300?text=No+Image'}
          alt={movie.title || 'Movie'}
        />
        <div className="movie-card-content">
          <div className="movie-card-header">
            <div style={{ position: 'relative', marginLeft: '8px' }}>
              <button onClick={toggleMenu} className="menu-button">
                <FaEllipsisV />
              </button>

              {showMenu && (
                <div className="menu">
                  <button className="menu-item" onClick={(e) => {
                    e.preventDefault();
                    navigate("/addmovie");
                  }}>
                    <IoIosAddCircleOutline size={16} />
                    <span>Add</span>
                  </button>
                  <button className="menu-item" onClick={(e) => {
                    e.preventDefault();
                    navigate(`/edit/${movie.id}`);

                  }}>
                    <RiPencilFill size={16} color='green' />
                    <span>Edit</span>
                  </button>
                  <button className="menu-item" onClick={handleDelete}>
                    <FaTrash size={16} color='red' />
                    <span>Delete</span>
                  </button>
                </div>
              )}
            </div>

            <h4 className="movie-card-title">{movie.title || 'No Title'}</h4>
          </div>

          <div className="movie-card-footer">
            <p>
              <FaStar color="gold" size={20} style={{ marginLeft: '2px' }} /> {movie.vote_average || 'N/A'}
            </p>
            <button onClick={toggleFavorite} className="favorite-button">
              {isFavorite ? <FaHeart color="red" size={22} /> : <FaRegHeart color="gray" size={22} />}
            </button>
          </div>
        </div>
      </div>
    </Link>

  );
}

export default MovieCard;
