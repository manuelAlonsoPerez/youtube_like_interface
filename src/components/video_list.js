import React, {Component} from 'react';
import VideoListItem from './video_list_item'; 

const VideoList = (props) => {
    // (props) fetches the state passed in the main index.js
    
    const videoItems = props.videos.map( (video) => {
        return (
            <VideoListItem 
                // Passes the argument onVideoSelect to videoListItem component
                onVideoSelect = {props.onVideoSelect}
                // We need to use a unique id for each video item, we can use the video.etag property
                key ={video.etag} 
                video ={video} />
        );
    });
    
    return (
        <ul className = 'col-md-4 list-group'>
            {videoItems}
        </ul>
    );
};

export default VideoList;