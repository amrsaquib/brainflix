import Video from "../../components/Video/Video";
import VideoBelow from "../../components/VideoBelow/VideoBelow";
import Header from "../../components/Header/Header";
import axios from "axios";

import { useState, useEffect } from "react";
export default function Home() {
  let [videoList, setVideoList] = useState([]);
  const [currVid, setCurrVid] = useState({});
  const changeCurrVid = (vidId) => {
    axios
      .get(
        `http://localhost:8080/videos/${vidId}?api_key=b76a1cf2-baa5-4f25-b8f4-ed70d2e32552`
      )
      .then((r) => {
        setCurrVid(r.data);
      });
  };

  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/videos?api_key=b76a1cf2-baa5-4f25-b8f4-ed70d2e32552"
      )
      .then((r) => {
        setVideoList(r.data);
        return axios.get(
          `http://localhost:8080/videos/${r.data[0].id}?api_key=b76a1cf2-baa5-4f25-b8f4-ed70d2e32552`
        );
      })
      .then((r) => {
        setCurrVid(r.data);
      });
  }, []);

  if (!videoList[0] || !currVid.id) {
    return <>Loading!!!</>;
  } else {
    return (
      <>
        <Header changeCurrVid={changeCurrVid} firstVid={videoList[0].id} />
        <Video currVid={currVid} />
        <VideoBelow
          currVid={currVid}
          videoList={videoList}
          changeCurrVid={changeCurrVid}
        />
      </>
    );
  }
}
