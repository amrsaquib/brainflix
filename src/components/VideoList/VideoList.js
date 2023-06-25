import VideoLink from "../VideoLink/VideoLink"
import './VideoList.scss'

export default function VideoList({videoList, currVid}) {
    let videos = videoList.map((video) => {return (video.id !== currVid.id) && <li key={video.id}><VideoLink title={video.title} channel={video.channel} image={video.image}/></li>})
    return <div className="video-list">
        <p className="label">NEXT VIDEOS</p>
        <ul>
            {videos}
        </ul>
    </div>
}