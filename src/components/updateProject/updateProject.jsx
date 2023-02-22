import axios from "axios";
import React, { useState } from "react";
import HashSpinner from "../HashSpinner/HashSpinner";
import "./updateProject.css";

const UpdateProject = (prop) => {
  const projectId = prop.projectId;
  const [title, setTitle] = useState(prop.title);
  const [description, setDescription] = useState(prop.description);
  const [email, setEmail] = useState(prop.email);
  const [updating, setUpdating] = useState(false);

  const handleProjectSubmit = async () => {
    if (
      title !== prop.title ||
      description !== prop.description ||
      email !== prop.email
    ) {
      setUpdating(true);
      const url = "/project/update";
      const data = {
        projectId,
        projectTitle: title,
        projectDescription: description,
        projectEmail: email,
      };
      const config = {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      };
      await axios
        .post(url, data, config)
        .then(() => {
          setUpdating(false);
          window.location = "/";
        })
        .catch((error) => {
          setUpdating(false);
        });
    }
  };

  return (
    <>
      <div className="updateProjectContainer">
        <div className="updateProjectForm">
          <div className="updateProjectFormElement">
            <div className="updateProjectFormElementLabel">Title</div>
            <div className="updateProjectFormElementInput">
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="updateProjectFormElement">
            <div className="updateProjectFormElementLabel">Description</div>
            <div className="updateProjectFormElementInput">
              <textarea
                rows={10}
                cols={40}
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </div>
          </div>
          <div className="updateProjectFormElement">
            <div className="updateProjectFormElementLabel">Email</div>
            <div className="updateProjectFormElementInput">
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="submitButton">
            {updating ? (
              <>
                <HashSpinner size={20} />
              </>
            ) : (
              <>
                <button
                  className="updateProjectButton"
                  onClick={() => {
                    handleProjectSubmit();
                  }}
                >
                  Update Project Data
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProject;
