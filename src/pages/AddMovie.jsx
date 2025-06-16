import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../redux/Slice/moviesSlice';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import "../styles/Favouirt.css";
const AddMovie = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [poster, setPoster] = useState('');
  const [releaseDate, setReleaseDate] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMovie = {
      title,
      poster_path: poster,
      release_date: releaseDate,
    };
    console.log("Adding movie:", newMovie);

    try {
      await dispatch(addMovie(newMovie)).unwrap();
      setTitle('');
      setPoster('');
      setReleaseDate('');
      Swal.fire({
      position: "center",
      icon: "success",
      title: " Movies added Successfully",
      showConfirmButton: false,
      timer: 1500

    });
      navigate("/");
    } catch (error) {
      alert('Failed to add movie');

      console.error(error);
    }
  };

  const handleclick = () => {
    // Swal.fire({
    //   position: "center",
    //   icon: "success",
    //   title: "Your Movies added",
    //   showConfirmButton: false,
    //   timer: 1500

    // });
   

  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mb-4 text-center" style={{ color: "white" }}>Add Moive</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
              <Form.Label style={{ color: "white" }}> Title : </Form.Label>
              <Form.Control
                type="text"
                placeholder="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label style={{ color: "white" }}>Poster URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Poster URL"
                value={poster}
                onChange={e => setPoster(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label style={{ color: "white" }}>Release Date</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="Release Date"
                value={releaseDate}
                onChange={e => setReleaseDate(e.target.value)}
                required
              />
            </Form.Group>

            {/* <Button variant="primary" type="submit" className="w-100">
                            Send Message
                        </Button> */}


            <button className="btn" type="submit" style={{ width: "100%" }} onClick={handleclick} > Add Moive 

            </button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddMovie;
