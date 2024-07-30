import React from "react";
import TagList from "./MainContainer/Tags/TagList";
import VideoContainer from "./MainContainer/Video/VideoContainer";

const MainContainer = () => {
  return (
    <div>
      <TagList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
