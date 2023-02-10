import React from "react";
import { useNavigate } from "react-router-dom";
import ActivityLogs from "../ActivityLogs/ActivityLogs";
import Chat from "../Chat/Chat";
import ProjectComments from "../ProjectComments/ProjectComments";
import "./ExpertProject.css";

const ExpertProject = (prop) => {
  const projectId = prop.id;
  const role = "EXPERT";
  const navigate = useNavigate();

  const handleHomeClick = (url) => {
    navigate(url);
  };

  return (
    <>
      <div className="ExpertProjectContainer">
        <div className="ExpertProjectWrapper">
          <div className="LeftExpertProjectArea">
            <div
              className="homeNavigator"
              onClick={() => {
                handleHomeClick("/");
              }}
            >
              <i class="fa-solid fa-backward"></i>
              <div className="homeNavigatorText">Back</div>
            </div>
            <div className="ExpertProjectInfo">
              <div className="ExpertProjectInfoData">
                <div className="ExpertProjectInfoKey">Project ID</div>
                <div className="ExpertProjectInfoValue">14121</div>
              </div>
              <div className="ExpertProjectInfoData">
                <div className="ExpertProjectInfoKey">Available Developers</div>
                <div className="ExpertProjectInfoValue">2</div>
              </div>
              <div className="ExpertProjectInfoData">
                <div className="ExpertProjectInfoKey">Domain Expert</div>
                <div className="ExpertProjectInfoValue">Vedansh Dwivedi</div>
              </div>
            </div>
            <div className="ExpertProjectControls">
              <div className="ExpertProjectControlInfo">
                <div className="ExpertProjectControlInfoItem">
                  <div className="ExpertProjectControlKey">Project Title</div>
                  <div className="ExpertProjectControlValue">
                    Google Mobility Trends
                  </div>
                </div>
                <div className="ExpertProjectControlInfoItem">
                  <div className="ExpertProjectControlKey">
                    Project Algorithm
                  </div>
                  <div className="ExpertProjectControlValue">
                    XGBoost Regressor
                  </div>
                </div>
                <div className="ExpertProjectControlInfoItem">
                  <div className="ExpertProjectControlKey">Project Status</div>
                  <div className="ExpertProjectControlValue">CREATED</div>
                </div>
                <div className="ExpertProjectControlInfoItem">
                  <div className="ExpertProjectControlKey">Created At</div>
                  <div className="ExpertProjectControlValue">
                    Google Mobility Trends
                  </div>
                </div>
                <div className="ExpertProjectControlInfoItem">
                  <div className="ExpertProjectControlKey">Updated At</div>
                  <div className="ExpertProjectControlValue">
                    Google Mobility Trends
                  </div>
                </div>
                <div className="ExpertProjectControlInfoItem">
                  <div className="ExpertProjectControlKey">
                    Notifiction Email
                  </div>
                  <div className="ExpertProjectControlValue">
                    vedanshdwivedi0@gmail
                  </div>
                </div>
                <div className="ExpertProjectControlInfoItem">
                  <div className="ExpertProjectControlKey">Project Dataset</div>
                  <div className="ExpertProjectControlValue">
                    <a href="#">Download Link</a>
                  </div>
                </div>
              </div>
              <div className="ExpertProjectControlButtons">
                <button className="ExpertProjectControlButton">
                  Approve Project
                </button>
                <button className="ExpertProjectControlButton">
                  Reject Project
                </button>
                <button className="ExpertProjectControlButton">
                  Ask for more info
                </button>
              </div>
            </div>
            <div className="ExpertProjectDescription">
              <div className="ExpertProjectDescriptionTitle">
                Project Description
              </div>
              <p className="ExpertProjectDescriptionContent">
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
            <div className="ExpertProjectComments">
              <ProjectComments id={projectId} role={"EXPERT"} />
            </div>
          </div>
          <div className="RightExpertProjectArea">
            <div className="ExpertActivityLogs">
              <ActivityLogs id={projectId} />
            </div>
            <div className="ExpertChatArea">
              <Chat id={projectId} role={"DEVELOPER"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpertProject;
