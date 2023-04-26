import React from "react";
import CommentSingular from "./CommentSingular";

function Comments({ commentList }) {
  const length = commentList.length;
  const allComments = commentList.map(e => <CommentSingular 
  key={e.id}
  user={e.user}
  comment={e.comment}
  />)
  
  return (
    <div>
      <h3>{length} {length === 1 ? "Comment" : "Comments"}</h3>
      {allComments}
    </div>
  )
}

export default Comments;