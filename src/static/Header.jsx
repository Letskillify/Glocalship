import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';


const Header=()=> {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [showHeader, setShowHeader] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const prevScrollPos = useRef(window.scrollY);

  const handleLogout = () => {
    signOut(auth);
  };

  const toggleNavbar = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (Math.abs(currentScrollPos - prevScrollPos.current) > 10) {
        setShowHeader(currentScrollPos < prevScrollPos.current);
        prevScrollPos.current = currentScrollPos;
      }
      setIsScrolled(currentScrollPos > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="sub-header py-2 px-3 d-flex justify-content-between align-items-center">
        <div className="left-links d-flex gap-3 ms-5">
          <Link to="/" className="sub-link">Support</Link>
          <Link to="/" className="sub-link">Help</Link>
        </div>
        <div className="right-links d-flex gap-3 me-5">
          <Link to="/signup" className="sub-link">Sign Up</Link>
        </div>
      </div>

      <header className={`custom-header shadow-sm ${showHeader ? 'show' : 'hide'} ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="container navbar navbar-expand-md px-2">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <h5 className="mb-0 fw-bold">Glocalship</h5>
          </Link>

          <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
            {isNavCollapsed ? (
              <span className="navbar-toggler-icon"></span>
            ) : (
              <i className="fa-solid fa-xmark fs-2 text-white"></i>
            )}
          </button>

          <div className={`toggleCollapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">
              <li><form><input className="SearchBar" type="text" placeholder="Search our Product" value={search} onChange={handleChange} /></form></li>
              <li className="nav-item"><Link className="nav-link" to="">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="">Services</Link></li>
              <li className="nav-item"><Link className="nav-link" to="">Contact</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/track">Track Parcel</Link></li>
              <li className="nav-item"><Link className="nav-link" to="">Cart</Link></li>
              <li className="nav-item"><Link className="nav-link" to=""><i className="fa-solid fa-user"></i></Link></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;  