import "./ProjectComments.css";
import React from "react";
import Comment from "../Comment/Comment";
import ScrollToBottom from "react-scroll-to-bottom";

const ProjectComments = (prop) => {
  const projectId = prop.id;
  const role = prop.role;

  const rows = [
    {
      commentId: 1,
      comment: "Comment added by Expert",
      projectId: 1,
      commenterRole: "EXPERT",
      createdAt: "2023-01-28 14:30:00",
    },
    {
      commentId: 2,
      comment: "Comment reply added by USER",
      projectId: 1,
      commenterRole: "USER",
      createdAt: "2023-01-28 14:31:00",
    },
    {
      commentId: 3,
      comment: "Comment added by Expert",
      projectId: 1,
      commenterRole: "EXPERT",
      createdAt: "2023-01-28 14:32:00",
    },
    {
      commentId: 4,
      comment: "Comment added by User",
      projectId: 1,
      commenterRole: "USER",
      createdAt: "2023-01-28 14:33:00",
    },
  ];

  return (
    <>
      <div className="ProjectCommentContainer">
        <div className="ProjectCommentWrapper">
          <div className="ProjectCommentTitle">Project Comments</div>
          <ScrollToBottom className="ProjectCommentArea">
            {rows.map((comment) => {
              return (
                <div className="ProjectCommentContent">
                  <Comment
                    comment={comment.comment}
                    role={comment.commenterRole}
                    timestamp={comment.createdAt}
                  />
                </div>
              );
            })}
          </ScrollToBottom>
          <div className="ProjectCommentTypingArea">
            <textarea
              placeholder="Type your Comment"
              name="comment"
              id="comment"
              cols="100"
              rows="2"
            ></textarea>
            <button className="ProjectCommentTypingAreaButton">
              Post Comment
            </button>
            {role === "EXPERT" ? (
              <button className="ProjectCommentTypingAreaButton">
                Comment and Review Project
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectComments;
