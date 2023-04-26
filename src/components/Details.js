import React, { useState } from "react";

function Details({ 
  video,
  upvotes,
  handleUpvotes,
  downvotes,
  handleDownvotes,
  commentHide
 }) {
  const [hideButton, setHideButton] = useState(true);

  function hideClick() {
    setHideButton(!hideButton);
    commentHide();
  }
  
  return (
    <div>
      <h2>{video.title}</h2>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <button onClick={handleUpvotes}>{upvotes} 👍</button>
      <button onClick={handleDownvotes}>{downvotes} 👎</button>
      <br />
      <br />
      <button onClick={hideClick}>{hideButton ? "Hide Comments" : "Show Comments"}</button>
      <hr />
    </div>
  )
}

export default Details;