import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateMovie, fetchMovies } from '../redux/Slice/moviesSlice';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import "../styles/Favouirt.css";

const EditMovie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movies = useSelector(state => state.movies.items);
  const movie = movies.find(m => m.id.toString() === id); 

  const [title, setTitle] = useState('');
  const [poster, setPoster] = useState('');
  const [releaseDate, setReleaseDate] = useState('');

  useEffect(() => {
    if (!movies.length) {
      dispatch(fetchMovies());
    }
  }, [dispatch, movies.length]);

  useEffect(() => {
    if (movie) {
      setTitle(movie.title || '');
      setPoster(movie.poster_path || '');
      setReleaseDate(movie.release_date || '');
    }
  }, [movie]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedMovie = {
      id,
      title,
      poster_path: poster,
      release_date: releaseDate,
    };

    try {
      await dispatch(updateMovie(updatedMovie)).unwrap();
      Swal.fire('Success', 'Movie updated successfully!', 'success');
      navigate('/');
    } catch (err) {
      Swal.fire('Error', 'Update failed.', 'error');
      console.error(err);
    }
  };

  if (!movie) return <p>Movie not found.</p>;
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mb-4 text-center" style={{ color: "white" }}>Edit Movie</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "white" }}>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ color: "white" }}>Poster URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Poster URL"
                value={poster}
                onChange={e => setPoster(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ color: "white" }}>Release Date</Form.Label>
              <Form.Control
                type="text"
                placeholder="Release Date"
                value={releaseDate}
                onChange={e => setReleaseDate(e.target.value)}
                required
              />
            </Form.Group>

            <Button type="submit" className="w-100" variant="primary">
              Update Movie
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditMovie;
