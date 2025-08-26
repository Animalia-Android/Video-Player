import React, { useState, useEffect } from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
// import youtube from "../apis/youtube";
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';
import NavBar from './NavBar';
import '../global.css';
import Footer from './Footer';

const App = () => {
  // THIS IS THE ORGINAL COMPONENT WITHOUT CUSTOM HOOKS
  // const [videos, setVideos] = useState([]);
  // const [selectedVideo, setSelectedVideos] = useState(null);

  // useEffect(() => {
  //   onTermSubmit("halloween");
  // }, []);

  // setSelectedVideos(response.data.items[0]);

  // const onTermSubmit = async (searchTerm) => {
  //   const response = await youtube.get("/search", {
  //     params: {
  //       q: searchTerm,
  //     },
  //   });

  //   setVideos(response.data.items);
  // };

  // const onVideoSelect = (video) => {
  //   setSelectedVideos(video);
  // };

  //THIS IS THE SAME APP COMPONENT WITH CUSTOM HOOKS
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('Fall');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div
      className=""
      style={{
        borderRadius: '12px',
        overflow: 'hidden',
        backgroundColor: '#f4f4f4',
        margin: '1rem',
      }}
    >
      <NavBar />
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div
            className="five wide column"
            style={{
              maxHeight: '800px',
              overflowY: 'auto',
              paddingRight: '0.5rem',
            }}
          >
            <VideoList
              onVideoSelect={(video) => setSelectedVideo(video)}
              videos={videos}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
