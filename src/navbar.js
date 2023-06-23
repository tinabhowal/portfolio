

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

function Navbars() {
  const location = useLocation();

  return (
    <Navbar className="navbar"  expand="lg" variant="dark">
      <Container fluid>
        {/* <Navbar.Brand href="/">Tina Bhawal</Navbar.Brand> */}
        <Navbar.Toggle className="ml-auto" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link> */}
            <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;


