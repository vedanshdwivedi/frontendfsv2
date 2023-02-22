import { React, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import UserProject from "../../components/UserProject/UserProject";
import DeveloperProject from "../../components/DeveloperProject/DeveloperProject";
import ExpertProject from "../../components/ExpertProject/ExpertProject";
import "./project.css";
const _ = require("lodash");

const Project = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  const location = useLocation();

  const projectId = _.get(location, "state.id", null);
  const role = _.get(location, "state.role", null);
  const title = _.get(location, "state.title", null);
  const description = _.get(location, "state.description", null);
  const status = _.get(location, "state.status", null);
  const email = _.get(location, "state.email", null);
  const algorithm = _.get(location, "state.algorithm", null);
  const createdAt = _.get(location, "state.createdAt", null);
  const updatedAt = _.get(location, "state.updatedAt", null);
  const expert = _.get(location, "state.expert", null);
  const developer = _.get(location, "state.developer", null);

  return (
    <>
      <div>
        <Navbar page="project" />
        <div className="projectContainer">
          {role === "USER" ? (
            <UserProject
              id={projectId}
              title={title}
              description={description}
              status={status}
              email={email}
              algorithm={algorithm}
              createdAt={createdAt}
              updatedAt={updatedAt}
              developer={developer}
              expert={expert}
            />
          ) : role === "DEVELOPER" ? (
            <DeveloperProject id={projectId} />
          ) : role === "EXPERT" ? (
            <ExpertProject id={projectId} />
          ) : (
            <h1>You are not supposed to be here</h1>
          )}
        </div>
        {role !== "DEVELOPER" ? <Footer /> : ""}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Project;
