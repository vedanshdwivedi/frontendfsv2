import "./CreateProject.css";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import HashSpinner from "../../components/HashSpinner/HashSpinner";
import axios from "axios";

const CreateProject = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [algorithm, setAlgorithm] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);
  const [createErrors, setCreateErrors] = useState(null);
  const [algorithmMap, setAlgorithmMap] = useState([]);
  const [loadingAlgorithm, setLoadingAlgorithm] = useState(false);

  const handleAlgorithms = async () => {
    setLoadingAlgorithm(true);
    const url = "/algorithm";
    await axios
      .get(url)
      .then((response) => {
        setLoadingAlgorithm(false);
        if (response.status === 200) {
          setAlgorithmMap(response.data.data);
        }
      })
      .catch((error) => {
        setLoadingAlgorithm(false);
        window.location = "/";
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    handleAlgorithms();
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    const url = "/project";
    const config = {
      headers: {
        "Cache-Control": 'no-cache',
        "content-type": "multipart/form-data",
        Authorization: localStorage.getItem("token"),
      },
    };

    const formdata = new FormData();
    const FileData = file;
    const file_data = {
      filename: FileData["name"],
      lastModified: FileData["lastModified"],
      lastModifiedDate: FileData["lastModifiedDate"],
      size: FileData["size"],
      type: FileData["type"],
    };
    formdata.append("file", FileData);
    formdata.append("dataset", file);
    formdata.append("file_details", file_data);
    formdata.append("description", description);
    formdata.append("project_name", title);
    formdata.append("algorithm", algorithm);
    await axios
      .post(url, formdata, config)
      .then((response) => {
        setLoading(false);
        if (response.status === 200 || response.status === 201) {
          window.location = "/";
        }
      })
      .catch((error) => {
        setLoading(false);
        setFile("");
        if (error.response.status === 401) {
          localStorage.clear();
          window.location = "/login";
        }
        if (error.response.data.message) {
          setCreateErrors(error.response.data.message);
        }
      });
  };

  return (
    <>
      <Navbar />
      <div className="CreateProject">
        <div className="CreateProjectWrapper">
          <h1 className="createProjectTitle">Create Project</h1>
          <form className="CreateProjectForm">
            <div className="CreateProjectFormItem">
              <div className="CreateProjectFormItemLabel">
                <i className="fa-solid fa-signature"></i>
                <label>Project Title</label>
              </div>
              <input
                type="text"
                placeholder="A name for your project"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                required
              />
            </div>
            <div className="CreateProjectFormItem">
              <div className="CreateProjectFormItemLabel">
                <i className="fa-solid fa-code-branch"></i>
                <label>Algorithm</label>
              </div>
              {loadingAlgorithm ? (
                <>
                  <HashSpinner size={20} />
                </>
              ) : (
                <>
                  <select
                    onChange={(e) => {
                      setAlgorithm(e.target.value);
                    }}
                    value={algorithm}
                  >
                    {algorithmMap.map((algo) => {
                      return (
                        <>
                          <option value={algo.algorithmCode}>
                            {algo.algorithmName}
                          </option>
                        </>
                      );
                    })}
                  </select>
                </>
              )}
            </div>
            <div className="CreateProjectFormItem">
              <div className="CreateProjectFormItemLabel">
                <i className="fa-regular fa-at"></i>
                <label>Email</label>
              </div>
              <input
                type="text"
                placeholder="Email to receive project notifications"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div className="CreateProjectFormItem">
              <div className="CreateProjectFormItemLabel">
                <i className="fa-solid fa-file"></i>
                <label>Description</label>
              </div>
              <textarea
                value={description}
                rows="4"
                cols="43"
                placeholder="Project Description"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                required
              />
            </div>
            <div className="CreateProjectFormItem">
              <div className="CreateProjectFormItemLabel">
                <i className="fa-solid fa-file"></i>
                <label>Upload Dataset</label>
              </div>
              <input
                type="file"
                name="dataset"
                id="dataset"
                placeholder="Upload Project Dataset"
                accept=".csv, .xlsx"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
                required
              />
            </div>
            <div className="CreateProjectFormItemButton">
              {loading ? (
                <HashSpinner size={30} />
              ) : (
                <>
                  <div
                    className="CreateProjectSubmitButton"
                    onClick={() => {
                      if (
                        title !== "" &&
                        algorithm !== "" &&
                        email !== "" &&
                        description !== "" &&
                        file !== ""
                      ) {
                        handleSubmit();
                      }
                    }}
                  >
                    <button className="CreateProjectFormButton">
                      Create Project
                    </button>
                  </div>
                </>
              )}
            </div>
          </form>
          {createErrors !== null ? (
            <>
              <div className="CreateProjectErrors">
                <p align="center">{createErrors}</p>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateProject;
