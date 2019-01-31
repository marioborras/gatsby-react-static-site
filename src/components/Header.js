import React from 'react';
import Link from 'gatsby-link';
import logo from '../img/logo.png';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <Link className="navbar-brand" to="/">
        <img src={logo} className="img-ca" alt="logo" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active pr-5">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item pr-5">
            <Link className="nav-link" to="/">
              About
            </Link>
          </li>
          <li className="nav-item pr-5">
            <Link className="nav-link" to="/">
              Classrooms
            </Link>
          </li>
          <li className="nav-item pr-5">
            <Link className="nav-link" to="/">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
