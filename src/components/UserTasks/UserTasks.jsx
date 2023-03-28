import "./UserTasks.css";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { formatDateString, isDateOlderThanXDays } from "../../utility";
import HashSpinner from "../HashSpinner/HashSpinner";
import axios from "axios";
import { useEffect } from "react";

const UserTasks = (prop) => {
  const [retrigger, setRetrigger] = useState(false);

  const reTriggerTask = async (taskId) => {
    setRetrigger(false);
    const url = "/prediction/reTrigger";
    const payload = {
      email: localStorage.getItem("email"),
      projectId: prop.projectId,
      taskId: taskId,
    };
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    await axios
      .post(url, payload, config)
      .then((response) => {
        setRetrigger(true);
      })
      .catch((err) => {
        setRetrigger(true);
      });
  };

  const columns = [
    { field: "taskId", headerName: "Task ID", width: 80 },
    {
      field: "type",
      headerName: "Task Type",
      description: "Type of Task Triggered",
      width: 130,
    },
    {
      field: "createdAt",
      headerName: "Created Date",
      description: "When task was created",
      width: 170,
    },
    {
      field: "updatedAt",
      headerName: "Last Updated",
      description: "When Task Status was last updated",
      width: 170,
    },
    {
      field: "status",
      headerName: "Task Status",
      description: "Task's Current Status",
      width: 110,
    },
    {
      headerName: "Output",
      description: "Output",
      width: 400,
      renderCell: (params) => {
        return (
          <>
            <div className="outputContainer">
              <div className="outputContainerItem">
                {params.row.graphId !== null ? (
                  <>
                    <button className="toggleGraphButton">Show Graph</button>
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className="outputContainerItem">
                {params.row.downloadLink === null ? (
                  <></>
                ) : (
                  <>
                    <div className="fileDownloadButton">
                      <a href={params.row.downloadLink}>Download Result</a>
                    </div>
                  </>
                )}
              </div>
              <div className="outputContainerFormItem">
                {params.row.status === "QUEUED" &&
                params.row.olderThanOneDay ? (
                  retrigger ? (
                    <>
                      <HashSpinner size={30} />
                    </>
                  ) : (
                    <>
                      <button
                        className="taskTriggerButton"
                        onClick={() => {
                          reTriggerTask(params.row.taskId);
                        }}
                      >
                        Re-Trigger Task
                      </button>
                    </>
                  )
                ) : (
                  <></>
                )}
              </div>
            </div>
          </>
        );
      },
    },
  ];

  const projectId = prop.id;
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);

  const fetchTaskData = async () => {
    setLoading(true);
    const url = `/tasks/${projectId}?check=${Date.now().toString()}`;
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    await axios
      .get(url, config)
      .then((response) => {
        setLoading(false);
        let fetchedRows = response.data.data;
        fetchedRows.forEach((obj) => {
          obj.olderThanOneDay = isDateOlderThanXDays(obj.createdAt, 1);
          obj.createdAt = formatDateString(obj.createdAt);
          obj.updatedAt = formatDateString(obj.updatedAt);
        });
        setRows(fetchedRows);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTaskData();
  }, []);

  return (
    <>
      <div className="taskTableContainer">
        <div className="taskTableRefreshButton">
          {loading ? (
            <>
              <HashSpinner size={15} />
            </>
          ) : (
            <>
              <i
                className="fa-solid fa-arrows-rotate taskTableIcon"
                onClick={() => {
                  if (!loading) {
                    fetchTaskData();
                  }
                }}
              ></i>
            </>
          )}
          <span
            className="taskTableSpan"
            onClick={() => {
              if (!loading) {
                fetchTaskData();
              }
            }}
          >
            Refresh Task Status
          </span>
        </div>
        <div className="taskTable">
          {loading ? (
            <>
              <HashSpinner size={30} />
            </>
          ) : (
            <>
              <div>
                <DataGrid
                  rows={rows}
                  autoHeight={true}
                  columns={columns}
                  pageSize={5}
                  getRowId={(row) => row.taskId}
                  rowsPerPageOptions={[5]}
                  disableSelectionOnClick
                  experimentalFeatures={{ newEditingApi: true }}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default UserTasks;
