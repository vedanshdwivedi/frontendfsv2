import "./ActivityLogs.css";
import React from "react";

const ActivityLogs = (prop) => {
  const projectId = prop.id;
  const rows = [
    {
      id: 1,
      log: "User created project",
      createdAt: "2023-01-28 14:12:00",
    },
    {
      id: 2,
      log: "Domain Expert APPROVED the project",
      createdAt: "2023-01-28 14:13:00",
    },
    {
      id: 3,
      log: "Developer Assigned to this project",
      createdAt: "2023-01-28 14:14:00",
    },
    {
      id: 4,
      log: "Developer submitted project solution",
      createdAt: "2023-01-28 14:15:00",
    },
    {
      id: 5,
      log: "Model Training Started",
      createdAt: "2023-01-28 14:16:00",
    },
    {
        id: 6,
        log: "User Created Prediction Task #1242",
        createdAt: "2023-01-28 14:18:00",
      },
      {
        id: 7,
        log: "Prediction Task #1242 Completed",
        createdAt: "2023-01-28 14:20:00",
      },
  ];

  return (
    <>
      <div className="activityLogsWrapper">
        <div className="activityLogsTitle">Activity Logs</div>
        <div className="activityLogContainer">
          {rows.map((row) => {
            return (
              <>
                <div className="activityLogItem">
                  <div className="activityLogContent">{row.log}</div>
                  <div className="activityLogTimestamp">{row.createdAt}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ActivityLogs;
