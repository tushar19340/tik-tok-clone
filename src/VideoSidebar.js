import React from 'react';
import './VideoSidebar.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import MessageIcon from '@material-ui/icons/Message';

function VideoSidebar() {
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        <FavoriteBorderIcon />
        <p>300</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon />
        <p>500</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon />
        <p>100</p>
      </div>
      
    </div>
  );
}

export default VideoSidebar;
