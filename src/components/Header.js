import React from 'react';
import Link from 'gatsby-link';
import logo from '../../public/img/logo.png';

const Header = () => (
  <React.Fragment>
    <nav className="navbar-expand-md navbar-light bg-light">
      <div className="container d-flex justify-content-start">
        <div>
          <Link className="navbar-brand">
            <img src={logo} className="img-fluid img-ca" />
          </Link>
        </div>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item py-3 px-4 ">
              <Link to="/" className="nav-link ">
                Home
              </Link>
            </li>
            <li className="nav-item py-3 px-4 ">
              <Link to="/" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item py-3 px-4 ">
              <Link to="/" className="nav-link">
                Our Staff
              </Link>
            </li>
            <li className="nav-item py-3 px-4 ">
              <Link to="/" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </React.Fragment>
);

export default Header;
