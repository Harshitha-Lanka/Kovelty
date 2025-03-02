// import React, { useState } from 'react';
// import { Link, NavLink } from 'react-router-dom'; // Use NavLink for active styling
// import KovaltyLogo from '../assets/images/Kovalty.png';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false); // State for mobile navbar toggle
//   const [isServicesOpen, setIsServicesOpen] = useState(false); // State for Services dropdown

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleServicesDropdown = () => {
//     setIsServicesOpen(!isServicesOpen);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg bord main-bg">
//       <div className="container">
//         {/* Logo */}
//         <Link className="logo icon-img-100" to="/">
//           <img src={KovaltyLogo} alt="logo" />
//         </Link>

//         {/* Mobile Toggle Button */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           onClick={toggleNavbar}
//           aria-label="Toggle navigation"
//         >
//           <span className="icon-bar">
//             <i className="fas fa-bars"></i>
//           </span>
//         </button>

//         {/* Navbar Links */}
//         <div
//           className={`collapse navbar-collapse justify-content-center ${isOpen ? 'show' : ''}`}
//           id="navbarSupportedContent"
//         >
//           <ul className="navbar-nav">
//             {/* Home Link */}
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/" exact activeClassName="active">
//                 <span className="rolling-text">Home</span>
//               </NavLink>
//             </li>

//             {/* Services Dropdown */}
//             <li className="nav-item dropdown">
//               <a
//                 className="nav-link dropdown-toggle"
//                 href="#services"
//                 onClick={toggleServicesDropdown}
//                 aria-expanded={isServicesOpen}
//                 aria-controls="services-dropdown"
//               >
//                 <Link to="/services">
//                   <span className="rolling-text">Services</span>
//                 </Link>
//               </a>
//               <div
//                 className={`dropdown-menu ${isServicesOpen ? 'show' : ''}`}
//                 id="services-dropdown"
//               >
//                 <Link className="dropdown-item" to="/services/app-development">
//                   Application Development
//                 </Link>
//                 <Link className="dropdown-item" to="/services/mobile-development">
//                   Mobile App Development
//                 </Link>
//                 <Link className="dropdown-item" to="/services/product-management">
//                   Product Management
//                 </Link>
//                 <Link className="dropdown-item" to="/services/qa-and-automation">
//                   QA & Automation
//                 </Link>
//                 <Link className="dropdown-item" to="/services/cloud-services">
//                   Cloud Services
//                 </Link>
//                 <Link className="dropdown-item" to="/services/ai-and-ml">
//                   AI & ML
//                 </Link>
//               </div>
//             </li>

//             {/* About Us Link */}
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/about" activeClassName="active">
//                 <span className="rolling-text">About us</span>
//               </NavLink>
//             </li>

//             {/* Contact Link */}
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/contact" activeClassName="active">
//                 <span className="rolling-text">Contact</span>
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom'; // Use NavLink for active styling
import KovaltyLogo from '../assets/images/Kovalty.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile navbar toggle
  const [isServicesOpen, setIsServicesOpen] = useState(false); // State for Services dropdown
  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Sticky Navbar on Scroll
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('sticky-navbar', 'fade-in');
      } else {
        navbar.classList.remove('sticky-navbar', 'fade-in');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav ref={navbarRef} className="navbar navbar-expand-lg bord main-bg">
      <div className="container">
        {/* Logo */}
        <Link className="logo icon-img-100" to="/">
          <img src={KovaltyLogo} alt="logo" className="logo-animation" />
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
              <NavLink className="nav-link" to="/" exact>
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
                <Link to="/services">
                  <span className="rolling-text">Services</span>
                </Link>
              </a>
              <div
                className={`dropdown-menu animated-dropdown ${isServicesOpen ? 'show' : ''}`}
                id="services-dropdown"
              >
                <Link className="dropdown-item" to="/services/app-development">
                  Application Development
                </Link>
                <Link className="dropdown-item" to="/services/mobile-development">
                  Mobile App Development
                </Link>
                <Link className="dropdown-item" to="/services/product-management">
                  Product Management
                </Link>
                <Link className="dropdown-item" to="/services/qa-and-automation">
                  QA & Automation
                </Link>
                <Link className="dropdown-item" to="/services/cloud-services">
                  Cloud Services
                </Link>
                <Link className="dropdown-item" to="/services/ai-and-ml">
                  AI & ML
                </Link>
              </div>
            </li>

            {/* About Us Link */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                <span className="rolling-text">About us</span>
              </NavLink>
            </li>

            {/* Contact Link */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
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

