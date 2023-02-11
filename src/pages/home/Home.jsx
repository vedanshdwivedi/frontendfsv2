import "./Home.css";
import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import ProjectListItem from "../../components/projectListItem/ProjectListItem";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Navbar page="home" />
      <Header />
      <div className="HomeContainer">
        <div className="HomeWrapper">
          <div className="Projects">
            <ProjectListItem projectId={1} role={"USER"} />
            <ProjectListItem projectId={2} role={"DEVELOPER"} />
            <ProjectListItem projectId={3} role={"EXPERT"} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
