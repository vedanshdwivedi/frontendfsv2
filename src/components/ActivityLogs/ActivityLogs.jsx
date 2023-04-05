import "./ActivityLogs.css";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import HashSpinner from "../HashSpinner/HashSpinner";
import { formatDateString } from "../../utility";
import ScrollToBottom from "react-scroll-to-bottom";

const ActivityLogs = (prop) => {
  const projectId = prop.id;
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    getActivityLogs();
  }, []);

  const getActivityLogs = async () => {
    setLoading(true);
    const url = `/project/ackLogs/${projectId}`;
    const config = {
      headers: {
        "Cache-Control": 'no-cache',
        Authorization: localStorage.getItem("token"),
      },
    };
    await axios
      .get(url, config)
      .then((response) => {
        setLoading(false);
        if (response.status === 200) {
          setRows(response.data.data);
        }
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401) {
          // window.location = "/";
        }
      });
  };

  return (
    <>
      <div className="activityLogsWrapper">
        <div className="activityLogsTitle">Activity Logs</div>
        <div className="activityLogContainer">
          {loading ? (
            <HashSpinner size={20} />
          ) : (
            <ScrollToBottom>
              <>
                {rows.map((row) => {
                  return (
                    <>
                      <div className="activityLogItem" key={row._id}>
                        <div className="activityLogContent">{row.action}</div>
                        <div className="activityLogTimestamp">
                          {formatDateString(row.createdAt)}
                        </div>
                      </div>
                    </>
                  );
                })}
              </>
            </ScrollToBottom>
          )}
        </div>
      </div>
    </>
  );
};

export default ActivityLogs;
