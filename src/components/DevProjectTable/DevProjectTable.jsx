import React from "react";
import "./DevProjectTable.css";
import DeveloperProject from "../DeveloperProject/DeveloperProject";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

const DevProjectTable = () => {
  const navigate = useNavigate();

  const handleProjectPageMigration = (projectId) => {
    navigate("/project", { state: { id: projectId, role: "DEVELOPER" } });
  };

  const columns = [
    { field: "pid", headerName: "Project ID", width: 80 },
    { field: "projectName", headerName: "Project Name", width: 150 },
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
              <i className="fa-regular fa-folder-open"></i><span>Open Project</span>
            </div>
          </>
        );
      },
    },
  ];

  const rows = [
    {
      pid: 1,
      projectName: "Test",
      status: "CREATED",
      createdAt: "2023-01-28 14:00:00",
      updatedAt: "2023-01-28 14:02:00",
    },
    {
      pid: 2,
      projectName: "Test-1",
      status: "CREATED",
      createdAt: "2023-01-28 14:00:00",
      updatedAt: "2023-01-28 14:02:00",
    },
    {
      pid: 3,
      projectName: "Test-2",
      status: "CREATED",
      createdAt: "2023-01-28 14:00:00",
      updatedAt: "2023-01-28 14:02:00",
    },
    {
      pid: 4,
      projectName: "Test-3",
      status: "CREATED",
      createdAt: "2023-01-28 14:00:00",
      updatedAt: "2023-01-28 14:02:00",
    },
    {
      pid: 5,
      projectName: "Test-4",
      status: "CREATED",
      createdAt: "2023-01-28 14:00:00",
      updatedAt: "2023-01-28 14:02:00",
    },
    {
      pid: 6,
      projectName: "Test-5",
      status: "CREATED",
      createdAt: "2023-01-28 14:00:00",
      updatedAt: "2023-01-28 14:02:00",
    },
    {
      pid: 7,
      projectName: "Test-6",
      status: "CREATED",
      createdAt: "2023-01-28 14:00:00",
      updatedAt: "2023-01-28 14:02:00",
    },
    {
      pid: 8,
      projectName: "Test-7",
      status: "CREATED",
      createdAt: "2023-01-28 14:00:00",
      updatedAt: "2023-01-28 14:02:00",
    },
    {
      pid: 9,
      projectName: "Test-8",
      status: "CREATED",
      createdAt: "2023-01-28 14:00:00",
      updatedAt: "2023-01-28 14:02:00",
    },
    {
      pid: 10,
      projectName: "Test-9",
      status: "CREATED",
      createdAt: "2023-01-28 14:00:00",
      updatedAt: "2023-01-28 14:02:00",
    },
  ];

  return (
    <div className="devProjectTableContainer">
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
    </div>
  );
};

export default DevProjectTable;
