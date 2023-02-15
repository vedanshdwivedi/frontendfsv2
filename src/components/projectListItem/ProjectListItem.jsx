import "./ProjectListItem.css";
import { React } from "react";
import { useNavigate } from "react-router-dom";
import { formatDateString } from "../../utility";

const ProjectListItem = (prop) => {
  const navigate = useNavigate();
  const projectId = prop.projectId;
  const role = prop.role;
  const title = prop.projectTitle;
  const description = prop.projectDescription;
  const status = prop.projectStatus;
  const email = prop.projectEmail;
  const algortihm = prop.projectAlgorithm;
  const createdAt = prop.createdAt;
  const updatedAt = prop.updatedAt;

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
            <div className="ProjectValue">{title}</div>
          </div>
          <div className="rightProjectListItem">
            <div className="ProjectLabel">
              <i className="fa-solid fa-list-ol"></i>
              <label>Status</label>
            </div>
            <div className="ProjectValue">{status.toUpperCase()}</div>
          </div>
          <div className="rightProjectListItem">
            <div className="ProjectLabel">
              <i className="fa-regular fa-at"></i>
              <label>Notification Email</label>
            </div>
            <div className="ProjectValue">{email}</div>
          </div>
          <div className="rightProjectListItem">
            <div className="ProjectLabel">
              <i className="fa-solid fa-code-branch"></i>
              <label>Algorithm</label>
            </div>
            <div className="ProjectValue">{algortihm.toUpperCase()}</div>
          </div>
          <div className="rightProjectListItem">
            <div className="ProjectLabel">
              <i className="fa-solid fa-clock"></i>
              <label>Created Date</label>
            </div>
            <div className="ProjectValue">{formatDateString(createdAt)}</div>
          </div>
          <div className="rightProjectListItem">
            <div className="ProjectLabel">
              <i className="fa-solid fa-pen"></i>
              <label>Last Updated</label>
            </div>
            <div className="ProjectValue">{formatDateString(updatedAt)}</div>
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
              <p align="justify">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectListItem;
