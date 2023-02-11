import "./ExpertHome.css";
import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import AgentsTable from "../../components/AgentsTable/AgentsTable";
import ExpertProjectList from "../../components/ExpertProjectList/ExpertProjectList";
import ExpertAgentsList from "../../components/ExpertAgentsList/ExpertAgentsList";
import Chat from "../../components/Chat/Chat";
import { useNavigate } from "react-router-dom";
const _ = require("lodash");

const ExpertHome = (prop) => {
  const expertId = prop.id;
  const projectId = _.get(prop, "projectId", null);

  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Navbar page="expert" />
      <div className="ExpertHomeContainer">
        <div className="ExpertHomeWrapper">
          <div className="LeftExpertHomeArea">
            <div className="AgentsMonitorTable">
              <AgentsTable />
            </div>
            <div className="ExpertProjectChatArea">
              <div className="ExpertProjectList">
                <ExpertProjectList />
              </div>
              <div className="ExpertChatWindow">
                <Chat role={"DEVELOPER"} id={projectId} />{" "}
              </div>
            </div>
          </div>
          <div className="RightExpertHomeArea">
            <ExpertAgentsList />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ExpertHome;
