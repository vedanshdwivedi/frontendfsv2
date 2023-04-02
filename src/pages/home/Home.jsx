import "./Home.css";
import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import ProjectListItem from "../../components/projectListItem/ProjectListItem";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import HashSpinner from "../../components/HashSpinner/HashSpinner";
const _ = require("lodash");

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [projectList, setProjectList] = useState([]);
  const [role, setRole] = useState(localStorage.getItem("role"));
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      setRole(localStorage.getItem("role"));
      if (role === "DEVELOPER") {
        navigate("/dev");
      }
      fetchProjects();
    }
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    const authToken = localStorage.getItem("token");
    const url = "/project";
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: localStorage.getItem("token"),
      },
    };
    await axios
      .get(url, config)
      .then((response) => {
        setLoading(false);
        if (response.status === 200) {
          const projects = _.get(response, "data.data", []);
          if (projects.length > 0) {
            setProjectList(projects);
          }
        }
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401) {
          localStorage.clear();
          window.location = "/";
        }
      });
  };

  return (
    <div>
      <Navbar page="home" />
      <Header />
      <div className="HomeContainer">
        <div className="HomeWrapper">
          <div className="Projects">
            {loading ? (
              <HashSpinner size={40} />
            ) : projectList.length > 0 ? (
              projectList.map((project) => {
                return (
                  <ProjectListItem
                    projectTitle={project.title}
                    projectDescription={project.description}
                    projectStatus={project.status}
                    projectEmail={project.email}
                    projectAlgorithm={project.algorithm}
                    createdAt={Date(project.createdAt)}
                    updatedAt={Date(project.updatedAt)}
                    projectId={project.pid}
                    expert={project.expert}
                    developer={project.developer}
                    role={role}
                  />
                );
              })
            ) : (
              <>
                <div
                  className="CreateProjectLink"
                  onClick={() => {
                    navigate("/create");
                  }}
                >
                  No Projects Found, Create a Project !!
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
