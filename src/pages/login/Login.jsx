import "./Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleNavigate = (urlPath) => {
    navigate(urlPath);
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <h1 className="loginTitle">Please enter your login and password!</h1>
        <div className="loginForm">
          <div className="loginFormItem">
            <input type="text" placeholder="Email" />
          </div>
          <div className="loginFormItem">
            <input type="password" placeholder="Password" />
          </div>
          <div className="forgotPasswordContainer">
            <h3 className="forgotPassword">Forgot Password?</h3>
          </div>
          <div className="loginButtonWrapper">
            <button
              className="loginButton"
              onClick={() => {
                handleNavigate("/");
              }}
            >
              Login
            </button>
          </div>
        </div>
        <div className="socialButtons">
          <div className="socialButtonItem">
            <i className="fa-brands fa-facebook"></i>
          </div>
          <div className="socialButtonItem">
            <i className="fa-brands fa-twitter"></i>
          </div>
          <div className="socialButtonItem">
            <i className="fa-brands fa-google"></i>
          </div>
        </div>
        <div className="signUp">
          <div
            className="signUpButton"
            onClick={() => {
              handleNavigate("/signup");
            }}
          >
            Sign Up
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
