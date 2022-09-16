import axios from 'axios';

const KEY = 'AIzaSyBph4fbXq148r1rJyHDxnVF6UejBIxV8ps';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
