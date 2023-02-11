import "./Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [loginErrors, setLoginErrors] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNavigate = (urlPath) => {
    navigate(urlPath);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);

  const handleLoginClick = async () => {
    setLoginErrors(null);
    const url = "/auth/login";
    const data = {
      email,
      password,
    };
    const config = {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
    await axios
      .post(url, data, config)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("token", response.data.data);
          window.location = "/";
        }
      })
      .catch((error) => {
        setPassword("");
        if (error.response.data.message) {
          setLoginErrors(error.response.data.message);
        }
      });
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <h1 className="loginTitle">Please enter your login and password!</h1>
        <div className="loginForm">
          <div className="loginFormItem">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="loginFormItem">
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="forgotPasswordContainer">
            <h3 className="forgotPassword">Forgot Password?</h3>
          </div>
          <div className="loginButtonWrapper">
            <button
              className={
                email !== "" && password !== ""
                  ? "loginButton"
                  : "loginButton disabledButton"
              }
              onClick={() => {
                if (email !== "" && password !== "") {
                  handleLoginClick();
                }
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
              if (email !== "" && password !== "") {
                handleNavigate("/signup");
              }
            }}
          >
            Sign Up to create new account
          </div>
        </div>
        {loginErrors === null ? (
          ""
        ) : (
          <>
            <div className="loginError" onClick={() => {}}>
              <p align="center">{loginErrors}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
