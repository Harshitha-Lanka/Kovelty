import React from 'react';
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
import '../Components/style.css';
import '../Components/plugins.css';
import ContactForm from '../Components/ContactForm';

const Contact = () => (
  <>
    <Navbar />
    <header className="page-header section-padding sub-bg">
      <div className="container mt-80">
        <div className="row">
          <div className="col-lg-7">
            <div className="caption">
              <h6 className="sub-title">Contact Us</h6>
              <h1 className="fz-55">Let's make <br /> your product brilliant!</h1>
            </div>
          </div>
          <div className="col-lg-5 valign">
            <div className="text">
              <p>We help our clients succeed by offering application development, product management, QA and testing, cloud services, and AI/ML solutions that deliver innovation, meet business goals, and drive growth.</p>
            </div>
          </div>
        </div>
      </div>
    </header>

    <ContactForm />
    <Footer />
  </>
);

export default Contact;