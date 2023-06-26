import React from "react";
import "./Signup.css";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="login">
        <Link to={"/"}>
          <button className="backButton">
            <HiArrowNarrowLeft className="arrow" size={"25px"} />
          </button>
        </Link>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="loginContainer">
          <p className="loginText">Login</p>
          <div className="inputContainer">
            <div className="nameContainer">
              <input
                className="loginInput"
                type="text"
                placeholder="First Name"
                required
              />
              <input
                className="loginInput"
                type="text"
                placeholder="Last Name"
                required
              />
            </div>
            <input
              className="loginInput"
              type="number"
              placeholder="Phone Number"
              required
            />
            <input
              className="loginInput"
              type="mail"
              placeholder="Mail ID"
              required
            />
            <input
              className="loginInput"
              type="password"
              placeholder="New Password"
              required
            />
          </div>
          <div className="buttonContainer">
            <p className="account">
              {" "}
              <input className="checkBox" type="checkbox" />I agree to the{" "}
              <Link to={"/terms"} className="link">
                Terms and Conditions
              </Link>
            </p>
            <button onClick={""} className="loginButton">
              Get OTP
            </button>
            <p className="account">
              Already have an account ?{" "}
              <Link to={"/login"} className="link">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
