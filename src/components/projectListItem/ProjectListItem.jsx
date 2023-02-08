import "./ProjectListItem.css";
import { React } from "react";
import { useNavigate } from "react-router-dom";

const ProjectListItem = (prop) => {
  const navigate = useNavigate();
  const projectId = prop.projectId;
  const role = prop.role;

  const deleteProject = async () => {
    console.log("Deleting Project");
  };

  const openProject = () => {
    navigate("/project", { state: { id: projectId, role: role } });
  };

  return (
    <div className="ProjectListItem">
      <div className="ProjectListItemWrapper">
        <div className="rightProjectListItems">
          <div className="rightProjectListItem">
            <div className="ProjectLabel">
              <i className="fa-solid fa-signature"></i>
              <label>Title</label>
            </div>
            <div className="ProjectValue">AI Regressor</div>
          </div>
          <div className="rightProjectListItem">
            <div className="ProjectLabel">
              <i className="fa-solid fa-list-ol"></i>
              <label>Status</label>
            </div>
            <div className="ProjectValue">CREATED</div>
          </div>
          <div className="rightProjectListItem">
            <div className="ProjectLabel">
              <i className="fa-regular fa-at"></i>
              <label>Notification Email</label>
            </div>
            <div className="ProjectValue">vedansh@gmail.com</div>
          </div>
          <div className="rightProjectListItem">
            <div className="ProjectLabel">
              <i className="fa-solid fa-code-branch"></i>
              <label>Algorithm</label>
            </div>
            <div className="ProjectValue">XG Boost Regressor</div>
          </div>
          <div className="rightProjectListItem">
            <div className="ProjectLabel">
              <i className="fa-solid fa-clock"></i>
              <label>Created Date</label>
            </div>
            <div className="ProjectValue">27 January 2023, 12:04 PM UTC</div>
          </div>
          <div className="rightProjectListItem">
            <div className="ProjectLabel">
              <i className="fa-solid fa-pen"></i>
              <label>Last Updated</label>
            </div>
            <div className="ProjectValue">27 January 2023, 12:04 PM UTC</div>
          </div>
          <div className="ProjectListItemControl">
            <div className="ProjectListItemControlElement">
              <button
                className="actionButton"
                onClick={() => {
                  openProject();
                }}
              >
                Open Project
              </button>
            </div>
            <div className="ProjectListItemControlElement">
              <button
                className="actionButton"
                onClick={() => {
                  deleteProject();
                }}
              >
                Delete Project
              </button>
            </div>
          </div>
        </div>
        <div className="leftProjectListItems">
          <div className="leftProjectListItem">
            <div className="DescriptionTitle ProjectLabel">
              <i className="fa-regular fa-file"></i>
              <label>Description</label>
            </div>
            <div className="DescriptionText ProjectValue">
              <p align="justify">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectListItem;
