import React from 'react';
import Loading from './Loading';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <Loading />;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div
        className="ui embed rounded-embed"
        style={{ borderRadius: '5px', overflow: 'hidden' }}
      >
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment  rounded-segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
