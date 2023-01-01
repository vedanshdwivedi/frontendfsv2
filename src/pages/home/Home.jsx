import "./Home.css";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import ProjectListItem from "../../components/projectListItem/ProjectListItem";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar page="home" />
      <Header />
      <div className="HomeContainer">
        <div className="HomeWrapper">
          <div className="Projects">
            <ProjectListItem />
            <ProjectListItem />
            <ProjectListItem />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
