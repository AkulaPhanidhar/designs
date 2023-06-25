import React from "react";
import "./Login.css";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login">
        <Link to={"/"}>
          <button className="backButton">
            <HiArrowNarrowLeft className="arrow" size={"25px"} />
          </button>
        </Link>
        <div className="loginContainer"></div>
      </div>
    </>
  );
};

export default Login;
