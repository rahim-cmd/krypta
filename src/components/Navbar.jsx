import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Menu.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const isActive = (path) => (location.pathname === path ? "active" : "");

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="ttm-header-wrap">
        <div
          id="ttm-stickable-header-w"
          className="ttm-stickable-header-w clearfix"
        >
          <div id="site-header-menu" className="site-header-menu">
            <div className="site-header-menu-inner ttm-stickable-header">
              <div className="container">
                {/* LOGO */}
                <div className="site-branding">
                  <Link className="home-link" to="/" onClick={closeMenu}>
                    <img
                      id="logo-img"
                      className="img-center"
                      src="/images/krypta.png"
                      alt="logo"
                    />
                  </Link>
                </div>

                {/* NAVIGATION */}
                <div id="site-navigation" className="site-navigation">
                  {/* MOBILE TOGGLE */}
                  <div
                    className={`ttm-menu-toggle ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    <span className="toggle-block toggle-blocks-1"></span>
                    <span className="toggle-block toggle-blocks-2"></span>
                    <span className="toggle-block toggle-blocks-3"></span>
                  </div>

                  {/* MENU */}
                  <nav id="menu" className={`menu ${menuOpen ? "active" : ""}`}>
                    <ul className="dropdown">
                      <li className={`nav-item nav-link ${isActive("/")}`}>
                        <Link to="/" onClick={closeMenu}>
                          Home
                        </Link>
                      </li>

                      <li className={`nav-item nav-link ${isActive("/about")}`}>
<<<<<<< HEAD
                        <Link to="/about" onClick={closeMenu}>
=======
                        <Link
                          to="/about"
                          onClick={closeMenu}
                          
                        >
>>>>>>> 837dc6680516993f74a836c49866aa4dff527348
                          About Us
                        </Link>
                      </li>

<<<<<<< HEAD
                      <li
                        className={`nav-item nav-link ${isActive("/contact")}`}
                      >
                        <Link to="/contact" onClick={closeMenu}>
=======
                      <li className={`nav-item nav-link ${isActive("/contact")}`}>
                        <Link
                          to="/contact"
                          onClick={closeMenu}
                          
                        >
>>>>>>> 837dc6680516993f74a836c49866aa4dff527348
                          Contact Us
                        </Link>
                      </li>

<<<<<<< HEAD
                      <li
                        className={`nav-item nav-link ${isActive("/services")}`}
                      >
                        <Link to="/services" onClick={closeMenu}>
                          Services
                        </Link>
=======
                      <li className={`nav-item nav-link ${isActive("/services")}`}>
                        <Link to="/services" onClick={closeMenu}>Services</Link>
                        
>>>>>>> 837dc6680516993f74a836c49866aa4dff527348
                      </li>

                      <li>
                        <Link to="tel:+91-9763406746" onClick={closeMenu}>
                          Call Now
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
