import VideoDescription from "../VideoDescription/VideoDescription"
import Comments from "../Comments/Comments"
import VideoList from "../VideoList/VideoList"
import './VideoBelow.scss'

export default function VideoBelow({currVid, videoList, changeCurrVid}) {
    return <div className="video-below">
        <div className="video-below__left">
        <VideoDescription currVid={currVid} />
        {console.log(currVid)}
        <Comments comments={currVid.comments}/>
        </div>
        <VideoList videoList={videoList} currVid={currVid} changeCurrVid={changeCurrVid}/>
    </div>
}

/* <Comments comments={currVid.comments}/>*/