import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import zapauraLogo from "./brandLogo.png"
import './styleNavbar.css'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      
      <div className="container-fluid">

        <a className="navbar-brand" href='https://zapaura.com'>
          {/* <img src={zapauraLogo} alt="Zapaura Logo" width="30" height="24" /> */}
          Zapaura Immersive World
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://app.zapaura.com">Sign in</a>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="Home">Contact Us</a> */}
            </li>
            <li className="nav-item">
              <a className="btn btn-orange" href="https://app.zapaura.com/studio">Create</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
