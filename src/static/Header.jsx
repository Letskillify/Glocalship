import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';

function Header() {
  const user = auth.currentUser;
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleLogout = () => {
    signOut(auth);
  };

  const toggleNavbar = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <header className="sticky-top shadow-sm bg-white ">
      <nav className=" container navbar navbar-expand-md navbar-light container-fluid px-2">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="/assets/img/logo.webp" alt="Logo" height="40" className="me-2" />
          <h5 className="mb-0 fw-bold">Scout</h5>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} id="navbarNav">
          <div></div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3 text-center">
            <li className="nav-item">
              <a className="nav-link" href="#hero">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/parcel">Book Parcel</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/track">Track Parcel</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bookings">My Bookings</Link>
            </li>
            <li className="nav-item">
             
              <button onClick={handleLogout} className="btn btn-danger btn-sm mt-2 mt-lg-2">
                Logout
              </button>
            </li>
          </ul>
        </div>

      </nav>
    </header>
  );
}

export default Header;
