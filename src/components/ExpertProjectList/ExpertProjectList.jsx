import "./ExpertProjectList.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

const ExpertProjectList = () => {
  const navigate = useNavigate();

  const OpenProject = (projectId) => {
    navigate("/project", { state: { role: "EXPERT", id: projectId } });
  };

  const columns = [
    { field: "projectTitle", headerName: "Project Name", width: 250 },
    { field: "status", headerName: "Status", width: 150 },
    {
      headerName: "Project Link",
      description: "Link to Open Project",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <div
              className="ExpertOpenProjectLink"
              onClick={() => {
                OpenProject(params.row.pid);
              }}
            >
              Open Project
            </div>
          </>
        );
      },
    },
  ];

  const rows = [
    {
      pid: 1,
      projectTitle: "Google Mobility Trends",
      status: "INITIALISED",
    },
    {
      pid: 2,
      projectTitle: "Boston Housing Problem",
      status: "INITIALISED",
    },
    {
      pid: 1,
      projectTitle: "Titanic Dataset",
      status: "INITIALISED",
    },
    {
      pid: 1,
      projectTitle: "Air Quality Prediction",
      status: "INITIALISED",
    },
    {
      pid: 1,
      projectTitle: "Google Mobility Trends",
      status: "INITIALISED",
    },
    {
      pid: 2,
      projectTitle: "Boston Housing Problem",
      status: "INITIALISED",
    },
    {
      pid: 1,
      projectTitle: "Titanic Dataset",
      status: "INITIALISED",
    },
    {
      pid: 1,
      projectTitle: "Air Quality Prediction",
      status: "INITIALISED",
    },
  ];

  return (
    <>
      <div className="ExpertProjectListContainer">
        <DataGrid
          rows={rows}
          autoHeight={true}
          columns={columns}
          pageSize={5}
          getRowId={(row) => row.pid}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </div>
    </>
  );
};

export default ExpertProjectList;
