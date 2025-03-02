// import React, { useEffect } from 'react';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import '../assets/css/plugins/animate.min.css';
// import '../assets/css/plugins/bootstrap.min.css';
// import '../assets/css/plugins/flaticon.css';
// import '../assets/css/plugins/fontawesome-all.min.css';
// import '../assets/css/plugins/ionicons.min.css';
// import '../assets/css/plugins/justifiedGallery.min.css';
// import '../assets/css/plugins/magnific-popup.css';
// import '../assets/css/plugins/pe-icon-7-stroke.css';
// import '../assets/css/plugins/slick-theme.css';
// import '../assets/css/plugins/slick.css';
// import '../assets/css/plugins/swiper.min.css';
// import '../assets/css/plugins/YouTubePopUp.css';
// import '../Components/style.css';
// import '../Components/plugins.css';

// const Home = () => {
//   useEffect(() => {
//     const progressWrap = document.createElement("div");
//     progressWrap.classList.add("progress-wrap", "cursor-pointer");

//     const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//     svg.setAttribute("class", "progress-circle svg-content");
//     svg.setAttribute("width", "100%");
//     svg.setAttribute("height", "100%");
//     svg.setAttribute("viewBox", "-1 -1 102 102");

//     const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
//     path.setAttribute("d", "M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98");

//     svg.appendChild(path);
//     progressWrap.appendChild(svg);
//     document.body.appendChild(progressWrap);

//     return () => {
//       document.body.removeChild(progressWrap);
//     };
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <header className="crev-header">
//         <div className="container mt-80">
//           <div className="row">
//             <div className="col-lg-9">
//               <h1 className="fz-65">Transforming <span className="stroke">Businesses</span><br/>Through Technology</h1>
//               <p>
//                 We envision a world where technology empowers businesses to reach their full potential. By harnessing our expertise and innovative mindset, we strive to become a trusted partner for organizations navigating the complexities of the digital age.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="main-img">
//           <img src="assets/imgs/background/14.jpg" alt="" />
//         </div>
//         <div className="bg-pattern bg-img" style={{ backgroundImage: 'url(assets/imgs/patterns/graph.png)' }}></div>
//       </header>

//       <section className="marquee mt-80">
//         <div className="container-fluid">
//           <div className="main-marq">
//             <div className="slide-har">
//               <div className="box">
//                 {["Application Development", "Mobile App Development", "Quality Assurance & Testing", "Product management", "Cloud Services", "AI & ML"].map((item, idx) => (
//                   <div className="item" key={idx}>
//                     <h4>{item}<span className="fz-50 ml-50 stroke icon">*</span></h4>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="serv-box section-padding pb-0">
//         <div className="container">
//           <div className="sec-lg-head mb-80">
//             <h2>Our Services</h2>
//           </div>
//           <div className="row">
//             {["Application Development", "Mobile App Development", "Product Management"].map((service, idx) => (
//               <div className="col-lg-4" key={idx}>
//                 <div className="serv-item">
//                   <h6>{service}</h6>
//                   <p>We specialize in {service.toLowerCase()}, helping businesses leverage technology effectively.</p>
//                   <a href="/services">Read More</a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default Home;







import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../assets/css/plugins/animate.min.css';
import '../assets/css/plugins/bootstrap.min.css';
import '../assets/css/plugins/flaticon.css';
import '../assets/css/plugins/fontawesome-all.min.css';
import '../assets/css/plugins/ionicons.min.css';
import '../assets/css/plugins/justifiedGallery.min.css';
import '../assets/css/plugins/magnific-popup.css';
import '../assets/css/plugins/pe-icon-7-stroke.css';
import '../assets/css/plugins/slick-theme.css';
import '../assets/css/plugins/slick.css';
import '../assets/css/plugins/swiper.min.css';
import '../assets/css/plugins/YouTubePopUp.css';

import backgroundImage from '../assets/images/background/14.jpg';
import graphPattern from '../assets/images/patterns/graph.png';

import appDevIcon from '../assets/images/sass-icons/0.png'; // Import icons
import mobileAppIcon from '../assets/images/sass-icons/1.png';
import productMgmtIcon from '../assets/images/sass-icons/2.png';
import portfolio1 from '../assets/images/portfolio/4/01.jpg'; // Import portfolio images
import portfolio2 from '../assets/images/portfolio/4/02.jpg';
import portfolio3 from '../assets/images/portfolio/4/03.jpg';
import portfolio4 from '../assets/images/portfolio/4/04.jpg';
import portfolio5 from '../assets/images/portfolio/4/05.jpg';

import servIcon0 from '../assets/images/sass-icons/0.png'; // Import icons
import servIcon1 from '../assets/images/sass-icons/1.png';
import servIcon2 from '../assets/images/sass-icons/2.png';
import servImage1 from '../assets/images/sass-img/serv/1.jpg'; // Import service images
import servImage2 from '../assets/images/sass-img/serv/2.jpg';
import servImage3 from '../assets/images/sass-img/serv/3.jpg';
import servImage4 from '../assets/images/sass-img/serv/4.jpg';
import abstractBG from '../assets/images/patterns/abstact-BG.png'; // Import background pattern

import KovaltyLogo from '../assets/images/Kovalty.png'; // Import logo image


import '../Components/style.css';
import '../Components/plugins.css';

const Home = () => {
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



  const [activeTab, setActiveTab] = useState('tabs-1'); // State to manage active tab

  const tabs = [
    {
      id: 'tabs-1',
      title: 'Development',
      icon: servIcon0,
      image: servImage4,
      description: 'We specialize in app and mobile development, creating tailored, user-friendly solutions that drive growth and enhance engagement from concept to launch.',
    },
    {
      id: 'tabs-2',
      title: 'Product Management',
      icon: servIcon1,
      image: servImage2,
      description: 'We transform ideas into successful products with end-to-end management, from strategy and market research to roadmap planning and lifecycle management.',
    },
    {
      id: 'tabs-3',
      title: 'QA & Testing',
      icon: servIcon2,
      image: servImage3,
      description: 'We deliver high-quality software through comprehensive Quality Assurance & Automation services, ensuring flawless performance and user satisfaction.',
    },
    {
      id: 'tabs-4',
      title: 'Cloud Services',
      icon: servIcon0,
      image: servImage1,
      description: 'We offer scalable Cloud Services to optimize operations, enhance flexibility, and drive innovation. Our expert team delivers tailored solutions for migration, security, and collaboration to meet your unique business needs.',
    },
    {
      id: 'tabs-5',
      title: 'AI & ML',
      icon: servIcon1,
      image: servImage2,
      description: 'We offer AI and ML services to drive innovation and optimize business processes. Our expert team leverages advanced algorithms and data insights to create customized solutions that enhance decision-making, automation, and performance.',
    },
  ];

  return (
    <>
      <Navbar />

      {/* Smooth Wrapper */}
      <div id="smooth-wrapper">
        {/* Smooth Content */}
        <div id="smooth-content">
          {/* Main Content */}
          <main className="main-bg">
            {/* ==================== Start Loading ==================== */}
            <div className="loader-wrap">
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

            {/* ==================== Start Slider ==================== */}
            <header className="crev-header">
              <div className="container mt-80">
                <div className="row">
                  <div className="col-lg-9">
                    <div className="caption">
                      <h1 className="fz-65">
                        Transforming <span className="stroke">Businesses</span> <br />
                        Through Technology
                      </h1>
                      <div className="row mt-30">
                        <div className="col-lg-5 offset-lg-1">
                          <div className="text">
                            <p>
                              We envision a world where technology empowers businesses to reach their full potential. By harnessing our expertise and innovative mindset, we strive to become a trusted partner for organizations navigating the complexities of the digital age.
                            </p>
                          </div>
                          <div className="crv-butn-vid mt-30"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="md-hide"></div>
                  </div>
                </div>
              </div>
              <div className="main-img">
                <img src={backgroundImage} alt="Background" />
              </div>
              <div className="bg-pattern bg-img" style={{ backgroundImage: `url(${graphPattern})` }}></div>
            </header>
            {/* ==================== End Slider ==================== */}

            {/* ==================== Start Marquee ==================== */}
            <section className="marquee mt-80">
              <div className="container-fluid rest">
                <div className="row">
                  <div className="col-12">
                    <div className="main-marq">
                      <div className="slide-har st1">
                        <div className="box non-strok">
                          {[
                            'Application Development',
                            'Mobile App Development',
                            'Quality Assurance & Testing',
                            'Product management',
                            'Cloud Services',
                            'AI & ML',
                          ].map((item, idx) => (
                            <div className="item" key={idx}>
                              <h4 className="d-flex align-items-center">
                                <span>{item}</span>
                                <span className="fz-50 ml-50 stroke icon">*</span>
                              </h4>
                            </div>
                          ))}
                        </div>
                        <div className="box non-strok">
                          {[
                            'Application Development',
                            'Mobile App Development',
                            'Quality Assurance & Testing',
                            'Product management',
                            'Cloud Services',
                            'AI & ML',
                          ].map((item, idx) => (
                            <div className="item" key={idx}>
                              <h4 className="d-flex align-items-center">
                                <span>{item}</span>
                                <span className="fz-50 ml-50 stroke icon">*</span>
                              </h4>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ==================== End Marquee ==================== */}

             {/* ==================== Start Services ==================== */}
            <section className="serv-box section-padding pb-0">
              <div className="container">
                <div className="sec-lg-head mb-80">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="position-re">
                        <h2 className="d-rotate wow">
                          <span className="rotate-text">Our Services</span>
                        </h2>
                      </div>
                    </div>
                    <div className="col-lg-4 d-flex align-items-center">
                      <div className="text wow fadeIn">
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/* Application Development */}
                  <div className="col-lg-4">
                    <div className="serv-item lg-pad md-mb50 radius-5 wow fadeIn" data-wow-delay=".5s">
                      <div className="icon-img-50 mb-40">
                        <img src={appDevIcon} alt="Application Development" />
                      </div>
                      <h6 className="mb-15">Application Development</h6>
                      <p className="fz-14">
                        We specialize in application development, helping businesses leverage technology to streamline operations, enhance productivity, and drive growth. Our experienced team of developers, designers, and project managers work collaboratively to create custom applications tailored to meet your unique business needs.
                      </p>
                      <div className="crv-more">
                        <a href="/services" className="mt-30 ls1 fz-12 text-u">
                          Read More
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Mobile App Development */}
                  <div className="col-lg-4">
                    <div className="serv-item lg-pad md-mb50 radius-5 wow fadeIn" data-wow-delay=".8s">
                      <div className="icon-img-50 mb-40">
                        <img src={mobileAppIcon} alt="Mobile App Development" />
                      </div>
                      <h6 className="mb-15">Mobile App Development</h6>
                      <p className="fz-14">
                        We specialize in mobile app development, creating powerful, user-friendly applications that elevate your business and enhance customer engagement. In today’s fast-paced digital landscape, having a mobile presence is essential, and our expert team is here to help you navigate the complexities of mobile app development from concept to launch.
                      </p>
                      <div className="crv-more">
                        <a href="/services" className="mt-30 ls1 fz-12 text-u">
                          Read More
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Product Management */}
                  <div className="col-lg-4">
                    <div className="serv-item lg-pad radius-5 wow fadeIn" data-wow-delay="1.2s">
                      <div className="icon-img-50 mb-40">
                        <img src={productMgmtIcon} alt="Product Management" />
                      </div>
                      <h6 className="mb-15">Product Management</h6>
                      <p className="fz-14">
                        We help businesses transform innovative ideas into successful products. Our expert team collaborates closely with clients to understand their unique vision and market needs, ensuring alignment with business objectives. We offer end-to-end product management solutions, product strategy development, roadmap planning, and lifecycle management.
                      </p>
                      <div className="crv-more">
                        <a href="/services" className="mt-30 ls1 fz-12 text-u">
                          Read More
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ==================== End Services ==================== */}

            {/* ==================== Start Portfolio Section ==================== */}
            <section className="works thecontainer">
              {/* Application Development */}
              <div className="panel mt-30">
                <div className="item">
                  <div className="img">
                    <img src={portfolio1} alt="Application Development" />
                  </div>
                  <div className="cont d-flex align-items-end">
                    <div>
                      <h5>Application Development</h5>
                    </div>
                  </div>
                  <a href="app-development.html" className="link-overlay"></a>
                </div>
              </div>

              {/* Mobile App Development */}
              <div className="panel mt-30">
                <div className="item">
                  <div className="img">
                    <img src={portfolio2} alt="Mobile App Development" />
                  </div>
                  <div className="cont d-flex align-items-end">
                    <div>
                      <h5>Mobile App Development</h5>
                    </div>
                  </div>
                  <a href="mobile-development.html" className="link-overlay"></a>
                </div>
              </div>

              {/* Product Management */}
              <div className="panel mt-30">
                <div className="item">
                  <div className="img">
                    <img src={portfolio3} alt="Product Management" />
                  </div>
                  <div className="cont d-flex align-items-end">
                    <div>
                      <h5>Product Management</h5>
                    </div>
                  </div>
                  <a href="product-management.html" className="link-overlay"></a>
                </div>
              </div>

              {/* Quality Assurance & Testing */}
              <div className="panel mt-30">
                <div className="item">
                  <div className="img">
                    <img src={portfolio4} alt="Quality Assurance & Testing" />
                  </div>
                  <div className="cont d-flex align-items-end">
                    <div>
                      <h5>Quality Assurance & Testing</h5>
                    </div>
                  </div>
                  <a href="qa-and-automation.html" className="link-overlay"></a>
                </div>
              </div>

              {/* Cloud Services */}
              <div className="panel mt-30">
                <div className="item">
                  <div className="img">
                    <img src={portfolio5} alt="Cloud Services" />
                  </div>
                  <div className="cont d-flex align-items-end">
                    <div>
                      <h5>Cloud Services</h5>
                    </div>
                  </div>
                  <a href="cloud-/services" className="link-overlay"></a>
                </div>
              </div>
            </section>
            {/* ==================== End Portfolio Section ==================== */}



            {/* ==================== Start services tabs ==================== */}
    

            <section className="services-tab revers section-padding pt-0">
              <div className="container">
                {/* Marquee Section */}
                <div className="row mb-80">
                  <div className="col-lg-12">
                    <div className="full-width">
                      <div className="main-marq o-hidden pt-40 pb-40 bord-thin-top bord-thin-bottom">
                        <div className="slide-har st1">
                          <div className="box">
                            {[...Array(5)].map((_, i) => (
                              <div className="item" key={i}>
                                <h4 className="d-flex align-items-center fz-70">
                                  <span>Kovalty Technologies</span>
                                  <span className="fz-50 ml-50 stroke icon">*</span>
                                </h4>
                              </div>
                            ))}
                          </div>
                          <div className="box">
                            {[...Array(5)].map((_, i) => (
                              <div className="item" key={i}>
                                <h4 className="d-flex align-items-center fz-70">
                                  <span>Kovalty Technologies</span>
                                  <span className="fz-50 ml-50 stroke icon">*</span>
                                </h4>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tabs Section */}
                <div className="row justify-content-center" id="tabs">
                  <div className="col-lg-5 valign">
                    <div className="serv-tab-link tab-links full-width md-mb50">
                      <div className="sec-lg-head mb-80 wow fadeIn">
                        <h6 className="dot-titl-non mb-15">Services</h6>
                        <p>We deliver innovative solutions across Development, AI, Cloud, and QA.</p>
                      </div>
                      <div className="row">
                        <div className="col-lg-10">
                          <ul className="rest">
                            {tabs.map((tab, index) => (
                              <li
                                key={tab.id}
                                className={`item-link mb-15 pb-15 bord-thin-bottom ${
                                  activeTab === tab.id ? 'current' : ''
                                }`}
                                onClick={() => setActiveTab(tab.id)}
                              >
                                <span>0{index + 1}</span>
                                {tab.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="serv-tab-cont">
                      {tabs.map((tab) => (
                        <div
                          key={tab.id}
                          className={`tab-content ${activeTab === tab.id ? 'current' : ''}`}
                          id={tab.id}
                        >
                          <div className="item">
                            <div className="img">
                              <img src={tab.image} alt={tab.title} />
                            </div>
                            <div className="cont sub-bg">
                              <div className="icon-img-60 mb-40">
                                <img src={tab.icon} alt={tab.title} />
                              </div>
                              <div className="text">
                                <p>{tab.description}</p>
                              </div>
                              <a href="/services" className="mt-30">
                                <span className="mr-15">Read More</span>
                                <i className="fas fa-long-arrow-alt-right"></i>
                              </a>
                              {tab.id === 'tabs-1' && (
                                <div
                                  className="bg-pattern bg-img"
                                  style={{ backgroundImage: `url(${abstractBG})` }}
                                ></div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>        

            {/* ==================== End services tabs ==================== */}     


          </main>


           {/* ==================== Start Footer ==================== */}
          <footer className="sub-bg">
            <div className="footer-container">
              <div className="container pb-80 pt-80 ontop">
                {/* Call to Action Section */}
                <div className="call-box text-center mb-80">
                  <h2>
                    <a href="/contact">
                      Let's <span className="stroke">Discuss</span>
                    </a>
                    <span className="arrow">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </h2>
                </div>

                {/* Contact Information Section */}
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

              {/* Sub-Footer Section */}
              <div className="sub-footer pt-40 pb-40 bord-thin-top ontop">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="logo">
                        <a href="#">
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
            </div>
          </footer>
          {/* ==================== End Footer ==================== */}           

        </div>
      </div>

      
    </>
  );
};

export default Home;