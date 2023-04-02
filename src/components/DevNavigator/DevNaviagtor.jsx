import "./DevNavigator.css";
import React from "react";

const DevNaviagtor = (prop) => {
  return (
    <>
      <div className="DevNavigatorContainer">
        <div className="DevNavigatorWrapper">
          <div className="DevNavigatorElement">Assgined Projects</div>
          <div className="DevNavigatorElement">Queued Projects</div>
          <div className="DevNavigatorElement">Completed Projects</div>
          <div className="DevNavigatorElement">All Projects</div>
        </div>
      </div>
    </>
  );
};

export default DevNaviagtor;
