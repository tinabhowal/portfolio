import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container">
    //     <Link className="navbar-brand" to="/">About Me</Link>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav ml-auto">
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/projects">Projects</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/contact">Contact</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>


     <nav>
        <ul>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> 
  );
}

export default Navbar;
