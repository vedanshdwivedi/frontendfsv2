import { React } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import UserProject from "../../components/UserProject/UserProject";
import DeveloperProject from "../../components/DeveloperProject/DeveloperProject";
import ExpertProject from "../../components/ExpertProject/ExpertProject";
import "./project.css";
const _ = require("lodash");

const Project = () => {
  const location = useLocation();

  console.log(location.state);
  const projectId = _.get(location, "state.id", null);
  const role = _.get(location, "state.role", null);

  return (
    <>
      <div>
        <Navbar page="project" />
        <div className="projectContainer">
          {role === "USER" ? (
            <UserProject id={projectId} />
          ) : role === "DEVELOPER" ? (
            <DeveloperProject id={projectId} />
          ) : role === "EXPERT" ? (
            <ExpertProject id={projectId} />
          ) : (
            <h1>You are not supposed to be here</h1>
          )}
        </div>
        {/* {role !== "USER" ? <Footer /> : ""} */}
        <Footer />
      </div>
    </>
  );
};

export default Project;
