import "./Chat.css";
import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { json, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { io } from "socket.io-client";
import axios from "axios";
import { formatDateString } from "../../utility";
import HashSpinner from "../HashSpinner/HashSpinner";
const _ = require("lodash");

const Chat = (prop) => {
  const location = useLocation();
  const projectId = prop.id || _.get(location, "state.id");
  const receiver = prop.receiver;
  const threadId = prop.threadId;
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [socket, setSocket] = useState(null);

  const fetchMessageByThreads = async () => {
    console.log(
      `[fetchMessageByThreads] receiver : ${JSON.stringify(
        receiver
      )}, threadId : ${JSON.stringify(threadId)}, projectId : ${JSON.stringify(
        projectId
      )}`
    );
    setLoading(false);
    if (threadId === null) {
      return;
    }
    const url = `/message/thread/${threadId}`;
    const config = {
      headers: {
        "Cache-Control": "no-cache",
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
      .catch(() => {
        // setLoading(true);
      });
  };

  const handleMessageSent = async () => {
    setSending(true);
    const data = {
      sender: localStorage.getItem("username"),
      content: message,
      projectId: projectId,
      receiver: receiver,
      threadId: threadId,
    };
    setMessage("");
    const url = `/message/send`;
    const config = {
      headers: {
        "Cache-Control": "no-cache",
        Authorization: localStorage.getItem("token"),
      },
    };
    if (socket) {
      console.log(1);
      socket.emit("send message", data);
      setSending(false);
    } else {
      console.log(2);
      setSending(false);
    }
    // await axios
    //   .post(url, data, config)
    //   .then((response) => {
    //     setSending(false);
    //     if (response.status === 200 || response.status === 201) {
    //       fetchMessageByThreads();
    //     }
    //   })
    //   .catch((error) => {
    //     setSending(false);
    //   });
  };

  useEffect(() => {
    fetchMessageByThreads();
    const newSocket = io("https://backend-wj2i.onrender.com/", {
      debug: true,
      query: {
        threadId,
      },
    });
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("new message", (msg) => {
        setRows((prevRows) => [...prevRows, msg]);
        console.log(rows);
      });
    }
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.on("connect_error", (error) => {
        console.log(`Socket.io connection error: ${error}`);
      });
      socket.on("reconnect", () => {
        console.log("Socket.io reconnected");
      });
    }
  }, [socket]);

  return (
    <>
      <div className="ChatTitle">Chat</div>
      <div className="ChatContainer">
        {loading ? (
          <>
            <HashSpinner size={30} />
          </>
        ) : (
          <>
            <ScrollToBottom className="ChatMessageArea">
              {rows.map((msg) => {
                const msgClass =
                  msg.sender === localStorage.getItem("username")
                    ? "chatMessageItemReverse"
                    : "chatMessageItem";
                return (
                  <>
                    <div className={msgClass}>
                      <div className="chatMessageAvatar">
                        {msg.sender.charAt(0).toUpperCase()}
                      </div>
                      <div className="chatMessageContent">
                        <div className="chatMessageText">{msg.content}</div>
                        <div className="chatMessageTextDetails">
                          <div className="chatMessageTimestamp">
                            {formatDateString(msg.createdAt)}
                          </div>
                          <div className="chatMessageRole">{msg.sentRole}</div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </ScrollToBottom>
          </>
        )}
        <div className="ChatTypingArea">
          <textarea
            placeholder="Message"
            name="message"
            id="message"
            cols="30"
            rows="2"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
          {sending ? (
            <>
              <HashSpinner size={20} />
            </>
          ) : (
            <>
              <button
                className="typingAreaSendButton"
                onClick={() => {
                  if (message !== "") {
                    handleMessageSent();
                  }
                }}
              >
                Send
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Chat;
