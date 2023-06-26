import React, { useState } from "react";
import "./Navbar.css";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(1);

  return (
    <>
      <div className="navbar">
        <Link to={"/"} className="logo">
          PathfindersUK
        </Link>
        <div className="navLinksContainer">
          <Link
            to={"/"}
            onClick={() => setActive(1)}
            id={`${active === 1 ? "active" : ""}`}
            className={`${active === 1 ? "" : "navLinks"}`}
          >
            Home
          </Link>
          <Link
            to={"/about"}
            onClick={() => setActive(2)}
            id={`${active === 2 ? "active" : ""}`}
            className={`${active === 2 ? "" : "navLinks"}`}
          >
            About
          </Link>
          <Link
            to={"/services"}
            onClick={() => setActive(3)}
            id={`${active === 3 ? "active" : ""}`}
            className={`${active === 3 ? "" : "navLinks"}`}
          >
            Services
          </Link>
          <Link
            to={"/contact"}
            onClick={() => setActive(4)}
            id={`${active === 4 ? "active" : ""}`}
            className={`${active === 4 ? "" : "navLinks"}`}
          >
            Contact
          </Link>
          <Link
            to={"/login"}
            style={{ background: "transparent", borderRadius: "5px" }}
          >
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
