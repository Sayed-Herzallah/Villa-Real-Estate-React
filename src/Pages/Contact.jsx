import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const cardStyle = {
    display: 'flex', alignItems: 'center',
    background: '#fff', borderRadius: '10px',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
    padding: '25px', marginBottom: '20px'
  };

  const iconBoxStyle = {
    width: '70px', height: '70px', minWidth: '70px',
    background: '#fff5f2', borderRadius: '10px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    marginRight: '20px', border: '1px solid #ffe0d6'
  };

  return (
    <div>
      {/* Page Heading */}
      <div className="page-heading">
        <span><Link to="/">Home</Link> / Contact</span>
        <h3>Contact Us</h3>
      </div>

      <section className="section contact-page">
        <div className="container">
          <div className="row">

            {/* LEFT: Heading + Cards */}
            <div className="col-lg-6 col-md-6">
              <div className="section-heading" style={{ marginRight: 0 }}>
                <h6>Contact Us</h6>
                <h2>Get In <em>Touch</em><br />With Our Team</h2>
              </div>
              <p style={{ marginBottom: '35px' }}>
                We're here to help you find your dream property. Whether you have questions
                about available listings, need investment advice, or want to schedule a visit,
                our team of experts is ready to assist you every step of the way.
              </p>

              {/* Phone */}
              <div style={cardStyle}>
                <div style={iconBoxStyle}>
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="#f35525">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                  </svg>
                </div>
                <div>
                  <h6 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '4px', color: '#1e1e1e' }}>010-020-0340</h6>
                  <span style={{ fontSize: '14px', color: '#aaa' }}>Phone Number</span>
                </div>
              </div>

              {/* Email */}
              <div style={cardStyle}>
                <div style={iconBoxStyle}>
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="#f35525">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <h6 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '4px', color: '#1e1e1e' }}>info@villa.co</h6>
                  <span style={{ fontSize: '14px', color: '#aaa' }}>Email Address</span>
                </div>
              </div>

              {/* Location */}
              <div style={cardStyle}>
                <div style={iconBoxStyle}>
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="#f35525">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <h6 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '4px', color: '#1e1e1e' }}>Sunny Isles Beach, FL 33160</h6>
                  <span style={{ fontSize: '14px', color: '#aaa' }}>Our Location</span>
                </div>
              </div>
            </div>

            {/* RIGHT: Form */}
            <div className="col-lg-6 col-md-6">
              <form id="contact-form" onSubmit={handleSubmit}>
                {submitted && (
                  <div style={{
                    backgroundColor: '#d4edda', color: '#155724',
                    padding: '15px', borderRadius: '10px',
                    marginBottom: '20px', fontSize: '15px'
                  }}>
                    ✓ Message sent! We'll get back to you soon.
                  </div>
                )}
                <label>Full Name</label>
                <input type="text" placeholder="Your Full Name"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })} required />

                <label>Email Address</label>
                <input type="email" placeholder="Your Email Address"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })} required />

                <label>Message</label>
                <textarea placeholder="Your Message"
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })} required />

                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>

          {/* Map - Full width */}
          <div className="row" style={{ marginTop: '60px' }}>
            <div className="col-12">
              <iframe
                title="Villa Agency Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.476!2d-80.1220!3d25.9331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0!2sSunny+Isles+Beach!5e0!3m2!1sen!2sus!4v1"
                width="100%" height="420"
                style={{ border: 0, borderRadius: '10px', display: 'block' }}
                allowFullScreen="" loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}