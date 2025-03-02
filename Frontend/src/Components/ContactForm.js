// import { useState } from "react";
// import axios from "axios";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState("");
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setSuccess("");
//     setError("");

//     try {
//       const res = await axios.post("http://localhost:5000/api/contact", formData);
//       setSuccess("Message sent successfully!");
//       setFormData({ name: "", email: "", message: "" });
//     } catch (err) {
//       setError("Failed to send message. Try again.");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="contact-form">
//       <h2>Contact Us</h2>
//       {success && <p style={{ color: "green" }}>{success}</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
//         <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
//         <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
//         <button type="submit" disabled={loading}>{loading ? "Sending..." : "Submit"}</button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;




import { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError("Failed to send message. Try again.");
    }

    setLoading(false);
  };

  return (
    <section className="contact-crev section-padding">
      <div className="container">
        <div className="row">
          {/* Contact Info */}
          <div className="col-lg-5">
            <div className="sec-lg-head mb-80">
              <h6 className="dot-titl-non mb-10">Get In Touch</h6>
              <h2 className="fz-50">Let's get in touch with us.</h2>
              <p className="fz-15 mt-10">
                If you would like to work with us or just want to get in touch, we’d love to hear from you!
              </p>
              <div className="phone fz-30 fw-600 mt-30 underline">
                <a href="tel:+917661805678">+91 76618 05678</a>
              </div>
              <ul className="rest social-text d-flex mt-60">
                <li className="mr-30"><a href="https://www.linkedin.com/company/kovalty/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li className="mr-30"><a href="#0">Twitter</a></li>
                <li className="mr-30"><a href="#0">Facebook</a></li>
                <li><a href="#0">Instagram</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="full-width">
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="messages">
                  {success && <p style={{ color: "green" }}>{success}</p>}
                  {error && <p style={{ color: "red" }}>{error}</p>}
                </div>

                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <textarea name="message" placeholder="Message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
                    </div>
                    <div className="mt-30">
                      <button type="submit" className="butn butn-md butn-bord radius-30" disabled={loading}>
                        <span className="text">{loading ? "Sending..." : "Let's Talk"}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;





