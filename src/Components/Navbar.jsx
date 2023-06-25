import React from "react";
import "./Navbar.css";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to={"/"}>
          <p className="logo">Sniffy</p>
        </Link>
        <div className="navLinksContainer">
          <p className="navLinks">Home</p>
          <p className="navLinks">About</p>
          <p className="navLinks">Services</p>
          <p className="navLinks">Contact</p>
          <Link to={"/login"}>
            <button className="getStartedButton">
              Get Started{" "}
              <HiArrowNarrowRight
                style={{ background: "transparent" }}
                size={"25px"}
              />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
