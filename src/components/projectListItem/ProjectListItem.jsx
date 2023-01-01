import "./ProjectListItem.css";
import React from "react";

const ProjectListItem = () => {
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
            <div className="ProjectValue">XG Boost Regressor</div>
          </div>
          <div className="rightProjectListItem">
            <div className="ProjectLabel">
              <i className="fa-solid fa-pen"></i>
              <label>Last Updated</label>
            </div>
            <div className="ProjectValue">XG Boost Regressor</div>
          </div>
          <div className="rightProjectListItem">
            <div className="ProjectLabel">
              <i className="fa-regular fa-file"></i>
              <label>Description</label>
            </div>
            <div className="ProjectValue">XG Boost Regressor</div>
          </div>
        </div>
        <div className="leftProjectListItems">Left</div>
      </div>
    </div>
  );
};

export default ProjectListItem;
