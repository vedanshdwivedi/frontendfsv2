import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DevProjectTable from "../../components/DevProjectTable/DevProjectTable";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./DevHome.css";

const DevHome = (prop) => {
  const devId = prop.id;
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("assigned");
  const [pageTitle, setPageTitle] = useState("Assigned Project");

  const handleStatusNavigation = (status) => {
    setSelectedTab(status);
    if (status === "assigned") {
      setPageTitle("Assigned Projects");
    } else if (status === "all") {
      setPageTitle("All Projects");
    } else if (status === "queued") {
      setPageTitle("Queued Projects");
    } else if (status === "completed") {
      setPageTitle("Completed Projects");
    }
  };

  useEffect(() => {
    handleStatusNavigation(selectedTab)
    const role = localStorage.getItem("role");

    if (role !== "DEVELOPER") {
      window.location = "/";
    }

    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <div>
        <Navbar page="dev" />
        <div className="DevNavigatorContainer">
          <div className="DevNavigatorWrapper">
            <div
              className="DevNavigatorElement"
              onClick={() => {
                handleStatusNavigation("assigned");
              }}
            >
              Assgined Projects
            </div>
            <div
              className="DevNavigatorElement"
              onClick={() => {
                handleStatusNavigation("queued");
              }}
            >
              Queued Projects
            </div>
            <div
              className="DevNavigatorElement"
              onClick={() => {
                handleStatusNavigation("completed");
              }}
            >
              Completed Projects
            </div>
            <div
              className="DevNavigatorElement"
              onClick={() => {
                handleStatusNavigation("all");
              }}
            >
              All Projects
            </div>
          </div>
        </div>
        <div className="devHomeContainer">
          <div className="devHomeTitle">{pageTitle}</div>
          <div className="devHomeWrapper">
            {selectedTab === "assigned" ? (
              <>
                <DevProjectTable id={devId} tab={"IN PROGRESS"} />
              </>
            ) : selectedTab === "queued" ? (
              <>
                <DevProjectTable id={devId} tab={"ON HOLD"} />
              </>
            ) : selectedTab === "completed" ? (
              <>
                <DevProjectTable id={devId} tab={"COMPLETED"} />
              </>
            ) : selectedTab === "all" ? (
              <>
                <DevProjectTable id={devId} tab={selectedTab} />
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DevHome;
