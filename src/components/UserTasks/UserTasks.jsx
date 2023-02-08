import "./UserTasks.css";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const UserTasks = (prop) => {
  const columns = [
    { field: "id", headerName: "Task ID", width: 150 },
    {
      field: "createdAt",
      headerName: "Created Date",
      description: "When task was created",
      width: 500,
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
      width: 130,
      renderCell: (params) => {
        return params.row.download_link !== null ? (
          <a href={params.row.download_link}>Download Link</a>
        ) : (
          "TERMINATED"
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      status: "COMPLETED",
      createdAt: new Date(),
      download_link: "https://www.google.com",
    },
    {
      id: 2,
      status: "COMPLETED",
      createdAt: new Date(),
      download_link: "https://www.google.com",
    },
    {
      id: 3,
      status: "COMPLETED",
      createdAt: new Date(),
      download_link: "https://www.google.com",
    },
    {
      id: 4,
      status: "COMPLETED",
      createdAt: new Date(),
      download_link: "https://www.google.com",
    },
    {
      id: 5,
      status: "COMPLETED",
      createdAt: new Date(),
      download_link: "https://www.google.com",
    },
    {
      id: 6,
      status: "COMPLETED",
      createdAt: null,
      download_link: "https://www.google.com",
    },
    {
      id: 7,
      status: "COMPLETED",
      createdAt: new Date(),
      download_link: "https://www.google.com",
    },
    {
      id: 8,
      status: "COMPLETED",
      createdAt: new Date(),
      download_link: "https://www.google.com",
    },
    {
      id: 9,
      status: "COMPLETED",
      createdAt: new Date(),
      download_link: "https://www.google.com",
    },
  ];

  const projectId = prop.id;
  return (
    <div>
      <DataGrid
        rows={rows}
        autoHeight={true}
        columns={columns}
        pageSize={5}
        getRowId={(row) => row.id}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </div>
  );
};

export default UserTasks;
