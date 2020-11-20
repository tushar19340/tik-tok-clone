import React, { useState } from 'react';
import './VideoSidebar.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MessageIcon from '@material-ui/icons/Message';

function VideoSidebar() {
    const [liked, setLiked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
          {liked ? (
               <FavoriteBorderIcon 
               onClick={e => setLiked(false)} />
          ): (
            <  FavoriteIcon 
            onClick={e => setLiked(true)} />
          )}
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
