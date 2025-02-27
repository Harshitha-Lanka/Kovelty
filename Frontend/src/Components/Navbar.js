import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bord main-bg">
      <div className="container">
        <a className="logo icon-img-100" href="/">
          <img src="assets/imgs/Kovalty.png" alt="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar"><i className="fas fa-bars"></i></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/services" data-toggle="dropdown">Services</a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/app-development">Application Development</a>
                <a className="dropdown-item" href="/mobile-development">Mobile App Development</a>
                <a className="dropdown-item" href="/product-management">Product Management</a>
                <a className="dropdown-item" href="/qa-and-automation">QA & Automation</a>
                <a className="dropdown-item" href="/cloud-services">Cloud Services</a>
                <a className="dropdown-item" href="/ai-and-ml">AI & ML</a>
              </div>
            </li>
            <li className="nav-item"><a className="nav-link" href="/about">About us</a></li>
            <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
