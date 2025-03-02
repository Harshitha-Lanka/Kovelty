import React from 'react';
// import './QAAndAutomation.css'; // Assuming you have a CSS file for styling
import Navbar from './Navbar';

const QAAndAutomation = () => {
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
      {/* <nav className="navbar navbar-expand-lg bord main-bg">
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
            <span className="icon-bar">
              <i className="fas fa-bars"></i>
            </span>
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
      </nav> */}

        <Navbar />

      {/* ==================== End Navbar ==================== */}

      {/* ==================== Start Slider ==================== */}
      <header className="page-header section-padding pb-0 sub-bg">
        <div className="container mt-80">
          <div className="row">
            <div className="col-lg-8">
              <div className="caption">
                <h6 className="sub-title">Achieving Quality Excellence through Advanced Testing</h6>
                <h1 className="fz-55">Quality Assurance & Automation</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 offset-lg-4">
              <div className="text mt-30">
                <p>
                  Ensuring Excellence Through Rigorous Testing and Automation. We are dedicated to delivering high-quality software solutions through our comprehensive Quality Assurance & Automation services. We understand that quality is paramount in today’s competitive landscape, and our experienced QA team is here to ensure that your applications perform flawlessly, meet user expectations, and maintain your brand’s reputation.
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
                  <h4>Quality Assurance & Automation</h4>
                </div>
              ))}
            </div>
            <div className="box">
              {[...Array(5)].map((_, i) => (
                <div className="item" key={i}>
                  <h4>Quality Assurance & Automation</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
      {/* ==================== End Slider ==================== */}

      {/* ==================== Start Services ==================== */}
      <section className="serv-intro section-padding sub-bg">
        <div className="container">
          <div className="sec-lg-head mb-80">
            <div className="row">
              <div className="col-lg-6">
                <h6 className="dot-titl-non mb-15 wow fadeIn">Featured services</h6>
                <h2 className="fz-60 fw-700 d-rotate wow animated">
                  <span className="rotate-text">Our Approach</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 md-mb80">
              <div className="img mb-50">
                <img src="assets/imgs/about/qa1.png" alt="" />
                <div className="cont-box main-colorbg3">
                  <span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <h5 className="fw-700 mt-15">Why choose our services compared to other one?</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cont mb-50">
                <span className="sub-title mb-15">What We Provide</span>
                <h3>
                  Empowering your vision with Innovation, Precision,<span className="stroke">and Excellence</span>
                </h3>
                <div className="row mt-50">
                  <div className="col-lg-11 offset-lg-1">
                    <p>
                      We provide end-to-end Quality Assurance services to ensure your application is reliable, secure, and user-friendly. Our process includes functional, performance, and security testing, along with user acceptance testing (UAT) to meet user expectations. Through rigorous regression testing, we ensure updates never compromise existing functionalities.
                    </p>
                    <div className="list-arrow mt-50">
                      <ul className="rest">
                        <li className="mb-20">
                          <span className="icon main-color3">
                            <i className="fas fa-check-double"></i>
                          </span>
                          Requirement Analysis and Test Planning
                        </li>
                        <li className="mb-20">
                          <span className="icon main-color3">
                            <i className="fas fa-check-double"></i>
                          </span>
                          Manual and Automation Testing
                        </li>
                        <li className="mb-20">
                          <span className="icon main-color3">
                            <i className="fas fa-check-double"></i>
                          </span>
                          Continuous Integration & Continuous Testing
                        </li>
                        <li>
                          <span className="icon main-color3">
                            <i className="fas fa-check-double"></i>
                          </span>
                          Reporting, Feedback, Ongoing Support and Maintenance
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== End Services ==================== */}

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
                  <p>
                    Plot No 54, Tripura Landmark-II, Bowrampet, Hyderabad - 500043 Telangana, India
                  </p>
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
                    <img src="assets/imgs/Kovalty.png" alt="" />
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

export default QAAndAutomation;