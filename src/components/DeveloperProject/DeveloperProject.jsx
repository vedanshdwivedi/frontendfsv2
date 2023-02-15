import React, { useState } from "react";
import "./DeveloperProject.css";
import { useNavigate } from "react-router-dom";
import Chat from "../Chat/Chat";
import ActivityLogs from "../ActivityLogs/ActivityLogs";
import ProjectComments from "../ProjectComments/ProjectComments";

const DeveloperProject = (prop) => {
  const projectId = prop.id;
  const navigate = useNavigate();
  const [showExpertChatScreen, setShowExpertChatScreen] = useState(false);

  const handleHomeClick = (url) => {
    navigate(url);
  };
  return (
    <div className="devProjectContainer">
      <div className="devProjectWrapper">
        <div className="leftDevProjectArea">
          <div
            className="homeNavigator"
            onClick={() => {
              handleHomeClick("/dev");
            }}
          >
            <i className="fa-solid fa-backward"></i>
            <div className="homeNavigatorText">Back</div>
          </div>
          <div className="devProjectBasicInfo">
            <div className="devProjectBasicInfoData">
              <div className="devProjectBasicInfoKey">Project Id</div>
              <div className="devProjectBasicInfoValue">14324</div>
            </div>
            <div className="devProjectBasicInfoData">
              <div className="devProjectBasicInfoKey">Project Owner</div>
              <div className="devProjectBasicInfoValue">Albert Einstein</div>
            </div>
            <div className="devProjectBasicInfoData">
              <div className="devProjectBasicInfoKey">Domain Expert</div>
              <div className="devProjectBasicInfoValue">Vedansh Dwivedi</div>
            </div>
          </div>
          <div className="devProjectControls">
            <div className="devProjectControlInfo">
              <div className="devProjectControlInfoItem">
                <div className="devProjectControlInfoKey">Project Title</div>
                <div className="devProjectControlInfoValue">
                  Google Mobility Trends
                </div>
              </div>
              <div className="devProjectControlInfoItem">
                <div className="devProjectControlInfoKey">
                  Project Algorithm
                </div>
                <div className="devProjectControlInfoValue">
                  XGBoost Regressor
                </div>
              </div>
              <div className="devProjectControlInfoItem">
                <div className="devProjectControlInfoKey">Project Status</div>
                <div className="devProjectControlInfoValue">CREATED</div>
              </div>
              <div className="devProjectControlInfoItem">
                <div className="devProjectControlInfoKey">Created At</div>
                <div className="devProjectControlInfoValue">
                  Google Mobility Trends
                </div>
              </div>
              <div className="devProjectControlInfoItem">
                <div className="devProjectControlInfoKey">Last Updated At</div>
                <div className="devProjectControlInfoValue">
                  Google Mobility Trends
                </div>
              </div>
              <div className="devProjectControlInfoItem">
                <div className="devProjectControlInfoKey">
                  Notification Email
                </div>
                <div className="devProjectControlInfoValue">
                  vedanshdwivedi0@gmail.com
                </div>
              </div>
              <div className="devProjectControlInfoItem">
                <div className="devProjectControlInfoKey">Project Dataset</div>
                <div className="devProjectControlInfoValue">
                  <a href="#">Dataset Link</a>
                </div>
              </div>
            </div>
            <div className="devProjectControlButtons">
              <div className="uploadTransformationClassForm">
                <form>
                  <div className="formElement">
                    <div className="formElementLabel">
                      Upload Transformation File
                    </div>
                    <input type="file"></input>
                  </div>
                  <div className="formElement">
                    <button className="uploadTransformationFileButton">
                      Upload
                    </button>
                  </div>
                </form>
              </div>
              <div className="UpdateProjectStatusForm">
                <div className="formElement">
                  <div className="formElementLabel">Update Project Status</div>
                  <select className="updateFromSelect">
                    <option value="CREATED" selected>CREATED</option>
                    <option value="CREATED">REJECTED</option>
                    <option value="CREATED">IN-PROGRESS</option>
                  </select>
                </div>
                <button className="uploadTransformationFileButton">
                  Update Status
                </button>
              </div>
            </div>
          </div>
          <div className="devProjectDescription">
            <div className="devProjectDescriptionTitle">
              Project Description
            </div>
            <p className="devProjectDescriptionContent" align="justify">
              This is some random text to simulate the behaviour of the a long
              passage to occupy the area for the project description. The left
              sidebar is only supposed to have the project description. I need
              to figure out how can I add that read more implementation. I am
              adding more gibberish texts in order to occupy more area on the
              frontend.This is some random text to simulate the behaviour of the
              a long passage to occupy the area for the project description. The
              left sidebar is only supposed to have the project description. I
              need to figure out how can I add that read more implementation. I
              am adding more gibberish texts in order to occupy more area on the
              frontend. This is some random text to simulate the behaviour of
              the a long passage to occupy the area for the project description.
              The left sidebar is only supposed to have the project description.
              I need to figure out how can I add that read more implementation.
              I am adding more gibberish texts in order to occupy more area on
              the frontend.
            </p>
          </div>
          <div className="UserProjectCommentArea">
              <ProjectComments id={projectId} role={"DEVELOPER"} />
            </div>
          <div className="expertChatArea">
            <div
              className="expertChatAreaBubble"
              onClick={() => {
                setShowExpertChatScreen(!showExpertChatScreen);
                console.log(showExpertChatScreen);
              }}
            >
              Chat with Domain Expert
            </div>
            {showExpertChatScreen ? (
              <div className="expertChatAreaContainer">
                <Chat id={projectId} role={"DEVELOPER"} />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="rightDevProjectArea">
          <div className="devActivityLogs">
            <ActivityLogs id={projectId} />
          </div>
          <div className="devChatArea">
            <Chat id={projectId} role={"DEVELOPER"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperProject;
