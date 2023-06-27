import Video from "../../components/Video/Video";
import VideoBelow from "../../components/VideoBelow/VideoBelow";

import axios from "axios";

import { useState, useEffect } from "react";

export default function Home() {
  let api_key = "b76a1cf2-baa5-4f25-b8f4-ed70d2e32552";

  let [videoList, setVideoList] = useState([]);
  const [currVid, setCurrVid] = useState({});
  const changeCurrVid = (vidId) => {
    axios.get(`https://project-2-api.herokuapp.com/videos/${vidId}?api_key=b76a1cf2-baa5-4f25-b8f4-ed70d2e32552`)
    .then((r) => {
      setCurrVid(r.data)
    })
  };

  useEffect(() => {
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos?api_key=b76a1cf2-baa5-4f25-b8f4-ed70d2e32552"
      )
      .then((r) => {
        setVideoList(r.data);
        return axios.get(
          `https://project-2-api.herokuapp.com/videos/${r.data[0].id}?api_key=b76a1cf2-baa5-4f25-b8f4-ed70d2e32552`
        );
      })
      .then((r) => {
        setCurrVid(r.data);
      });
  }, []);

  if(!videoList || !currVid) {
    return (<>Loading!!!</>)
  } else {
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
  }