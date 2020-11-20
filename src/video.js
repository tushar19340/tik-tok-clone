import React, {useRef, useState} from 'react'
import VideoFooter from './VideoFooter'
import './Video.css'
import video1 from "./videos/1.mp4";
import VideoSidebar from './VideoSidebar'

function Video(){
    const [playing, setPlay] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress= () => {
        if(playing){
            videoRef.current.pause();
            setPlay(false);
        }else{
            videoRef.current.play();
            setPlay(true);
        }
    }
    return(
        <div className="video">
            < VideoSidebar />
            <video
                loop=" " 
                onClick={onVideoPress}
                ref={videoRef}
                className="video__player" 
                // src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"></video>
                src={video1}></video>
            < VideoFooter/>
        </div>
    )
}
export default Video;