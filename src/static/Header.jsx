import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';

function Header() {
  const user = auth.currentUser;
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [showHeader, setShowHeader] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  const handleLogout = () => {
    signOut(auth);
  };

  const toggleNavbar = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  useEffect(() => {
    let timeoutId = null;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Smoothly check scroll difference
      if (Math.abs(currentScrollPos - prevScrollPos) > 10) {
        if (currentScrollPos < prevScrollPos) {
          setShowHeader(true);
        } else {
          setShowHeader(false);
        }
        setPrevScrollPos(currentScrollPos);
      }

      // Debounce: Clear previous timeout and set new one
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setPrevScrollPos(window.scrollY);
      }, 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`custom-header shadow-sm ${showHeader ? 'show' : 'hide'}`}
    >
      <nav className="container navbar navbar-expand-md navbar-light container-fluid px-2">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <h5 className="mb-0 fw-bold">
            Glocalship
          </h5>
        </Link>


        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          {isNavCollapsed ? (
            <span className="navbar-toggler-icon"></span>
          ) : (
            <i className="fa-solid fa-xmark fs-2 text-white"></i>
          )}
        </button>


        <div
          className={` toggleCollapse navbar-collapse ${!isNavCollapsed ? 'show' : ''
            }`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">
            <li className="nav-item">
              <Link className="nav-link" to="">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="">Book Parcel</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="">Track Parcel</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="">Contect</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="">
                <span>
                  <i className="fa-solid fa-user"></i>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
