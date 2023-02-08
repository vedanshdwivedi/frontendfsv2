import "./Chat.css";
import React from "react";

const Chat = (prop) => {
  const projectId = prop.id;
  const role = prop.role;
  const messages = [
    {
      id: 1,
      threadId: "123213",
      message: "This is sent by User",
      createdAt: "2023-01-28 14:01:00",
      sentRole: "USER",
      sentByUserId: "vedanshdwivedi",
      receiverRole: "DEVELOPER",
      receiveByUserId: "vedanshdeveloper",
    },
    {
      id: 2,
      threadId: "123213",
      message: "This is sent by Developer",
      createdAt: "2023-01-28 14:01:00",
      sentRole: "DEVELOPER",
      sentByUserId: "vedanshdwivedi",
      receiverRole: "USER",
      receiveByUserId: "vedanshdeveloper",
    },
    {
      id: 3,
      threadId: "123213",
      message: "This is sent by User",
      createdAt: "2023-01-28 14:01:00",
      sentRole: "USER",
      sentByUserId: "vedanshdwivedi",
      receiverRole: "DEVELOPER",
      receiveByUserId: "vedanshdeveloper",
    },
    {
      id: 4,
      threadId: "123213",
      message: "This is sent by Developer",
      createdAt: "2023-01-28 14:05:00",
      sentRole: "DEVELOPER",
      sentByUserId: "vedanshdwivedi",
      receiverRole: "USER",
      receiveByUserId: "vedanshdeveloper",
    },
  ];
  return (
    <>
      <div className="ChatTitle">Chat</div>
      <div className="ChatContainer">
        <div className="ChatMessageArea">
          {messages.map((msg) => {
            const msgClass =
              msg.sentRole === role
                ? "chatMessageItemReverse"
                : "chatMessageItem";
            return (
              <>
                <div className={msgClass}>
                  <div className="chatMessageAvatar">
                    {msg.sentByUserId.charAt(0).toUpperCase()}
                  </div>
                  <div className="chatMessageContent">
                    <div className="chatMessageText">{msg.message}</div>
                    <div className="chatMessageTextDetails">
                      <div className="chatMessageTimestamp">
                        {msg.createdAt}
                      </div>
                      <div className="chatMessageRole">{msg.sentRole}</div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="ChatTypingArea">
          <textarea name="message" id="message" cols="30" rows="2"></textarea>
          <button className="typingAreaSendButton">Send</button>
        </div>
      </div>
    </>
  );
};

export default Chat;
