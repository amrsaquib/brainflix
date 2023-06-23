import './App.scss';
import './styles/partials/_global.scss'
import Header from './components/Header/Header';
import Video from './components/Video/Video'
import videos from'./data/video-details.json'
import { useState } from 'react';
import VideoDescription from './components/VideoDescription/VideoDescription';
import Comments from './components/Comments/Comments';


console.log(videos[0])


function App() {
  const [currVid, setCurrVid] = useState(videos[0])
  return (
    <>
        <Header/>
        <Video thumbnail={currVid.image}/>
        <VideoDescription currVid={currVid} />
        <Comments />
    </>
  )
}

export default App;
