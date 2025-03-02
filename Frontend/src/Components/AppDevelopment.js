import React from 'react';
import Navbar from './Navbar';
// import './App-Development.css'; // Import the corresponding CSS file

const AppDevelopment = () => {
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
      </div>
      {/* ==================== End Loading ==================== */}

      {/* <div className="cursor"></div>  */}

      {/* ==================== Start progress-scroll-button ==================== */}
      <div className="progress-wrap cursor-pointer">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      {/* ==================== End progress-scroll-button ==================== */}

      {/* ==================== Start Navbar ==================== */}
      {/* <nav className="navbar navbar-expand-lg bord main-bg">
        <div className="container">
          <a className="logo icon-img-100" href="/">
            <img src="assets/imgs/Kovalty.png" alt="logo" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icon-bar"><i className="fas fa-bars"></i></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link" data-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false"><span className="rolling-text">Home</span></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="services.html" role="button" aria-haspopup="true" aria-expanded="false"><span className="rolling-text">Services</span></a>
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
                <a className="nav-link" data-toggle="dropdown" href="/about" role="button" aria-haspopup="true" aria-expanded="false"><span className="rolling-text">About us</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact"><span className="rolling-text">Contact</span></a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <Navbar />
      {/* ==================== End Navbar ==================== */}

      <main>
        {/* ==================== Start Slider ==================== */}
        <header className="page-header section-padding pb-0 sub-bg">
          <div className="container mt-80">
            <div className="row">
              <div className="col-lg-8">
                <div className="caption">
                  <h6 className="sub-title">Transforming Ideas into Innovative Solutions</h6>
                  <h1 className="fz-55">Application Development</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5 offset-lg-4">
                <div className="text mt-30">
                  <p>We specialize in application development, helping businesses leverage technology to streamline operations, enhance productivity, and drive growth. Our experienced team of developers, designers, and project managers work collaboratively to create custom applications tailored to meet your unique business needs.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="main-marq xlrg section-padding pb-0">
            <div className="slide-har st1">
              <div className="box">
                {[...Array(5)].map((_, i) => (
                  <div className="item" key={i}>
                    <h4>Application Development</h4>
                  </div>
                ))}
              </div>
              <div className="box">
                {[...Array(5)].map((_, i) => (
                  <div className="item" key={i}>
                    <h4>Application Development</h4>
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
                  <img src="assets/imgs/about/app-dev.jpg" alt="" />
                  <div className="cont-box main-colorbg3">
                    <span>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"></path>
                      </svg>
                    </span>
                    <h5 className="fw-700 mt-15">Why choose our services compared to other one?</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cont mb-50">
                  <span className="sub-title mb-15">What We Provide</span>
                  <h3>Empowering your vision with Innovation, Precision,<span className="stroke">and Excellence</span></h3>
                  <div className="row mt-50">
                    <div className="col-lg-11 offset-lg-1">
                      <p>We offer end-to-end services, starting with detailed consultation and custom development to create robust, scalable applications. Our process includes rigorous quality assurance, seamless deployment, and ongoing support to drive your business forward.</p>
                      <div className="list-arrow mt-50">
                        <ul className="rest">
                          <li className="mb-20">
                            <span className="icon main-color3"><i className="fas fa-check-double"></i></span> Consultation and Requirements Gathering
                          </li>
                          <li className="mb-20">
                            <span className="icon main-color3"><i className="fas fa-check-double"></i></span> Custom Development and Quality Assurance
                          </li>
                          <li>
                            <span className="icon main-color3"><i className="fas fa-check-double"></i></span> Deployment and Support
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

        {/* ==================== Start process ==================== */}
        <section className="process section-padding sub-bg pt-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-9">
                <div className="sec-head text-center mb-80">
                  <span className="sub-title mb-15">Why Choose Us?</span>
                  <h3>Your Vision, <br /> <span className="stroke">Our Expert Solutions</span></h3>
                </div>
              </div>
            </div>
            <div className="row md-marg">
              <div className="col-lg col-md-4 col-sm-6">
                <div className="item md-mb50">
                  <span className="icon"><i className="fas fa-chart-pie"></i></span>
                  <h5>Expert Team</h5>
                  <p className="fz-14">Our developers are skilled in a wide range of programming languages and technologies, ensuring that we can handle projects of any complexity.</p>
                </div>
              </div>
              <div className="col-lg col-md-4 col-sm-6">
                <div className="item md-mb50">
                  <span className="icon"><i className="fas fa-shield-alt"></i></span>
                  <h5>Agile Methodology</h5>
                  <p className="fz-14">We use agile development practices to adapt to changing requirements and deliver incremental value throughout the project lifecycle.</p>
                </div>
              </div>
              <div className="col-lg col-md-4 col-sm-6">
                <div className="item md-mb50">
                  <span className="icon"><i className="fas fa-dice-d6"></i></span>
                  <h5>Customer-Centric Focus</h5>
                  <p className="fz-14">We prioritize your needs and work tirelessly to exceed your expectations, delivering solutions that align with your business goals.</p>
                </div>
              </div>
              <div className="col-lg col-md-4 col-sm-6">
                <div className="item">
                  <span className="icon"><i className="fas fa-sticky-note"></i></span>
                  <h5>Competitive Pricing</h5>
                  <p className="fz-14">We offer flexible pricing models to accommodate businesses of all sizes, ensuring you receive exceptional value for your investment.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================== End process ==================== */}

        {/* ==================== Start about ==================== */}
        <section className="block-serv section-padding pb-80 bord-thin-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 valign mb-40">
                <div className="content">
                  <div className="item d-flex mb-50">
                    <div>
                      <span className="icon"><i className="fas fa-check"></i></span>
                    </div>
                    <div>
                      <h6>Consultation and Requirements Gathering</h6>
                      <p>We begin with a thorough consultation to understand your vision, goals, and challenges. Our team works closely with you to define project requirements and ensure we have a clear roadmap for development.</p>
                    </div>
                  </div>
                  <div className="item d-flex">
                    <div>
                      <span className="icon"><i className="fas fa-check"></i></span>
                    </div>
                    <div>
                      <h6>Custom Development</h6>
                      <p>Utilizing the latest technologies and development frameworks, we build robust, scalable, and secure applications. Whether you need web applications, mobile apps, or enterprise solutions, our developers are equipped to deliver high-quality results.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 mb-40">
                <div className="img">
                  <img src="assets/imgs/about/appdev2.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="row mt-80">
              <div className="col-lg-6 mb-40">
                <div className="img">
                  <img src="assets/imgs/about/app-dev1.webp" alt="" />
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1 valign mb-40">
                <div className="content">
                  <div className="item d-flex mb-50">
                    <div>
                      <span className="icon"><i className="fas fa-check"></i></span>
                    </div>
                    <div>
                      <h6>Quality Assurance</h6>
                      <p>Quality is our priority. Our dedicated QA team conducts comprehensive testing throughout the development process, ensuring that your application is reliable, user-friendly, and performs optimally across all devices.</p>
                    </div>
                  </div>
                  <div className="item d-flex">
                    <div>
                      <span className="icon"><i className="fas fa-check"></i></span>
                    </div>
                    <div>
                      <h6>Deployment and Support</h6>
                      <p>Once your application is ready, we handle the deployment process, ensuring a smooth transition to your users. Our support doesn’t end there; we offer ongoing maintenance and support to keep your application running smoothly and to implement updates as needed.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================== End about ==================== */}

        {/* ==================== Start skills ==================== */}
        <section className="skills-exp section-padding" data-scroll-index="4">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="sec-lg-head mb-80">
                  <div className="position-re">
                    <h6 className="dot-titl-non mb-10 wow fadeIn">Other Services</h6>
                    <h2 className="fz-50 d-rotate wow">
                      <span className="rotate-text">We also provide</span>
                    </h2>
                  </div>
                </div>
                <div className="skill-item d-flex justify-content-between md-mb50">
                  <div className="item text-center">
                    <div className="icon-img-60 m-auto">
                      <img src="assets/imgs/freelancer/skills/react.png" alt="" />
                    </div>
                    <span className="mt-15">React</span>
                  </div>
                  <div className="item text-center">
                    <div className="icon-img-60 m-auto">
                      <img src="assets/imgs/freelancer/skills/angular.png" alt="" />
                    </div>
                    <span className="mt-15">Angular</span>
                  </div>
                  <div className="item text-center">
                    <div className="icon-img-60 m-auto">
                      <img src="assets/imgs/freelancer/skills/node.png" alt="" />
                    </div>
                    <span className="mt-15">Node.js</span>
                  </div>
                  <div className="item text-center">
                    <div className="icon-img-60 m-auto">
                      <img src="assets/imgs/freelancer/skills/mongo.png" alt="" />
                    </div>
                    <span className="mt-15">MongoDB</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1 valign">
                <div className="exp-items full-width">
                  <div className="item d-flex pb-30 pt-30 mb-30 bord-thin-top bord-thin-bottom">
                    <div className="title">
                      <h6>Mobile Development</h6>
                    </div>
                    <div className="date ml-auto text-right">
                      <span className="icon">
                        <a href="mobile-development.html">
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="item d-flex pb-30 mb-30 bord-thin-bottom">
                    <div className="title">
                      <h6>Product Management</h6>
                    </div>
                    <div className="date ml-auto text-right">
                      <span className="icon">
                        <a href="product-management.html">
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="item d-flex pb-30 mb-30 bord-thin-bottom">
                    <div className="title">
                      <h6>Quality Assurance & Automation</h6>
                    </div>
                    <div className="date ml-auto text-right">
                      <span className="icon">
                        <a href="qa-and-automation.html">
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="item d-flex pb-30 mb-30 bord-thin-bottom">
                    <div className="title">
                      <h6>Cloud Services</h6>
                    </div>
                    <div className="date ml-auto text-right">
                      <span className="icon">
                        <a href="cloud-services.html">
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="item d-flex pb-30 bord-thin-bottom">
                    <div className="title">
                      <h6>AI & ML</h6>
                    </div>
                    <div className="date ml-auto text-right">
                      <span className="icon">
                        <a href="ai-and-ml.html">
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================== End skills ==================== */}

        {/* ==================== Start call to action ==================== */}
        <section className="call-action-img">
          <div className="container">
            <div className="sec-bg-img bg-img parallaxie" data-background="assets/imgs/background/2.jpg"></div>
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
                      <img src="assets/imgs/svg-assets/circle-star.svg" alt="" className="circle-star" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================== End call to action ==================== */}

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
                      <img src="assets/imgs/Kovalty.png" alt="" />
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
        {/* ==================== End Footer ==================== */}
      </main>
    </div>
  );
};

export default AppDevelopment;