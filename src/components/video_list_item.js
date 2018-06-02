import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
    // We have passed the onVideoSelect function argument, we can create the event listener
    // that will callback this function
        <li onClick={ ()=> onVideoSelect(video)} className = 'list-group-item'>
            <div className = 'video-list media'>
                <div className='media-left'>
                    <img className = 'media-object' src={imageUrl} />
                </div>
                <div className='media-object'>
                    <div className='media-heading'>{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;