import React from "react";
import "./hero.css";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Hero() {
  return (
    <div className="hero-section d-flex align-items-center justify-content-center">
      <div className="hero-overlay"></div>
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} xl={8}>
            <div className="hero-content text-center text-white">
              <span className="welcome-text">WELCOME TO</span>
              <h1 className="church-name">Love Network Global Church</h1>
              <p className="hero-description mt-4 mb-5">
                LNG is not just a space, it is an experience. It is a series of
                impactful and transformational encounters that bring change to
                the lives of people. It is felt, seen, heard and perceived like
                fragrance. It encapsulates on the outside and penetrates beyond
                our human fibers into the depths of the heart.
              </p>
              <div className="d-flex justify-content-center">
                <a href="#" className="btn btn-hero me-3">
                  Learn More
                </a>
                <a href="#" className="btn btn-hero-outline">
                  Join Us
                </a>
              </div>
              <div className="social-icons mt-5">
                <a href="#" className="social-icon">
                  <FaFacebookF />
                </a>
                <a href="#" className="social-icon">
                  <FaTwitter />
                </a>
                <a href="#" className="social-icon">
                  <FaInstagram />
                </a>
                <a href="#" className="social-icon">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
