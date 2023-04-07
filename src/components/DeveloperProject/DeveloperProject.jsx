import React, { useState } from "react";
import "./DeveloperProject.css";
import { useNavigate } from "react-router-dom";
import Chat from "../Chat/Chat";
import ActivityLogs from "../ActivityLogs/ActivityLogs";
import ProjectComments from "../ProjectComments/ProjectComments";
import axios from "axios";
import HashSpinner from "../HashSpinner/HashSpinner";
import { useEffect } from "react";
const _ = require("lodash");

const DeveloperProject = (prop) => {
  const projectId = prop.id;
  const title = prop.title;
  const uid = prop.uid;
  const description = prop.description;
  const status = prop.status;
  const email = prop.email;
  const algorithm = prop.algorithm;
  const createdAt = prop.createdAt;
  const updatedAt = prop.updatedAt;
  const developer = prop.developer;

  const [downloadLink, setDownloadLink] = useState("#");
  const [fetchingDownloadLink, setFetchingDownloadLink] = useState(false);
  const [stateList, setStateList] = useState([]);
  const [fetchingStateList, setFetchingStateList] = useState(true);
  const [fetchingThreadId, setFetchingThreadId] = useState(false);
  const [threadId, setThreadId] = useState("");
  const [receiver, setReceiver] = useState("");

  const navigate = useNavigate();

  const handleHomeClick = (url) => {
    navigate(url);
  };

  const fetchProjectDatasetDownloadLink = async () => {
    setFetchingDownloadLink(true);

    const url = `/project/dataset/${projectId}`;
    const config = {
      headers: {
        "Cache-Control": "no-cache",
        Authorization: localStorage.getItem("token"),
      },
    };
    await axios
      .get(url, config)
      .then((response) => {
        setFetchingDownloadLink(false);
        if (response.status === 200) {
          setDownloadLink(response.data.data.downloadLink);
        }
      })
      .catch((error) => {
        setFetchingDownloadLink(false);
      });
  };

  const fetchUsername = async () => {
    setFetchingThreadId(true);
    const url = `auth/user?uid=${uid}`;
    const config = {
      headers: {
        "Cache-Control": "no-cache",
        Authorization: localStorage.getItem("token"),
      },
    };
    await axios
      .get(url, config)
      .then((response) => {
        if (
          response.status === 200 &&
          _.get(response, "data.data.username") !== null
        ) {
          setFetchingThreadId(false);
          setReceiver(_.get(response, "data.data.username"));
        }
      })
      .catch((err) => {
        setFetchingThreadId(false);
      });
  };

  const fetchThreadId = async () => {
    setFetchingThreadId(true);
    const url = `/project/${projectId}/thread`;
    const config = {
      headers: {
        "Cache-Control": "no-cache",
        Authorization: localStorage.getItem("token"),
      },
    };
    await axios
      .get(url, config)
      .then((response) => {
        setFetchingThreadId(false);
        if (response.status === 200) {
          setThreadId(response.data.data._id);
          fetchUsername();
        }
      })
      .catch((error) => {
        setFetchingThreadId(false);
        window.location = "/";
      });
  };

  const fetchStateList = async () => {
    const url = "/project/nextState/" + status;
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
        "Cache-Control": "no-cache",
      },
    };
    setFetchingStateList(true);
    await axios
      .get(url, config)
      .then((response) => {
        setFetchingStateList(false);
        setStateList(response.data.data);
      })
      .catch((err) => {
        setFetchingStateList(false);
      });
  };

  useEffect(() => {
    fetchProjectDatasetDownloadLink();
    fetchThreadId();
    fetchStateList();
  }, []);

  return (
    <>
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
                <div className="devProjectBasicInfoValue">{projectId}</div>
              </div>
              <div className="devProjectBasicInfoData">
                <div className="devProjectBasicInfoKey">Project Owner</div>
                <div className="devProjectBasicInfoValue">{email}</div>
              </div>
            </div>
            <div className="devProjectControls">
              <div className="devProjectControlInfo">
                <div className="devProjectControlInfoItem">
                  <div className="devProjectControlInfoKey">Project Title</div>
                  <div className="devProjectControlInfoValue">{title}</div>
                </div>
                <div className="devProjectControlInfoItem">
                  <div className="devProjectControlInfoKey">
                    Project Algorithm
                  </div>
                  <div className="devProjectControlInfoValue">{algorithm}</div>
                </div>
                <div className="devProjectControlInfoItem">
                  <div className="devProjectControlInfoKey">Project Status</div>
                  <div className="devProjectControlInfoValue">{status}</div>
                </div>
                <div className="devProjectControlInfoItem">
                  <div className="devProjectControlInfoKey">Created At</div>
                  <div className="devProjectControlInfoValue">{createdAt}</div>
                </div>
                <div className="devProjectControlInfoItem">
                  <div className="devProjectControlInfoKey">
                    Last Updated At
                  </div>
                  <div className="devProjectControlInfoValue">{updatedAt}</div>
                </div>
                <div className="devProjectControlInfoItem">
                  <div className="devProjectControlInfoKey">
                    Notification Email
                  </div>
                  <div className="devProjectControlInfoValue">{email}</div>
                </div>
                <div className="devProjectControlInfoItem">
                  <div className="devProjectControlInfoKey">
                    Project Dataset
                  </div>
                  {fetchingDownloadLink ? (
                    <>
                      <HashSpinner size={10} />
                    </>
                  ) : (
                    <>
                      <div className="devProjectControlInfoValue">
                        <a href={downloadLink}>Dataset Link</a>
                      </div>
                    </>
                  )}
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
                  {fetchingStateList ? (
                    <>
                      <HashSpinner size={30} />
                    </>
                  ) : (
                    <>
                      <div className="formElement">
                        <div className="formElementLabel">
                          Update Project Status
                        </div>
                        <select className="updateFromSelect">
                          <option value={status} selected>
                            {status.replace("_", "-")}
                          </option>
                          {stateList.map((obj) => {
                            return (
                              <>
                                <option value={obj}>
                                  {obj.replace("_", "-")}
                                </option>
                              </>
                            );
                          })}
                        </select>
                      </div>
                      <button className="uploadTransformationFileButton">
                        Update Status
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="devProjectDescription">
              <div className="devProjectDescriptionTitle">
                Project Description
              </div>
              <p className="devProjectDescriptionContent" align="justify">
                {description}
              </p>
            </div>
            <div className="UserProjectCommentArea">
              <ProjectComments id={projectId} role={"DEVELOPER"} />
            </div>
          </div>
          <div className="rightDevProjectArea">
            <div className="devActivityLogs">
              <ActivityLogs id={projectId} />
            </div>
            <div className="devChatArea">
              {fetchingThreadId && threadId === "" ? (
                <>
                  <HashSpinner size={30} />
                </>
              ) : (
                <>
                  <Chat
                    id={projectId}
                    role={"DEVELOPER"}
                    receiver={receiver}
                    threadId={threadId}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeveloperProject;
