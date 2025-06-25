import { useState } from 'react';
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
    <header className='sticky-top shadow-sm' style={{ backgroundColor: 'var(--primary)' }}>
      <nav className=" container navbar navbar-expand-md navbar-light container-fluid px-2">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <h5 className="mb-0 fw-bold " style={
            { color: 'var(--secondary)' }
          }>Glocalship</h5>
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

        <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} id="navbarNav" >

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3 text-center" >
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
              <Link className="nav-link" to="">
                <span><i class="fa-solid fa-user "></i>
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
