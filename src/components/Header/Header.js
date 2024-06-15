"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../common/CustomButton";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import { resetState } from "@/features/user/useSlice";

import "./header.css";
import Image from "next/image";
// import { useEffect } from "react";

export default function Header() {
  const userState = useSelector((state) => state?.user?.user);
  const pathname = usePathname();

  const dispatch = useDispatch();
  const router = useRouter();

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     console.log("Pathname:", window.location.pathname);
  //     console.log("Host:", window.location.host);
  //     console.log("Origin:", window.location.origin);
  //   }
  // }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary p-2"
      variant="light"
    >
      <Container fluid className="d-flex align-items-center">
        <Navbar.Brand
          href="/"
          className="footer-heading-color fs-bold fs-3 d-flex align-items-center"
        >
          <Image
            src="/images/avatars/logo.png"
            alt="logo"
            width={160}
            height={40} // Adjust this value based on your logo's aspect ratio
            className="me-3"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
          {/* LoveNetwork */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="header-menu">
          <Nav className="me-auto ">
            <Link
              style={{
                color: "#fff",
                fontWeight: "700",
              }}
              className={`fs-6 text-decoration-none me-4 ${
                pathname === "/" ? "active" : ""
              }`}
              href="/"
            >
              Home
            </Link>
            <Link
              style={{
                color: "#fff",
                fontWeight: "700",
              }}
              className={`fs-6 text-decoration-none me-4 ${
                pathname === "/messages" ? "active" : ""
              }`}
              href="/messages"
            >
              Messages
            </Link>

            <Link
              style={{
                color: "#fff",
                fontWeight: "700",
              }}
              className={`fs-6 text-decoration-none me-4 ${
                pathname === "/giving" ? "active" : ""
              }`}
              href="/giving"
            >
              Giving
            </Link>
            <Link
              style={{
                color: "#fff",
                fontWeight: "700",
              }}
              className={`fs-6 text-decoration-none me-4 ${
                pathname === "/contact" ? "active" : ""
              }`}
              href="/contact"
            >
              Contact Us
            </Link>
            <Link
              style={{
                color: "#fff",
                fontWeight: "700",
              }}
              className={`fs-6 text-decoration-none me-4 ${
                pathname === "/programmes" ? "active" : ""
              }`}
              href="/programmes"
            >
              Programs
            </Link>
          </Nav>
          <Nav>
            {userState?.data === undefined && (
              <Link
                className={`fs-6 text-decoration-none me-4 ${
                  pathname === "/about" ? "active" : ""
                }`}
                href="/about"
                style={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                About
              </Link>
            )}
            {userState?.data !== undefined ? (
              <CustomButton
                title="logout"
                type="link"
                className="text-dark"
                onClick={() => {
                  localStorage.clear();
                  dispatch(resetState());
                  Cookies.remove("Bearer");
                  router.push("/login");
                }}
              />
            ) : (
              <Link
                className="fs-6 text-decoration-none me-4"
                href="/login"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  padding: "1px 9px", // Adding padding for better appearance
                  color: "orangered",
                }}
              >
                login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
