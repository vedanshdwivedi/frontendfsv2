import "./Navbar.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = (prop) => {
  const navigate = useNavigate();
  const showCreateButton = prop.page === "home";

  const handleNavigate = (url_path) => {
    navigate(url_path);
  };

  const handleLogout = () => {
    localStorage.clear();
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
          {showCreateButton && (
            <div className="navbarItem">
              <i class="fa-solid fa-folder-plus"></i>
              <button
                className="createNavbarProjectButton"
                onClick={() => {
                  handleNavigate("/create");
                }}
              >
                Create Project
              </button>
            </div>
          )}
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
