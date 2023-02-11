import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DevProjectTable from "../../components/DevProjectTable/DevProjectTable";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./DevHome.css";

const DevHome = (prop) => {
  const devId = prop.id;
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <div>
        <Navbar page="dev" />
        <div className="devHomeContainer">
          <div className="devHomeTitle">Assigned Projects</div>
          <div className="devHomeWrapper">
            <DevProjectTable id={devId} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DevHome;
