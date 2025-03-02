import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../assets/css/plugins/animate.min.css';

import '../assets/css/plugins/bootstrap.min.css';
import '../assets/css/plugins/flaticon.css';
import '../assets/css/plugins/fontawesome-all.min.css';
import '../assets/css/plugins/ionicons.min.css';
import '../assets/css/plugins/justifiedGallery.min.css'
import '../assets/css/plugins/magnific-popup.css';
import '../assets/css/plugins/pe-icon-7-stroke.css';
import '../assets/css/plugins/slick-theme.css';
import '../assets/css/plugins/slick.css';
import '../assets/css/plugins/swiper.min.css';
import '../assets/css/plugins/YouTubePopUp.css';
import '../Components/style.css';
import '../Components/plugins.css';





const Home = () => (
  <>

    
    <Navbar />
    <header className="crev-header">
      <div className="container mt-80">
        <div className="row">
          <div className="col-lg-9">
            <h1 className="fz-65">Transforming <span className="stroke">Businesses</span><br/>Through Technology</h1>
            <p>
              We envision a world where technology empowers businesses to reach their full potential. By harnessing our expertise and innovative mindset, we strive to become a trusted partner for organizations navigating the complexities of the digital age.
            </p>
          </div>
        </div>
      </div>
      <div className="main-img">
        <img src="assets/imgs/background/14.jpg" alt="" />
      </div>
      <div className="bg-pattern bg-img" style={{ backgroundImage: 'url(assets/imgs/patterns/graph.png)' }}></div>
    </header>

    <section className="marquee mt-80">
      <div className="container-fluid">
        <div className="main-marq">
          <div className="slide-har">
            <div className="box">
              {["Application Development", "Mobile App Development", "Quality Assurance & Testing", "Product management", "Cloud Services", "AI & ML"].map((item, idx) => (
                <div className="item" key={idx}>
                  <h4>{item}<span className="fz-50 ml-50 stroke icon">*</span></h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="serv-box section-padding pb-0">
      <div className="container">
        <div className="sec-lg-head mb-80">
          <h2>Our Services</h2>
        </div>
        <div className="row">
          {["Application Development", "Mobile App Development", "Product Management"].map((service, idx) => (
            <div className="col-lg-4" key={idx}>
              <div className="serv-item">
                <h6>{service}</h6>
                <p>We specialize in {service.toLowerCase()}, helping businesses leverage technology effectively.</p>
                <a href="/services">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </>
);

export default Home;
