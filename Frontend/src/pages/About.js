import React from 'react';
import Navbar from '../Components/Navbar.js'
import Footer from '../Components/Footer.js'


const About = () => {
  return (
    <div>
      <Navbar/>
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
    <Footer/>
    </div>
  );
};

export default About;