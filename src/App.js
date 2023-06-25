import './App.scss';
import './styles/partials/_global.scss'
import Header from './components/Header/Header';
import Video from './components/Video/Video'
import videos from'./data/video-details.json'
import videoList from './data/videos.json'
import { useState } from 'react';
import VideoBelow from './components/VideoBelow/VideoBelow';


console.log(videos[0])


function App() {
  const [currVid, setCurrVid] = useState(videos[0])
  return (
    <>
        <Header/>
        <Video thumbnail={currVid.image}/>
        <VideoBelow currVid={currVid} videoList={videoList} />
    </>
  )
}

export default App;
