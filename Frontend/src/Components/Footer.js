import React from "react";

const Footer = () => {
  return (
    <footer className="sub-bg">
      <div className="footer-container">
        <div className="container pb-80 pt-80 ontop">
          <div className="call-box text-center mb-80">
            <h2><a href="/contact">Let's Discuss</a></h2>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <h6>Address</h6>
              <p>Plot No 54, Tripura Landmark-II, Bowrampet, Hyderabad - 500043 Telangana, India</p>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <h6>Email</h6>
              <p><a href="mailto:info@kovalty.com">info@kovalty.com</a></p>
              <p><a href="tel:+917661805678">+91 76618 05678</a></p>
            </div>
            <div className="col-lg-2">
              <h6>Social</h6>
              <ul className="social-text">
                <li><a href="https://linkedin.com/company/kovalty">LinkedIn</a></li>
                <li><a href="/">Facebook</a></li>
                <li><a href="/">Twitter</a></li>
                <li><a href="/">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sub-footer pt-40 pb-40 bord-thin-top ontop">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <img src="assets/imgs/Kovalty.png" alt="Kovalty" />
              </div>
              <div className="col-lg-8">
                <p className="fz-13">
                  Copyright ©️ Kovalty Technologies all rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
