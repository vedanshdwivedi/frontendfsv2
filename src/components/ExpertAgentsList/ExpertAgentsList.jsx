import "./ExpertAgentsList.css";
import React from "react";
import AgentListTile from "../AgentListTile/AgentListTile";
import { useState } from "react";
import Chat from "../Chat/Chat";

const ExpertAgentsList = (prop) => {
  const agents = [
    {
      uid: 1,
      agentName: "Vedansh Dwivedi",
      agentUsername: "vedanshdwivedi",
    },
    {
      uid: 2,
      agentName: "vedansh Dwivedi",
      agentUsername: "vedanshdwivedi",
    },
    {
      uid: 3,
      agentName: "Vedansh dwivedi",
      agentUsername: "vedanshdwivedi",
    },
    {
      uid: 4,
      agentName: "vedansh dwivedi",
      agentUsername: "vedanshdwivedi",
    },
    {
      uid: 5,
      agentName: "veDAnsh dwiVEdi",
      agentUsername: "vedanshdwivedi",
    },
    {
      uid: 1,
      agentName: "Vedansh Dwivedi",
      agentUsername: "vedanshdwivedi",
    },
    {
      uid: 2,
      agentName: "Vedansh Dwivedi",
      agentUsername: "vedanshdwivedi",
    },
    {
      uid: 3,
      agentName: "Vedansh Dwivedi",
      agentUsername: "vedanshdwivedi",
    },
    {
      uid: 4,
      agentName: "Vedansh Dwivedi",
      agentUsername: "vedanshdwivedi",
    },
    {
      uid: 5,
      agentName: "Vedansh Dwivedi",
      agentUsername: "vedanshdwivedi",
    },
    {
      uid: 1,
      agentName: "Vedansh Dwivedi",
      agentUsername: "vedanshdwivedi",
    },
    {
      uid: 2,
      agentName: "Vedansh Dwivedi",
      agentUsername: "vedanshdwivedi",
    },
    {
      uid: 3,
      agentName: "Vedansh Dwivedi",
      agentUsername: "vedanshdwivedi",
    },
    {
      uid: 4,
      agentName: "Vedansh Dwivedi",
      agentUsername: "vedanshdwivedi",
    },
    {
      uid: 5,
      agentName: "Vedansh Dwivedi",
      agentUsername: "vedanshdwivedi",
    },
  ];

  const [agentProfile, setAgentProfile] = useState("");
  const [agentName, setAgentName] = useState("");

  return (
    <>
      <div className="ExpertAgentListContainer">
        <div className="ExpertAgentListWrapper">
          {agents.map((agent) => {
            return (
              <div className="AgentListTileWrapper">
                <AgentListTile
                  id={agent.uid}
                  name={agent.agentName}
                  username={agent.agentUsername}
                  onClick={() => {
                    setAgentProfile(agent.agentUsername);
                    setAgentName(agent.agentName);
                  }}
                />
              </div>
            );
          })}
        </div>
        {agentProfile === "" ? "" : <Chat id={null} role={"DEVELOPER"} />}
      </div>
    </>
  );
};

export default ExpertAgentsList;
