import "./AgentsTable.css";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const AgentsTable = () => {
  const handleUserConcurrencyUpdate = (userId, concurrency) => {};

  const agentColumns = [
    { field: "uid", headerName: "Agent ID", width: 80 },
    { field: "agentName", headerName: "Agent Name", width: 150 },
    {
      field: "maxConcurrency",
      headerName: "Max Concurrency",
      description: "Maximum projects agent can be assigned at once",
      width: 130,
    },
    {
      headerName: "Projects Handling",
      description: "Number of active projects assigned to agent",
      width: 130,
      field: "currentHandling",
    },
    {
      field: "projectsCompleted",
      headerName: "Total Projects",
      description: "Total Number of Completed Projects",
      width: 130,
    },
    {
      headerName: "Agent Actions",
      description: "Actions",
      width: 250,
      renderCell: (params) => {
        return (
          <>
            <div className="agentUpdateContainer">
              <form>
                <div className="agentConcurrencyInput">
                  <input
                    type={"number"}
                    placeholder="Concurrency"
                    min="1"
                  ></input>
                  <button
                    className="updateConcurrencyButton"
                    onClick={(e) => {
                      handleUserConcurrencyUpdate(
                        params.row.uid,
                        e.target.value
                      );
                    }}
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </>
        );
      },
    },
  ];

  const agentRows = [
    {
      uid: 1,
      agentName: "Alpha Beta",
      maxConcurrency: 10,
      currentHandling: 4,
      projectsCompleted: 8,
    },
    {
      uid: 2,
      agentName: "Gamma Delta",
      maxConcurrency: 10,
      currentHandling: 1,
      projectsCompleted: 8,
    },
    {
      uid: 3,
      agentName: "Alpha Delta",
      maxConcurrency: 10,
      currentHandling: 2,
      projectsCompleted: 8,
    },
    {
      uid: 4,
      agentName: "Beta Gamma",
      maxConcurrency: 10,
      currentHandling: 7,
      projectsCompleted: 8,
    },
  ];

  return (
    <>
      <div className="AgentsTableContainer">
        <div className="AgentsTableWrapper">
          <div className="AgentsTableTitle">Agents Table</div>
          <DataGrid
            rows={agentRows}
            autoHeight={true}
            columns={agentColumns}
            pageSize={5}
            getRowId={(row) => row.uid}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </div>
      </div>
    </>
  );
};

export default AgentsTable;
