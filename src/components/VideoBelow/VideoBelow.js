import VideoDescription from "../VideoDescription/VideoDescription"
import Comments from "../Comments/Comments"
import VideoList from "../VideoList/VideoList"
import './VideoBelow.scss'

export default function VideoBelow({currVid, videoList}) {
    return <div className="video-below">
        <div className="video-below__left">
        <VideoDescription currVid={currVid} />
        <Comments comments={currVid.comments}/>
        </div>
        <VideoList videoList={videoList} currVid={currVid}/>
    </div>
}