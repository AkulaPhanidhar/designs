import React from "react";
import "./Navbar.css";
import { HiArrowNarrowRight } from "react-icons/hi";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <p className="logo">Sniffy</p>
        <div className="navLinksContainer">
          <p className="navLinks">Home</p>
          <p className="navLinks">About</p>
          <p className="navLinks">Services</p>
          <p className="navLinks">Contact</p>
          <button className="getStartedButton">
            Get Started{" "}
            <HiArrowNarrowRight
              style={{ background: "transparent" }}
              size={"25px"}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
