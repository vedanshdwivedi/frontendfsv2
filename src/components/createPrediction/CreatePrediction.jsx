import "./CreatePrediction.css";
import React, { useState } from "react";
import HashSpinner from "../HashSpinner/HashSpinner";
import axios from "axios";

const CreatePrediction = (prop) => {
  const projectId = prop.projectId;
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState(null);

  const handlePredictionTask = async () => {
    setUploading(true);
    const url = `/prediction/${projectId}/dataset`;
    const formdata = new FormData();
    formdata.append("file", file);
    const config = {
      headers: {
        "Cache-Control": 'no-cache',
        "content-type": "multipart/form-data",
        Authorization: localStorage.getItem("token"),
      },
    };
    await axios
      .post(url, formdata, config)
      .then((response) => {
        setUploading(false);
      })
      .catch((err) => {
        setUploading(false);
      });
  };

  return (
    <div className="createPredictionContainer">
      <div className="createPredictionForm">
        <div className="createPredictionFormElement">
          <div className="createPredictionFormElementLabel">Upload Dataset</div>
          <div className="createPredictionFormElementInput">
            <input
              type="file"
              accept=".csv, .xlsx"
              id="dataset"
              placeholder="Upload Prediction Dataset"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
              required
            />
          </div>
        </div>
        <div className="createPredictionFormElement">
          {uploading ? (
            <>
              <HashSpinner size={30} />
            </>
          ) : (
            <>
              <button
                className="createPredictionButton"
                onClick={() => {
                  handlePredictionTask();
                }}
              >
                Create Prediction
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatePrediction;
