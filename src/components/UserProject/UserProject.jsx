import React from "react";
import { useNavigate } from "react-router-dom";
import ActivityLogs from "../ActivityLogs/ActivityLogs";
import Chat from "../Chat/Chat";
import UserTasks from "../UserTasks/UserTasks";
import ProjectComments from "../ProjectComments/ProjectComments"
import "./UserProject.css";

const UserProject = (prop) => {
  const navigate = useNavigate();

  const handleHomeClick = (url) => {
    navigate(url);
  };

  const projectId = prop.id;
  return (
    <>
      <div className="userProjectContainer">
        <div className="userProjectWrapper">
          <div className="leftUserProjectArea">
            <div
              className="homeNavigator"
              onClick={() => {
                handleHomeClick("/");
              }}
            >
              <i className="fa-solid fa-backward"></i>
              <div className="homeNavigatorText">Back</div>
            </div>
            <div className="projectOwnerInfo">
              <div className="projectOwnerInfoData">
                <div className="projectOwnerInfoKey">Project ID</div>
                <div className="projectOwnerInfoValue">14324</div>
              </div>
              <div className="projectOwnerInfoData">
                <div className="projectOwnerInfoKey">Developer</div>
                <div className="projectOwnerInfoValue">Vedansh Dwivedi</div>
              </div>
              <div className="projectOwnerInfoData">
                <div className="projectOwnerInfoKey">Domain Expert</div>
                <div className="projectOwnerInfoValue">Vedansh Dwivedi</div>
              </div>
            </div>
            <div className="projectControlArea">
              <div className="leftProjectControlArea">
                <div className="leftProjectControlAreaItem">
                  <div className="leftProjectControlAreaKey">Project Title</div>
                  <div className="leftProjectControlAreaValue">
                    Google Mobility Trends
                  </div>
                </div>
                <div className="leftProjectControlAreaItem">
                  <div className="leftProjectControlAreaKey">
                    Project Algorithm
                  </div>
                  <div className="leftProjectControlAreaValue">
                    XGBoost Regressor
                  </div>
                </div>
                <div className="leftProjectControlAreaItem">
                  <div className="leftProjectControlAreaKey">
                    Project Status
                  </div>
                  <div className="leftProjectControlAreaValue">CREATED</div>
                </div>
                <div className="leftProjectControlAreaItem">
                  <div className="leftProjectControlAreaKey">Created At</div>
                  <div className="leftProjectControlAreaValue">
                    Google Mobility Trends
                  </div>
                </div>
                <div className="leftProjectControlAreaItem">
                  <div className="leftProjectControlAreaKey">
                    Last Updated At
                  </div>
                  <div className="leftProjectControlAreaValue">
                    Google Mobility Trends
                  </div>
                </div>
                <div className="leftProjectControlAreaItem">
                  <div className="leftProjectControlAreaKey">
                    Notification Email
                  </div>
                  <div className="leftProjectControlAreaValue">
                    vedanshchandradwivedi@gmail.com
                  </div>
                </div>
                <div className="leftProjectControlAreaItem">
                  <div className="leftProjectControlAreaKey">
                    Project Dataset
                  </div>
                  <div className="leftProjectControlAreaValue">
                    <a href="#">Dataset Link</a>
                  </div>
                </div>
              </div>
              <div className="rightProjectControlArea">
                <button className="rightProjectControlAreaButton">
                  Edit Project Info
                </button>
                <button className="rightProjectControlAreaButton">
                  Edit Project Dataset
                </button>
                <button className="rightProjectControlAreaButton">
                  Create a Prediction Task
                </button>
                <button className="rightProjectControlAreaButton">
                  Delete Project
                </button>
              </div>
            </div>
            <div className="projectDescriptionBox">
              <div className="projectDescriptionTitle">Project Description</div>
              <p className="projectDescriptionContent" align="justify">
                This is some random text to simulate the behaviour of the a long
                passage to occupy the area for the project description. The left
                sidebar is only supposed to have the project description. I need
                to figure out how can I add that read more implementation. I am
                adding more gibberish texts in order to occupy more area on the
                frontend.This is some random text to simulate the behaviour of
                the a long passage to occupy the area for the project
                description. The left sidebar is only supposed to have the
                project description. I need to figure out how can I add that
                read more implementation. I am adding more gibberish texts in
                order to occupy more area on the frontend. This is some random
                text to simulate the behaviour of the a long passage to occupy
                the area for the project description. The left sidebar is only
                supposed to have the project description. I need to figure out
                how can I add that read more implementation. I am adding more
                gibberish texts in order to occupy more area on the frontend.
              </p>
            </div>
            <div className="UserProjectCommentArea">
              <ProjectComments id={projectId} role={"USER"} />
            </div>
            <div className="predictionTable">
              <div className="predictionTableTitle">Prediction Tasks</div>
              <div className="predictionTableElement">
                <UserTasks id={projectId} />
              </div>
            </div>
          </div>
          <div className="rightUserProjectArea">
            <div className="activityLogsContainer">
              <ActivityLogs id={projectId} />
            </div>
            <div className="chatContainer">
              <Chat id={projectId} role={"USER"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProject;
