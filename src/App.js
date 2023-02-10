import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateProject from "./pages/createProject/CreateProject";
import DevHome from "./pages/DevHome/DevHome";
import ExpertHome from "./pages/ExpertHome/ExpertHome";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Project from "./pages/project/project";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create" element={<CreateProject />} />
        <Route path="/project" element={<Project />} />
        <Route path="/dev" element={<DevHome id={null} />} />
        <Route path="/expert" element={<ExpertHome id={null} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
