// import React from 'react';

// import Navbar from '../Components/Navbar.js'
// import Footer from '../Components/Footer.js'


// const About = () => {
//   return (
//     <div>
//       <Navbar/>
//       <header className="page-header section-padding pb-0">
//       <div className="container mt-80">
//         <div className="row">
//           <div className="col-lg-8">
//             <div className="caption">
//               <h6 className="sub-title">Transforming ideas into innovative, tailored software solutions.</h6>
//               <h1 className="fz-60">ABOUT US</h1>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-lg-7 offset-lg-4">
//             <div className="text mt-30">
//               <h6 className="sub-title">Who Are We..?</h6>
//               <p className="fz-22">
//                 We are a young, dynamic team of software engineers, designers, product owners, and product managers committed to delivering exceptional tech solutions. Our diverse industry backgrounds allow us to blend creativity with technical know-how, helping businesses thrive in the digital world. Our collaborative culture fosters innovation, keeping us at the forefront of technological advancements. We're driven by a passion for using innovative tech to create meaningful impact and drive success for our clients.
//               </p>
//               <br />
//               <p className="fz-22">
//               At Kovalty Technologies, we are passionate about transforming ideas into innovative software solutions. Our mission is to empower businesses through top-tier IT services and cutting-edge software development tailored to meet the unique needs of our clients.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="main-marq xlrg section-padding pb-0">
//         <div className="slide-har st1">
//           <div className="box">
//             {[...Array(5)].map((_, i) => (
//               <div className="item" key={i}>
//                 <h4>About Us</h4>
//               </div>
//             ))}
//           </div>
//           <div className="box">
//             {[...Array(5)].map((_, i) => (
//               <div className="item" key={i}>
//                 <h4>About Us</h4>
//                 </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </header>
//     <Footer/>
//     </div>
//   );
// };

// export default About;


















import React, { useEffect } from 'react';
import KovaltyLogo from '../assets/images/Kovalty.png'; // Import logo image
import backgroundImage from '../assets/images/background/2.jpg'; // Import background image
import circleStar from '../assets/images/svg-assets/circle-star.svg'; // Import circle star image

const About = () => {
  useEffect(() => {
    // Loader animation
    const loader = document.querySelector('.loader-wrap');
    if (loader) {
      loader.style.transition = 'opacity 1s ease-out, visibility 1s ease-out';
      setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
      }, 1500); // Delay to allow animation
    }

    // Scroll button
    const scrollButton = document.createElement('div');
    scrollButton.className = 'progress-wrap cursor-pointer';
    scrollButton.innerHTML = `
      <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    `;
    document.body.appendChild(scrollButton);

    return () => {
      document.body.removeChild(scrollButton);
    };
  }, []);

  return (
    <div className="main-bg">
      {/* ==================== Start Loading ==================== */}
      {/* <div className="loader-wrap">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
        </svg>
        <div className="loader-wrap-heading">
          <div className="load-text">
            <span>K</span>
            <span>o</span>
            <span>v</span>
            <span>a</span>
            <span>l</span>
            <span>t</span>
            <span>y</span>
          </div>
        </div>
      </div> */}
      {/* ==================== End Loading ==================== */}

      {/* ==================== Start Navbar ==================== */}
      <nav className="navbar navbar-expand-lg bord main-bg">
        <div className="container">
          <a className="logo icon-img-100" href="/">
            <img src={KovaltyLogo} alt="logo" />
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
              <li className="nav-item dropdown">
                <a className="nav-link" data-toggle="dropdown" href="/" role="button">
                  <span className="rolling-text">Home</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/services" role="button">
                  <span className="rolling-text">Services</span>
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="app-development.html">Application Development</a>
                  <a className="dropdown-item" href="mobile-development.html">Mobile App Development</a>
                  <a className="dropdown-item" href="product-management.html">Product Management</a>
                  <a className="dropdown-item" href="qa-and-automation.html">QA & Automation</a>
                  <a className="dropdown-item" href="cloud-/services">Cloud Services</a>
                  <a className="dropdown-item" href="ai-and-ml.html">AI & ML</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" data-toggle="dropdown" href="/about" role="button">
                  <span className="rolling-text">About us</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  <span className="rolling-text">Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* ==================== End Navbar ==================== */}

      {/* ==================== Start Slider ==================== */}
      <header className="page-header section-padding pb-0">
        <div className="container mt-80">
          <div className="row">
            <div className="col-lg-8">
              <div className="caption">
                <h6 className="sub-title">Transforming ideas into innovative, tailored software solutions.</h6>
                <h1 className="fz-60">ABOUT US</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7 offset-lg-4">
              <div className="text mt-30">
                <h6 className="sub-title">Who Are We..?</h6>
                <p className="fz-22">
                  We are a young, dynamic team of software engineers, designers, product owners, and product managers committed to delivering exceptional tech solutions. Our diverse industry backgrounds allow us to blend creativity with technical know-how, helping businesses thrive in the digital world. Our collaborative culture fosters innovation, keeping us at the forefront of technological advancements. We're driven by a passion for using innovative tech to create meaningful impact and drive success for our clients.
                </p>
                <br />
                <p className="fz-22">
                  At Kovalty Technologies, we are passionate about transforming ideas into innovative software solutions. Our mission is to empower businesses through top-tier IT services and cutting-edge software development tailored to meet the unique needs of our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="main-marq xlrg section-padding pb-0">
          <div className="slide-har st1">
            <div className="box">
              {[...Array(5)].map((_, i) => (
                <div className="item" key={i}>
                  <h4>About Us</h4>
                </div>
              ))}
            </div>
            <div className="box">
              {[...Array(5)].map((_, i) => (
                <div className="item" key={i}>
                  <h4>About Us</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
      {/* ==================== End Slider ==================== */}

      {/* ==================== Start About ==================== */}
      <section className="pg-about section-padding sub-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="sec-head mt-80">
                <h6 className="sub-title">Our Agenda.</h6>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="cont mt-80">
                <p className="fz-18">
                  We believe successful projects begin with understanding our clients' needs. We listen attentively and collaborate closely, ensuring our strategies align with your goals. Our agile development approach allows us to adapt to changing requirements while maintaining transparency and open communication throughout the project's lifecycle.
                  <br />
                  <br />
                  We invite you to embark on this exciting journey with us. Whether you're a startup seeking to launch your first product or an established business looking to enhance your software capabilities, we're here to help you succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== End About ==================== */}

      {/* ==================== Start Call to Action ==================== */}
      <section className="call-action-img">
        <div className="container">
          <div className="sec-bg-img bg-img parallaxie" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
          <div className="sec-lg-head section-padding">
            <div className="row ontop">
              <div className="col-11 d-flex align-items-center">
                <div className="valign">
                  <h2 className="fz-50 d-rotate wow">
                    <span className="rotate-text">Have a project in mind?</span>
                    <span className="rotate-text">Let’s <span className="sub-font">get to work</span>.</span>
                  </h2>
                </div>
                <div className="ml-auto">
                  <a href="/contact" className="butn-circle d-flex align-items-center text-center m-auto">
                    <div className="full-width">
                      <span>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="full-width">Get In Touch</span>
                    </div>
                    <img src={circleStar} alt="" className="circle-star" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== End Call to Action ==================== */}

      {/* ==================== Start Footer ==================== */}
      <footer className="pt-80">
        <div className="container pb-80">
          <div className="row">
            <div className="col-lg-3">
              <div className="colum md-mb50">
                <div className="tit mb-20">
                  <h6>Address</h6>
                </div>
                <div className="text">
                  <p>Plot No 54, Tripura Landmark-II, Bowrampet, Hyderabad - 500043 Telangana, India</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="colum md-mb50">
                <div className="tit mb-20">
                  <h6>Email</h6>
                </div>
                <div className="text">
                  <p className="mb-10">
                    <a href="mailto:info@kovalty.com">info@kovalty.com</a>
                  </p>
                  <p>
                    <a href="tel:+917661805678">+91 76618 05678</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 md-mb50">
              <div className="tit mb-20">
                <h6>Social</h6>
              </div>
              <ul className="rest social-text">
                <li>
                  <a href="https://www.linkedin.com/company/kovalty/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#0">Facebook</a>
                </li>
                <li>
                  <a href="#0">Twitter</a>
                </li>
                <li>
                  <a href="#0">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sub-footer pt-40 pb-40 bord-thin-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="logo">
                  <a href="/">
                    <img src={KovaltyLogo} alt="Kovalty Logo" />
                  </a>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="copyright d-flex">
                  <div className="ml-auto">
                    <p className="fz-13">
                      Copyright ©️{' '}
                      <span className="underline">
                        <a href="/" target="_blank" rel="noopener noreferrer">
                          Kovalty Technologies
                        </a>
                      </span>{' '}
                      all rights reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* ==================== End Footer ==================== */}
    </div>
  );
};

export default About;