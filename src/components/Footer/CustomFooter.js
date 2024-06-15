"use client";

import { Avatar, Layout, Row, Col } from "antd";
const { Footer } = Layout;
import {
  AiFillYoutube,
  AiFillFacebook,
  AiOutlineWhatsApp,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

import "./footer.css";
import CustomButton from "../common/CustomButton";
import CustomInput from "../common/CustomInput";
import Link from "next/link";
import { Container } from "react-bootstrap";
import Image from "next/image";

export default function CustomFooter() {
  return (
    <Footer className="footer">
      <Container>
        <Row className="justify-content-around py-5">
          <Col md={4} sm={6} xs={12} className="mb-4">
            <div className="footer-logo d-flex flex-column gap-3">
              <Image
                src="/images/avatars/logo.png"
                alt="Logo"
                className="footer-img mb-4"
                width={160}
                height={40} // Adjust this value based on your logo's aspect ratio
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <p className="text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum
              </p>
              <div className="footer-social d-flex gap-3">
                <a href="#">
                  <AiFillYoutube className="social-icon" />
                </a>
                <a href="#">
                  <AiFillFacebook className="social-icon" />
                </a>
                <a href="#">
                  <AiOutlineWhatsApp className="social-icon" />
                </a>
                {/* <a href="#">
                  <AiFillGithub className="social-icon" />
                </a> */}
                <a href="#">
                  <AiFillInstagram className="social-icon" />
                </a>
                {/* <a href="#">
                  <BsDiscord className="social-icon" />
                </a> */}
              </div>
            </div>
          </Col>
          <Col md={2} sm={6} xs={12} className="mb-4">
            <h4 className="footer-heading mb-4">Quicklinks</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">Messages</a>
              </li>
              <li>
                <a href="#">Giving</a>
              </li>
              <li>
                <a href="#">Programs</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Outreach</a>
              </li>
              <li>
                <a href="#">Small Groups</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </Col>
          <Col md={2} sm={6} xs={12} className="mb-4">
            <h4 className="footer-heading mb-4">Next Steps</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">Watch Sermons</a>
              </li>
              <li>
                <a href="#">Audio Messages</a>
              </li>
              <li>
                <a href="#">Testimonies</a>
              </li>
              <li>
                <a href="#">Request Prayer</a>
              </li>
              <li>
                <a href="#">E-Hub Learning</a>
              </li>
              <li>
                <a href="#"> Events</a>
              </li>
              <li>
                <a href="#">Join Workforce</a>
              </li>
            </ul>
          </Col>
          <Col md={4} sm={6} xs={12} className="mb-4">
            <h4 className="footer-heading mb-4">Stay Connected</h4>
            <p className="text-light mb-3">
              Subscribe to our newsletter for updates.
            </p>
            <div className="d-flex flex-column gap-1">
              <CustomInput
                placaholder="Enter your email"
                className="flex-grow-1 me-2 text-white"
              />
              <CustomButton
                title="Subscribe"
                type="primary"
                className="subscribe-btn"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom py-3">
        <Container>
          <p className="text-center text-light mb-0">
            &copy; {new Date().getFullYear()} Love Network Global. All rights
            reserved.
          </p>
        </Container>
      </div>
    </Footer>
  );
}
