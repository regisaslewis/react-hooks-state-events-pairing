import React, { useState } from "react";
import Comments from "./Comments";
import Details from "./Details"
import video from "../data/video.js";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);

  

  function handleUpvotes() {
    setUpvotes(() => upvotes + 1);
  }

  function handleDownvotes() {
    setDownvotes(() => downvotes - 1);
  }

  function commentHide() {
    setIsVisible(!isVisible);
  }
  
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Details 
        video={video} 
        upvotes={upvotes}
        downvotes={downvotes}
        handleUpvotes={handleUpvotes}
        handleDownvotes={handleDownvotes}
        commentHide={commentHide}
      />
      <div style={isVisible ? {"display": "block"} : {"display" : "none"}}>
      <Comments commentList={video.comments} />
      </div>
    </div>
  );
}

export default App;
