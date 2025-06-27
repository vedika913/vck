import {Link} from 'react-router-dom';
import "./Header.css";
import { useState } from 'react';
const Header = () => {
  const [ismobileMenuOpen, setIsMobileOpen] = useState(false)
  return(
      <>
        <header>
          <Link to="/" className="logo">
          Vivekanand college</Link>

          <button
          className="hamburger-menu"
          onClick={() => setIsMobileOpen(true)}
          >
            <span className="hamburger-icon"></span>
            <span className="hamburger-icon"></span>
            <span className="hamburger-icon"></span>
            </button>
            {ismobileMenuOpen ? (
              <>
              <div className="mobile-menus">
                <button
                className="close-button"
                onClick={() => setIsMobileOpen(false)}
                >
                  X
                  </button>

                  <ul>
                    <li>
                      <Link
                        to="/home"
                        className="link"
                        onClick={() => setIsMobileOpen(false)}
                        >
                          Home
                        </Link>
                        </li>
                        <li>
                      <Link
                        to="/about"
                        className="link"
                        onClick={() => setIsMobileOpen(false)}
                        >
                          About
                        </Link>
                        </li>
                        <li>
                      <Link
                        to="/courses"
                        className="link"
                        onClick={() => setIsMobileOpen(false)}
                        >
                          Courses
                        </Link>
                        </li>
                        <li>
                      <Link
                        to="/contact"
                        className="link"
                        onClick={() => setIsMobileOpen(false)}
                        >
                          Contact
                        </Link>
                        </li>
                        <li>
                      <Link
                        to="/addmission"
                        className="button"
                        onClick={() => setIsMobileOpen(false)}
                        >
                          Addmission
                        </Link>
                        </li>
                        </ul>
                </div>
                </>
            ) : (
            <div className="right">
            <nav>
                <Link to="/home" className="link">Home</Link>
                <Link to="/about" className="link">About</Link>
                <Link to="/courses" className="link">Courses</Link>
                <Link to="/contact" className="link">Contact</Link>
            </nav>
            <Link to={"/addmission"} className="button">Apply now</Link>
        </div>
            )}
        </header>
        </>
  )
}
export default Header;