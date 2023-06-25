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
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="loginContainer">
          <p className="loginText">Login</p>
          <div className="inputContainer">
            <input
              className="loginInput"
              type="mail"
              placeholder="Mail ID"
              required
            />
            <input
              className="loginInput"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="buttonContainer">
            <button onClick={""} className="loginButton">
              Login
            </button>
            <p className="account">
              Don't have an account ?{" "}
              <Link to={"/signup"} className="link">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
