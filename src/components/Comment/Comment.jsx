import "./Comment.css";
import React from "react";

const Comment = (prop) => {
  const comment = prop.comment;
  const timestamp = prop.timestamp;
  const role = prop.role;
  return (
    <>
      <div className="CommentWrapper">
        <div className="CommentText">{comment}</div>
        <div className="CommentInfo">
          <div className="CommentTimestamp">{timestamp}</div>
          <div className="CommentRole">{role}</div>
        </div>
      </div>
    </>
  );
};

export default Comment;
