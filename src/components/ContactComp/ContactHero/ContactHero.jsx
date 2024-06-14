import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "./contact-hero.css";

const ContactHero = () => {
  const contactInfo = {
    address: "1b Birrel Ave, Sabo yaba, Lagos",
    phone: "+234 123 456 7890",
    email: "info@yourchurch.com",
  };

  return (
    <div className="contact-hero">
      <div className="container">
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you. Here's how you can reach us...</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h3>Our Location</h3>
                <p>{contactInfo.address}</p>
              </div>
            </div>

            <div className="info-item">
              <FaPhone className="icon" />
              <div>
                <h3>Phone Number</h3>
                <p>{contactInfo.phone}</p>
              </div>
            </div>

            <div className="info-item">
              <FaEnvelope className="icon" />
              <div>
                <h3>Email Address</h3>
                <p>{contactInfo.email}</p>
              </div>
            </div>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11342.428849197106!2d3.3694148666968022!3d6.5098680594010725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c58af2e66b9%3A0x377df19153bdc4ac!2s1b%20Birrel%20Ave%2C%20Onike%2C%20Lagos%20101245%2C%20Lagos!5e0!3m2!1sen!2sng!4v1718402488419!5m2!1sen!2sng"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Church Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
