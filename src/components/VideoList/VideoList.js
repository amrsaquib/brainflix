import VideoLink from "../VideoLink/VideoLink"
import './VideoList.scss'
import { Link } from "react-router-dom"

export default function VideoList({videoList, currVid, changeCurrVid}) {
    let videos = videoList.map((video) => {return (video.id !== currVid.id) && <li key={video.id}><VideoLink title={video.title} channel={video.channel} image={video.image} changeCurrVid={changeCurrVid} id={video.id}/></li>})
    return <div className="video-list">
        <p className="label">NEXT VIDEOS</p>
        <ul>
            {videos}
        </ul>
    </div>
}