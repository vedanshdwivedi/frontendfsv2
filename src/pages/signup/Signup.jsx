import "./Signup.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [lname, setLname] = useState("");
  const [fname, setFname] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [signupErrors, setSignupErrors] = useState(null);

  const capitalizeFirst = (content) => {
    return content.charAt(0).toUpperCase() + content.slice(1).toLowerCase();
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);

  const handleSignUp = async () => {
    setSignupErrors(null);
    setLoading(true);
    const data = {
      name: `${fname} ${lname}`,
      email: email,
      password: password,
    };
    const config = {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
    const url = "/auth/";
    await axios
      .post(url, data, config)
      .then((response) => {
        setEmail("");
        setPassword("");
        setFname("");
        setLname("");
        setLoading(false);
        if (response.status === 200 || response.status === 201) {
          navigate("/login");
        }
      })
      .catch((error) => {
        setPassword("");
        setLoading(false);
        if (error.response.data.message) {
          setSignupErrors(error.response.data.message);
        }
      });
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
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="signupFormItem">
            <input
              type="text"
              value={fname}
              placeholder="First Name"
              onChange={(e) => {
                setFname(capitalizeFirst(e.target.value));
              }}
            />
          </div>
          <div className="signupFormItem">
            <input
              type="text"
              value={lname}
              placeholder="Last Name"
              onChange={(e) => {
                setLname(capitalizeFirst(e.target.value));
              }}
            />
          </div>
          <div className="signupFormItem">
            <input
              type="password"
              value={password}
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
                  handleSignUp();
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
              navigate("/login");
            }}
          >
            {}
            Login, if you already have an account
          </div>
        </div>
        {signupErrors === null ? (
          ""
        ) : (
          <>
            <div className="signupError" onClick={() => {}}>
              <p align="center">{signupErrors}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Signup;
