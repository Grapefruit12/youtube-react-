import React, { useState, useEffect } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';


function App() {
  const [videos, setVideos]=useState([]);

  useEffect(()=>{
    // console.log('useEffect');
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDuDW6_W69diZ03NTvR8yhNdKWTmgCtHZc", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);
  return <VideoList videos={videos} />;
}

export default App;
