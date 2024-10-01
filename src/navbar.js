import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './navbar.css';

function Navbars() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if(offset > 50) {
        setScrolled(true);
      }else{
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
  },[])

  const handleNavClick = (path) => {
    navigate(path);
  };

  return (
    <Navbar className={`navbar ${scrolled ? 'scrolled' : ''}`} expand="lg" variant="dark">
      <Container fluid className='navC' >
      <Navbar.Brand as={Link} to="/" onClick={() => handleNavClick('/')} className="name">
         <h1 className='navTitle'>Tina Bhawal</h1>
        </Navbar.Brand>
        <Navbar.Toggle className="ml-auto" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => handleNavClick('/')}
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/projects"
              onClick={() => handleNavClick('/projects')}
              className={location.pathname === '/projects' ? 'active' : ''}
            >
              Projects
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/contact"
              onClick={() => handleNavClick('/contact')}
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </Nav.Link>

            {/* <Nav.Link
              as={Link}
              to="/funfacts"
              onClick={() => handleNavClick('/funfacts')}
              className={location.pathname === '/funfacts' ? 'active' : ''}
              >
                Doodles
              </Nav.Link> */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;






