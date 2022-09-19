import React from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onSearchTermSubmit = async (searchTerm) => {
    const response = await youtube.get('/search', {
      params: {
        q: searchTerm,
      },
    });
    console.log('RESPOSE', response);
    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    console.log('FROM THE APP', video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <h1>Advance Video Searcher</h1>
        <SearchBar onFormSubmit={this.onSearchTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
