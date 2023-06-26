import Video from "../../components/Video/Video";
import VideoBelow from "../../components/VideoBelow/VideoBelow";

import videos from "../../data/video-details.json";
import videoList from "../../data/videos.json";

import { useState } from "react";

export default function Home() {
  const [currVid, setCurrVid] = useState(videos[0]);
  const changeCurrVid = (vidId) => {
    for (let vid of videos) {
      if (vid.id === vidId) setCurrVid(vid);
    }
  };

  return (
    <>
      <Video thumbnail={currVid.image} />
      <VideoBelow
        currVid={currVid}
        videoList={videoList}
        changeCurrVid={changeCurrVid}
      />
    </>
  );
}
