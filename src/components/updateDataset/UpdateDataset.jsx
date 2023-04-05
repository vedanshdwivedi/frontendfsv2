import "./UpdateDataset.css";
import React, { useState } from "react";
import HashSpinner from "../HashSpinner/HashSpinner";
import axios from "axios";

const UpdateDataset = (prop) => {
  const projectId = prop.projectId;
  const [updating, setUpdating] = useState(false);
  const [file, setFile] = useState(null);

  const handleDatasetUpdate = async () => {
    setUpdating(true);
    const url = `/project/${projectId}/update/dataset`;
    const config = {
      headers: {
        "Cache-Control": 'no-cache',
        "content-type": "multipart/form-data",
        Authorization: localStorage.getItem("token"),
      },
    };
    const formdata = new FormData();
    formdata.append("file", file);
    await axios
      .post(url, formdata, config)
      .then(() => {
        setUpdating(false);
      })
      .catch(() => {
        setUpdating(false);
      });
  };

  return (
    <>
      <div className="updateDatasetContainer">
        <form className="updateDatasetForm">
          <input
            type="file"
            name="dataset"
            id="dataset"
            placeholder="Upload New Training Dataset"
            accept=".csv, .xlsx"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
            required
          />
          {updating ? (
            <>
              <HashSpinner size={30} />
            </>
          ) : (
            <>
              <button
                className="updateProjectDatasetButton"
                onClick={() => {
                  if (file) {
                    handleDatasetUpdate();
                  }
                }}
              >
                Update Training Dataset
              </button>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default UpdateDataset;
