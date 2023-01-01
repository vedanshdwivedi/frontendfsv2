import "./CreateProject.css";
import React from "react";
import Navbar from "../../components/navbar/Navbar";

const CreateProject = () => {
  return (
    <>
      <Navbar />
      <div className="CreateProject">
        <div className="CreateProjectWrapper">
          <h1 className="createProjectTitle">Create Project</h1>
          <form className="CreateProjectForm">
            <div className="CreateProjectFormItem">
              <div className="CreateProjectFormItemLabel">
                <i className="fa-solid fa-signature"></i>
                <label>Project Title</label>
              </div>
              <input
                type="text"
                placeholder="A name for your project"
                required
              />
            </div>
            <div className="CreateProjectFormItem">
              <div className="CreateProjectFormItemLabel">
                <i className="fa-regular fa-at"></i>
                <label>Email</label>
              </div>
              <input
                type="text"
                placeholder="Email to receive project notifications"
                required
              />
            </div>
            <div className="CreateProjectFormItem">
              <div className="CreateProjectFormItemLabel">
                <i className="fa-solid fa-file"></i>
                <label>Description</label>
              </div>
              <textarea
                rows="4"
                cols="43"
                placeholder="Project Description"
                required
              />
            </div>
          </form>
          <div className="CreateProjectSubmitButton">
            <button className="CreateProjectFormButton">Create Project</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProject;
