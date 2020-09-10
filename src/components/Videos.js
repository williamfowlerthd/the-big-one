import React from "react";
import ReactPlayer from "react-player/youtube";

const Videos = () => {
  return (
    <div class="videoPlayer">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ZyPoQRTZSRY"
        width="100%"
        height="100%"
        position="absolute"
        top="0"
        left="0"
        controls="true"
      />
    </div>
  );
};
export default Videos;
