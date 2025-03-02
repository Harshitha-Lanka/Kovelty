import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'; // Use NavLink for active styling
import KovaltyLogo from '../assets/images/Kovalty.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile navbar toggle
  const [isServicesOpen, setIsServicesOpen] = useState(false); // State for Services dropdown

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bord main-bg">
      <div className="container">
        {/* Logo */}
        <Link className="logo icon-img-100" to="/">
          <img src={KovaltyLogo} alt="logo" />
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        {/* Navbar Links */}
        <div
          className={`collapse navbar-collapse justify-content-center ${isOpen ? 'show' : ''}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            {/* Home Link */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/" exact activeClassName="active">
                <span className="rolling-text">Home</span>
              </NavLink>
            </li>

            {/* Services Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#services"
                onClick={toggleServicesDropdown}
                aria-expanded={isServicesOpen}
                aria-controls="services-dropdown"
              >
                <span className="rolling-text">Services</span>
              </a>
              <div
                className={`dropdown-menu ${isServicesOpen ? 'show' : ''}`}
                id="services-dropdown"
              >
                <Link className="dropdown-item" to="/app-development">
                  Application Development
                </Link>
                <Link className="dropdown-item" to="/mobile-development">
                  Mobile App Development
                </Link>
                <Link className="dropdown-item" to="/product-management">
                  Product Management
                </Link>
                <Link className="dropdown-item" to="/qa-and-automation">
                  QA & Automation
                </Link>
                <Link className="dropdown-item" to="/cloud-services">
                  Cloud Services
                </Link>
                <Link className="dropdown-item" to="/ai-and-ml">
                  AI & ML
                </Link>
              </div>
            </li>

            {/* About Us Link */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" activeClassName="active">
                <span className="rolling-text">About us</span>
              </NavLink>
            </li>

            {/* Contact Link */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" activeClassName="active">
                <span className="rolling-text">Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;