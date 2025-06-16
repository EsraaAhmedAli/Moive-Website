import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Festival Movies</h5>
            <p>© {new Date().getFullYear()} All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <a href="#privacy" className="text-white me-3">Privacy Policy</a>
            <a href="#terms" className="text-white">Terms of Service</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
