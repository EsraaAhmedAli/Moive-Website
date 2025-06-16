import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../assets/images/icon.png';

function Navmain() {
  const favoriteCount = useSelector((state) => state.favorites.items.length);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
          <span className="ms-2">Festival Movies</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/addmovie">Add Moive </Nav.Link>


            <Nav.Link as={Link} to="/favorites">
              ❤️ Favorites
              {favoriteCount > 0 && (
                <span style={{ marginLeft: '7px', color: 'yellow' }}>
                  ( {favoriteCount} )
                </span>
              )}
            </Nav.Link>

            {/* <NavDropdown title="More" id="nav-dropdown">
              <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
              <NavDropdown.Item href="#help">Help</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navmain;
