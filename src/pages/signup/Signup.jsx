import "./Signup.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [lname, setLname] = useState("");
  const [fname, setFname] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleNavigate = (urlPath) => {
    navigate(urlPath);
  };

  return (
    <div className="SignupContainer">
      <div className="signupWrapper">
        <h1 className="signupTitle">Enter Details to Sign Up</h1>
        <div className="signupForm">
          <div className="signupFormItem">
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="signupFormItem">
            <input
              type="text"
              placeholder="First Name"
              onChange={(e) => {
                setFname(e.target.value);
              }}
            />
          </div>
          <div className="signupFormItem">
            <input
              type="text"
              placeholder="Last Name"
              onChange={(e) => {
                setLname(e.target.value);
              }}
            />
          </div>
          <div className="signupFormItem">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="signupButtonWrapper">
            <button
              className={
                email !== "" && password !== "" && fname !== "" && lname !== ""
                  ? "signupButton"
                  : "signupButton disabledButton"
              }
              onClick={() => {
                if (
                  email !== "" &&
                  password !== "" &&
                  fname !== "" &&
                  lname !== ""
                ) {
                  handleNavigate("/");
                }
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
        <div className="loginButtonWrapper">
          <div
            className="loginButtonNavigator"
            onClick={() => {
              handleNavigate("/login");
            }}
          >
            Login, if you already have an account
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
