import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  console.log('VideoItem component rendered', video.snippet.title);
  return (
    <div
      className="video-item item ui medium rounded image"
      onClick={() => {
        onVideoSelect(video);
      }}
    >
      <img
        className="ui image"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
