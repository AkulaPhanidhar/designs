import React from "react";
import "./Navbar.css";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to={"/"} className="logo">
          Sniffy
        </Link>
        <div className="navLinksContainer">
          <Link to={"/"} className="navLinks">
            Home
          </Link>
          <Link to={"/"} className="navLinks">
            About
          </Link>
          <Link to={"/"} className="navLinks">
            Services
          </Link>
          <Link to={"/"} className="navLinks">
            Contact
          </Link>
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
