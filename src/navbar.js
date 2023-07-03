

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import './navbar.css';

function Navbars() {
  const location = useLocation();
  // const history = useHistory();

  // const handleNavClick = (path) => {
  //   history.push(path);
  // };

  return (
    <Navbar className="navbar"  expand="lg" variant="dark">
      <Container fluid>
       
        <Navbar.Toggle className="ml-auto" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            
            <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Nav.Link>
            {/* <Nav.Link
        onClick={() => handleNavClick('/')}
        className={history.location.pathname === '/' ? 'active' : ''}
      >
        Home
      </Nav.Link> */}
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


