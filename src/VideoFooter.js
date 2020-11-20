import React, {useRef, useState} from 'react';
import icon from './icon.png';
import './VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';


function VideoFooter(){
   
    return(
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@tushar</h3>
                <p>Check out this awesome video</p>
                <div className="videoFooter__ticker">

                    <MusicNoteIcon className="videoFooter__icon" />
                    <Ticker mode="smooth">
                        {({ index}) =>(
                            <>
                            <p>Usher - Yeah</p>
                            
                            </>
                        )}
                    </Ticker>

                </div>
            </div>

            
            <img className="videoFooter__record" 
            // src={icon} 
            src="https://static.thenounproject.com/png/934821-200.png"
            alt=""/>
        </div>
    )
}
export default VideoFooter;