import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ActivityLogs from "../ActivityLogs/ActivityLogs";
import Chat from "../Chat/Chat";
import UserTasks from "../UserTasks/UserTasks";
import ProjectComments from "../ProjectComments/ProjectComments";
import "./UserProject.css";
import axios from "axios";
import HashSpinner from "../HashSpinner/HashSpinner";
import { useEffect } from "react";
import { formatDateString } from "../../utility";
import { Drawer } from "antd";
import UpdateProject from "../updateProject/updateProject";
import CreatePrediction from "../createPrediction/CreatePrediction";
import UpdateDataset from "../updateDataset/UpdateDataset";
import Footer from "../footer/Footer";

const UserProject = (prop) => {
  const navigate = useNavigate();
  const [downloadLink, setDownloadLink] = useState("#");
  const [fetchingDownloadLink, setFetchingDownloadLink] = useState(false);
  const [fetchingThreadId, setFetchingThreadId] = useState(false);
  const [threadId, setThreadId] = useState("");
  const [updateVisible, setUpdateVisible] = useState(false);
  const [drawerTitle, setDrawerTitle] = useState("");
  const [drawerState, setDrawerState] = useState({
    update: false,
    dataset: false,
    prediction: false,
  });

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
          console.log(response);
        }
      })
      .catch((error) => {
        setFetchingThreadId(false);
        window.location = "/";
      });
  };

  useEffect(() => {
    fetchProjectDatasetDownloadLink();
    fetchThreadId();
  }, []);

  const handleHomeClick = (url) => {
    navigate(url);
  };
  const projectId = prop.id;
  const title = prop.title;
  const description = prop.description;
  const status = prop.status;
  const email = prop.email;
  const algorithm = prop.algorithm;
  const createdAt = prop.createdAt;
  const updatedAt = prop.updatedAt;
  const developer = prop.developer;
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
                <div className="projectOwnerInfoValue">{projectId}</div>
              </div>
              <div className="projectOwnerInfoData">
                <div className="projectOwnerInfoKey">Developer</div>
                <div className="projectOwnerInfoValue">{developer}</div>
              </div>
            </div>
            <div className="projectControlArea">
              <div className="leftProjectControlArea">
                <div className="leftProjectControlAreaItem">
                  <div className="leftProjectControlAreaKey">Project Title</div>
                  <div className="leftProjectControlAreaValue">{title}</div>
                </div>
                <div className="leftProjectControlAreaItem">
                  <div className="leftProjectControlAreaKey">
                    Project Algorithm
                  </div>
                  <div className="leftProjectControlAreaValue">
                    {algorithm.toUpperCase()}
                  </div>
                </div>
                <div className="leftProjectControlAreaItem">
                  <div className="leftProjectControlAreaKey">
                    Project Status
                  </div>
                  <div className="leftProjectControlAreaValue">
                    {status.toUpperCase()}
                  </div>
                </div>
                <div className="leftProjectControlAreaItem">
                  <div className="leftProjectControlAreaKey">Created At</div>
                  <div className="leftProjectControlAreaValue">
                    {formatDateString(createdAt)}
                  </div>
                </div>
                <div className="leftProjectControlAreaItem">
                  <div className="leftProjectControlAreaKey">
                    Last Updated At
                  </div>
                  <div className="leftProjectControlAreaValue">
                    {formatDateString(updatedAt)}
                  </div>
                </div>
                <div className="leftProjectControlAreaItem">
                  <div className="leftProjectControlAreaKey">
                    Notification Email
                  </div>
                  <div className="leftProjectControlAreaValue">{email}</div>
                </div>
                <div className="leftProjectControlAreaItem">
                  <div className="leftProjectControlAreaKey">
                    Project Dataset
                  </div>
                  <div className="leftProjectControlAreaValue">
                    {fetchingDownloadLink ? (
                      <>
                        <HashSpinner size={10} />
                      </>
                    ) : (
                      <>
                        <a href={downloadLink}>Dataset Link</a>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="rightProjectControlArea">
                <button
                  className="rightProjectControlAreaButton"
                  onClick={() => {
                    setUpdateVisible(!updateVisible);
                    setDrawerTitle("Update Project Info");
                    setDrawerState({
                      update: true,
                      dataset: false,
                      prediction: false,
                    });
                  }}
                >
                  Edit Project Info
                </button>
                <button
                  className="rightProjectControlAreaButton"
                  onClick={() => {
                    setUpdateVisible(!updateVisible);
                    setDrawerTitle("Update Training Dataset");
                    setDrawerState({
                      update: false,
                      dataset: true,
                      prediction: false,
                    });
                  }}
                >
                  Edit Project Dataset
                </button>
                <button
                  className="rightProjectControlAreaButton"
                  onClick={() => {
                    setUpdateVisible(!updateVisible);
                    setDrawerTitle("Fetch Predictions");
                    setDrawerState({
                      update: false,
                      dataset: false,
                      prediction: true,
                    });
                  }}
                >
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
                {description}
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
              {fetchingThreadId && threadId === "" ? (
                <>
                  <HashSpinner size={30} />
                </>
              ) : (
                <>
                  <Chat
                    id={projectId}
                    threadId={threadId}
                    receiver={developer}
                  />
                </>
              )}
            </div>
          </div>
        </div>
        <Drawer
          visible={updateVisible}
          title={drawerTitle}
          closable={true}
          onClose={() => {
            setUpdateVisible(false);
          }}
        >
          {drawerState["dataset"] ? (
            <>
              <UpdateDataset projectId={projectId} />
            </>
          ) : drawerState["prediction"] ? (
            <>
              <CreatePrediction projectId={projectId} />
            </>
          ) : drawerState["update"] ? (
            <>
              <>
                <UpdateProject
                  projectId={projectId}
                  email={email}
                  title={title}
                  description={description}
                />
              </>
            </>
          ) : (
            ""
          )}
        </Drawer>
      </div>
    </>
  );
};

export default UserProject;
