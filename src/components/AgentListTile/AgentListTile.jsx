import "./AgentListTile.css";
import React from "react";

const AgentListTile = (prop) => {
  const name = prop.name;
  const username = prop.username;
  const agentId = prop.id;

  return (
    <>
      <div className="AgentListTileContainer">
        <div className="AgentListTileProfilePic">
          {name.charAt(0).toUpperCase()}
        </div>
        <div className="AgentListTileName">{name.toLowerCase()}</div>
      </div>
    </>
  );
};

export default AgentListTile;
