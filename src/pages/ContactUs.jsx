import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import "../styles/Favouirt.css";
const ContactUs = () => {
     const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
    };

    const handleclick = ()=>{
    Swal.fire({
  position: "center",
  icon: "success",
  title: "Your message has been sent!",
  showConfirmButton: false,
  timer: 1500
 
});
 navigate("/");

    }

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <h2 className="mb-4 text-center" style={{color:"white"}}>Contact Us</h2>
                    {submitted && <Alert variant="success">Your message has been sent!</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label style={{color:"white"}}>Your Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label style={{color:"white"}}>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formMessage">
                            <Form.Label style={{color:"white"}}>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="message"
                                rows={4}
                                placeholder="Type your message..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        {/* <Button variant="primary" type="submit" className="w-100">
                            Send Message
                        </Button> */}


                         <button class="btn"  type="submit"  style={{width:"100%"}} onClick={handleclick} >  Send Message 
                            
                         </button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactUs;
