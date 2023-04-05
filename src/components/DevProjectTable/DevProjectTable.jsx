import React from "react";
import "./DevProjectTable.css";
import DeveloperProject from "../DeveloperProject/DeveloperProject";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import HashSpinner from "../HashSpinner/HashSpinner";
import { useState } from "react";
import { useEffect } from "react";
import { formatDateString } from "../../utility";

const DevProjectTable = (prop) => {
  const navigate = useNavigate();
  const filterState = prop.tab;
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleProjectPageMigration = (
    projectId,
    projectTitle,
    projectDescription,
    projectStatus,
    projectEmail,
    projectAlgorithm,
    createdAt,
    updatedAt,
    uid
  ) => {
    navigate("/project", {
      state: {
        id: projectId,
        role: "DEVELOPER",
        title: projectTitle,
        description: projectDescription,
        status: projectStatus,
        email: projectEmail,
        algorithm: projectAlgorithm,
        createdAt: createdAt,
        updatedAt: updatedAt,
        developer: localStorage.getItem("username"),
        uid: uid,
      },
    });
  };

  const fetchProjects = async () => {
    setLoading(true);
    const payload = {
      developer: localStorage.getItem("username"),
      status: filterState,
    };
    const url = "/project/dev/projectList";
    const config = {
      headers: {
        "Cache-Control": 'no-cache',
        Authorization: localStorage.getItem("token"),
      },
    };
    await axios
      .post(url, payload, config)
      .then((response) => {
        let data = response.data.projects;
        data.forEach((obj) => {
          obj.createdAt = formatDateString(obj.createdAt);
          obj.updatedAt = formatDateString(obj.updatedAt);
        });
        setRows(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProjects();
  }, [filterState]);

  const columns = [
    { field: "pid", headerName: "#id", width: 30 },
    { field: "title", headerName: "Project Name", width: 270 },
    {
      field: "status",
      headerName: "Task Status",
      description: "Project's Current Status",
      width: 120,
    },
    {
      field: "algorithm",
      headerName: "Algorithm",
      description: "Project Algorithm",
      width: 120,
    },
    {
      field: "createdAt",
      headerName: "Created Date",
      description: "When project was created",
      width: 160,
    },
    {
      field: "updatedAt",
      headerName: "Last Updated Date",
      description: "When project was last updated",
      width: 160,
    },
    {
      headerName: "Project Link",
      description: "Project Link",
      width: 100,
      renderCell: (params) => {
        return (
          <>
            <div
              className="devProjectLink"
              onClick={() => {
                handleProjectPageMigration(
                  params.row.pid,
                  params.row.title,
                  params.row.description,
                  params.row.status,
                  params.row.email,
                  params.row.algorithm,
                  params.row.createdAt,
                  params.row.updatedAt,
                  params.row.uid
                );
              }}
            >
              <i className="fa-regular fa-folder-open"></i>
              <span>Open Project</span>
            </div>
          </>
        );
      },
    },
  ];

  return (
    <>
      {loading ? (
        <>
          <HashSpinner size={30} />
        </>
      ) : (
        <>
          <div className="devProjectTableContainer">
            {rows.length > 0 ? (
              <>
                <DataGrid
                  rows={rows}
                  autoHeight={true}
                  columns={columns}
                  pageSize={7}
                  getRowId={(row) => row.pid}
                  rowsPerPageOptions={[7]}
                  disableSelectionOnClick
                  experimentalFeatures={{ newEditingApi: true }}
                />
              </>
            ) : (
              <>No Projects to show !!</>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default DevProjectTable;
