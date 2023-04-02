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

  const handleProjectPageMigration = (projectId) => {
    navigate("/project", { state: { id: projectId, role: "DEVELOPER" } });
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
    { field: "pid", headerName: "Project ID", width: 80 },
    { field: "title", headerName: "Project Name", width: 150 },
    {
      field: "status",
      headerName: "Task Status",
      description: "Project's Current Status",
      width: 110,
    },
    {
      field: "createdAt",
      headerName: "Created Date",
      description: "When project was created",
      width: 180,
    },
    {
      field: "updatedAt",
      headerName: "Last Updated Date",
      description: "When project was last updated",
      width: 180,
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
                handleProjectPageMigration(params.row.pid);
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
