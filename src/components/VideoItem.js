import './VideoItem.css'
import React from 'react';

const VideoItem = (props) => {
    const  onVideoSelect = () => {
        props.onVideoSelect(props.video);        
    }
    return (
        <div onClick={onVideoSelect} className="video-item item">
            <img 
                className="ui image" 
                alt={props.video.snippet.title} 
                src={props.video.snippet.thumbnails.medium.url} 
            />
            <div className="content">
                <div className="header">
                    {props.video.snippet.title}
                </div>
            </div>
        </div>
    )
}

export default VideoItem;