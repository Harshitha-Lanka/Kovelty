import React from 'react';
import { useState, useEffect } from 'react';
import '../assets/css/plugins/animate.min.css';
import Navbar from '../Components/Navbar';
// import './assets/css/style.css';
import KovaltyLogo from '../assets/images/Kovalty.png';
import CircleStar from '../assets/images/svg-assets/circle-star.svg';
import Gallery1 from '../assets/images/portfolio/gallery/1.jpg';
import Gallery2 from '../assets/images/portfolio/gallery/2.jpg';
import Gallery3 from '../assets/images/portfolio/gallery/3.jpg';
import Gallery4 from '../assets/images/portfolio/gallery/4.jpg';
import Gallery5 from '../assets/images/portfolio/gallery/5.jpg';
import Gallery6 from '../assets/images/portfolio/gallery/6.png';
import Serv1 from '../assets/images/sass-img/serv/1.jpg';
import ServIcon0 from '../assets/images/sass-icons/0.png';
// import ServIcon1 from '../assets/images/serv-icons/1.png';
// import ServIcon2 from '../assets/images/serv-icons/2.png';
import Background2 from '../assets/images/background/2.jpg';

const Services = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., 2 seconds)
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div className="main-bg">
      {/* Loading Animation */}
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
    <Navbar />
      {/* Cursor */}
      {/* <div className="cursor"></div> */}

      {/* Progress Scroll Button */}
      <div className="progress-wrap cursor-pointer">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bord main-bg">
      <div className="container">
        <a className="logo icon-img-100" href="/">
          <img src={KovaltyLogo} alt="logo" />
        </a>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-label="Toggle navigation">
          <span className="icon-bar"><i className="fas fa-bars"></i></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-center ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link" href="/"><span className="rolling-text">Home</span></a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="services.html"><span className="rolling-text">Services</span></a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="app-development.html">Application Development</a>
                <a className="dropdown-item" href="mobile-development.html">Mobile App Development</a>
                <a className="dropdown-item" href="product-management.html">Product Management</a>
                <a className="dropdown-item" href="qa-and-automation.html">QA & Automation</a>
                <a className="dropdown-item" href="cloud-services.html">Cloud Services</a>
                <a className="dropdown-item" href="ai-and-ml.html">AI & ML</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="about.html"><span className="rolling-text">About us</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact"><span className="rolling-text">Contact</span></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

      {/* Main Content */}
      <main>
        {/* Slider Section */}
        <header className="page-header section-padding pb-0 sub-bg">
          <div className="container mt-80">
            <div className="row">
              <div className="col-lg-8">
                <div className="caption">
                  <h6 className="sub-title">What Can We Do ?</h6>
                  <h1 className="fz-40">End-to-End Solutions in App Development, Mobile, Cloud, QA & Product Management</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5 offset-lg-4">
                <div className="text mt-30">
                  <p>We provide innovative tech solutions in custom applications, mobile experiences, product strategy, quality optimization, and cloud transformation. We craft scalable, high-performance software to empower business efficiency. Our expertise ensures seamless deployment, rigorous testing, and secure data management. Partner with us to elevate your digital journey and maximize growth potential.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="main-marq xlrg section-padding pb-0">
            <div className="slide-har st1">
              <div className="box">
                {[...Array(5)].map((_, i) => (
                  <div className="item" key={i}>
                    <h4>Services</h4>
                  </div>
                ))}
              </div>
              <div className="box">
                {[...Array(5)].map((_, i) => (
                  <div className="item" key={i}>
                    <h4>Services</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Services Section */}
        <section className="serv-box section-padding">
          <div className="container">
            <div className="sec-lg-head mb-80">
              <div className="row">
                <div className="col-lg-8">
                  <div className="position-re">
                    <h6 className="dot-titl-non mb-10">Our Expertise</h6>
                    <h2 className="fz-60 fw-700">Services We Provide</h2>
                  </div>
                </div>
                <div className="col-lg-4 d-flex align-items-center">
                  <div className="text"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="portfolio-fixed">
          <div className="container-fluid rest">
            <div className="row">
              <div className="col-lg-6 rest">
                <div className="left" id="sticky_item">
                  <div id="tab-1" className="img bg-img" style={{ backgroundImage: `url(${Gallery1})` }}></div>
                  <div id="tab-2" className="img bg-img" style={{ backgroundImage: `url(${Gallery2})` }}></div>
                  <div id="tab-3" className="img bg-img" style={{ backgroundImage: `url(${Gallery3})` }}></div>
                  <div id="tab-4" className="img bg-img" style={{ backgroundImage: `url(${Gallery4})` }}></div>
                  <div id="tab-5" className="img bg-img" style={{ backgroundImage: `url(${Gallery5})` }}></div>
                  <div id="tab-6" className="img bg-img" style={{ backgroundImage: `url(${Gallery6})` }}></div>
                </div>
              </div>
              <div className="col-lg-6 sub-bg right">
                <div className="cont active" data-tab="tab-1">
                  <div className="img-hiden">
                    <img src={Gallery1} alt="" />
                  </div>
                  <span className="sub-title mb-15">01.</span>
                  <h3 className="mb-30">Application Development</h3>
                  <div className="row justify-content-center">
                    <div className="col-md-11">
                      <p>Transforming Ideas into Innovative Solutions.</p>
                      <ul className="rest list-arrow mt-30">
                        <li>
                          <span className="icon">
                            <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z" fill="#fff"></path>
                            </svg>
                          </span>
                          <h6 className="inline fz-16 fw-400">Consultation and Requirements Gathering</h6>
                        </li>
                        <li className="mt-5">
                          <span className="icon">
                            <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z" fill="#fff"></path>
                            </svg>
                          </span>
                          <h6 className="inline fz-16 fw-400">Custom Development</h6>
                        </li>
                        <li className="mt-5">
                          <span className="icon">
                            <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z" fill="#fff"></path>
                            </svg>
                          </span>
                          <h6 className="inline fz-16 fw-400">Quality Assurance</h6>
                        </li>
                        <li className="mt-5">
                          <span className="icon">
                            <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z" fill="#fff"></path>
                            </svg>
                          </span>
                          <h6 className="inline fz-16 fw-400">Deployment and Support</h6>
                        </li>
                      </ul>
                      <a href="app-development.html" className="butn-circle d-flex align-items-center text-center mt-50">
                        <div className="full-width">
                          <span>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"></path>
                            </svg>
                          </span>
                          <span className="full-width">View Details</span>
                        </div>
                        <img src={CircleStar} alt="" className="circle-star" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* Repeat for other tabs (tab-2 to tab-6) */}
              </div>
            </div>
          </div>
        </section>

        {/* Services Tabs Section */}
        <section className="services-tab section-padding">
          <div className="container">
            <div className="row" id="tabs">
              <div className="col-lg-6 order2">
                <div className="serv-tab-cont mb-80">
                  <div className="tab-content current" id="tabs-1">
                    <div className="item">
                      <div className="img">
                        <img src={Serv1} alt="" />
                      </div>
                      <div className="cont sub-bg">
                        <div className="icon-img-60 mb-40">
                          <img src={ServIcon0} alt="" />
                        </div>
                        <div className="text">
                          <p>We specialize in application development, helping businesses leverage technology to streamline operations, enhance productivity, and drive growth. Our experienced team of developers, designers, and project managers work collaboratively to create custom applications tailored to meet your unique business needs.</p>
                        </div>
                        <a href="#0" className="mt-30">
                          <span className="mr-15">Read More</span>
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Repeat for other tabs (tabs-2 to tabs-5) */}
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1 valign order1">
                <div className="serv-tab-link tab-links full-width md-mb50">
                  <div className="sec-lg-head mb-80">
                    <h6 className="dot-titl-non mb-15">Services</h6>
                    <p>We help you to go online and increase your conversion rate Better design for your digital products.</p>
                  </div>
                  <ul className="rest">
                    <li className="item-link current mb-15" data-tab="tabs-1"><span>01</span> Application Development</li>
                    <li className="item-link mb-15" data-tab="tabs-2"><span>02</span> Mobile App Development</li>
                    <li className="item-link mb-15" data-tab="tabs-3"><span>03</span> Product Management</li>
                    <li className="item-link mb-15" data-tab="tabs-4"><span>04</span> QA & Automation</li>
                    <li className="item-link" data-tab="tabs-5"><span>05</span> Cloud Services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="intro-corp section-padding pt-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="sec-head mb-40">
                  <h6 className="sub-title">FAQs.</h6>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="cont">
                  <div className="text">
                    <h2 className="d-slideup wow">
                      <span className="sideup-text">
                        <span className="up-text">Key Client Questions on </span>
                      </span>
                      <span className="sideup-text">
                        <span className="up-text"><span>Our Service Offerings</span>.</span>
                      </span>
                    </h2>
                  </div>
                  <div className="accordion bord mt-40">
                    <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                      <div className="title">
                        <h6 className="fz-18">What is your process for understanding our unique business needs?</h6>
                        <span className="ico"></span>
                      </div>
                      <div className="accordion-info">
                        <p className="fz-14">We start with an in-depth consultation to understand your goals, challenges, and requirements. Our team then collaborates closely with you to define a customized development plan aligned with your business objectives.</p>
                      </div>
                    </div>
                    <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                      <div className="title">
                        <h6 className="fz-18">How do you ensure the quality and security of your solutions?</h6>
                        <span className="ico"></span>
                      </div>
                      <div className="accordion-info">
                        <p className="fz-14">Quality and security are top priorities. We conduct rigorous testing throughout the development cycle, including functional, performance, and security testing. Our dedicated QA team uses the latest tools and best practices to deliver reliable, secure solutions.</p>
                      </div>
                    </div>
                    <div className="item wow fadeInUp" data-wow-delay=".5s">
                      <div className="title">
                        <h6 className="fz-18">What support do you offer after project completion?</h6>
                        <span className="ico"></span>
                      </div>
                      <div className="accordion-info">
                        <p className="fz-14">Our services include post-launch support and maintenance, ensuring your solution stays up-to-date, secure, and optimized. We’re here to assist with updates, troubleshooting, and enhancements as your business grows and needs evolve.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="call-action-img">
          <div className="container">
            <div className="sec-bg-img bg-img parallaxie" style={{ backgroundImage: `url(${Background2})` }}></div>
            <div className="sec-lg-head section-padding">
              <div className="row ontop">
                <div className="col-11 d-flex align-items-center">
                  <div>
                    <h2 className="fz-50 d-rotate wow">
                      <span className="rotate-text">Have a project in mind?</span>
                      <span className="rotate-text">Let’s <span>get to work</span>.</span>
                    </h2>
                  </div>
                  <div className="ml-auto">
                    <a href="/contact" className="butn-circle d-flex align-items-center text-center mt-50 m-auto">
                      <div className="full-width">
                        <span>
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"></path>
                          </svg>
                        </span>
                        <span className="full-width">Get In Touch</span>
                      </div>
                      <img src={CircleStar} alt="" className="circle-star" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
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
                  <a href="https://www.linkedin.com/company/kovalty/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
                    <img src={KovaltyLogo} alt="" />
                  </a>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="copyright d-flex">
                  <div className="ml-auto">
                    <p className="fz-13">Copyright ©️ <span className="underline"><a href="/" target="_blank" rel="noopener noreferrer">Kovalty Technologies</a></span> all rights reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;