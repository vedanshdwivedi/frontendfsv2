import "./ProjectComments.css";
import React, { useState } from "react";
import Comment from "../Comment/Comment";
import ScrollToBottom from "react-scroll-to-bottom";
import { useEffect } from "react";
import axios from "axios";
import HashSpinner from "../HashSpinner/HashSpinner";

const ProjectComments = (prop) => {
  const projectId = prop.id;
  const role = prop.role;
  const [loading, setLoading] = useState(false);
  const [postingComment, setPostingComment] = useState(false);
  const [rows, setRows] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    fetchComment();
  }, []);

  const fetchComment = async () => {
    setLoading(true);
    const url = `/comment/${projectId}`;
    const config = {
      headers: {
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
      });
  };

  const postComment = async (commentText) => {
    setPostingComment(true);
    const url = `/comment/`;
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const payload = {
      pid: projectId,
      comment: commentText,
    };
    await axios
      .post(url, payload, config)
      .then(async (response) => {
        setComment("");
        setPostingComment(false);
        if (response.status === 201) {
          await fetchComment();
        }
      })
      .catch((error) => {
        setComment("");
        setPostingComment(false);
      });
  };

  return (
    <>
      <div className="ProjectCommentContainer">
        <div className="ProjectCommentWrapper">
          <div className="ProjectCommentTitle">Project Comments</div>
          {loading ? (
            <>
              <HashSpinner size={30} />
            </>
          ) : (
            <>
              <ScrollToBottom className="ProjectCommentArea">
                {rows.map((comment) => {
                  return (
                    <div className="ProjectCommentContent">
                      <Comment
                        // key={comment.cid}
                        comment={comment.comment}
                        role={comment.role}
                        timestamp={comment.createdAt}
                      />
                    </div>
                  );
                })}
              </ScrollToBottom>
            </>
          )}
          <div className="ProjectCommentTypingArea">
            <textarea
              placeholder="Type your Comment"
              name="comment"
              id="comment"
              cols="100"
              rows="2"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            ></textarea>
            {postingComment ? (
              <>
                <HashSpinner size={30} />
              </>
            ) : (
              <>
                <button
                  className="ProjectCommentTypingAreaButton"
                  onClick={() => {
                    if (comment !== "") {
                      postComment(comment);
                    }
                  }}
                >
                  Post Comment
                </button>
                {role === "EXPERT" ? (
                  <button className="ProjectCommentTypingAreaButton">
                    Comment and Review Project
                  </button>
                ) : (
                  ""
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectComments;
