import "./Navbar.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigate = (url_path) => {
    navigate(url_path);
  };

  const handleLogout = () => {
    handleNavigate("/login");
  };

  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div
          className="navbarTitle"
          onClick={() => {
            handleNavigate("/");
          }}
        >
          FeatureStore
        </div>
        <div className="navbarItems">
          <div className="navbarItem">
            <div className="logout">
              <i className="fa-solid fa-power-off"></i>
              <button className="logoutButton" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
