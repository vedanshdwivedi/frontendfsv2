import "./Header.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="HeaderContainer">
      <div className="HeaderWrapper">
        <h1 className="headerTitle">Hassle-free AI Projects, on the go!</h1>
        <h2 className="headerSubtitle">
          The best of AI and human brain, specially tailored for <b>YOUR</b>{" "}
          projects! It's Genius.
        </h2>
        <button
          className="createProjectButton"
          onClick={() => {
            navigate("/create");
          }}
        >
          Create Project
        </button>
      </div>
    </div>
  );
};

export default Header;
