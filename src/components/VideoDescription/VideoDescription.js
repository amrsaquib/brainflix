import view from "../../assets/icons/views.svg"
import like from "../../assets/icons/likes.svg"
import "./VideoDescription.scss"

function VideoDescription(props) {
    let d = new Date(props.currVid.timestamp)
     let dateString = `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`
    return (
        <div className="video-description">
            <h1 className="video-description__title">{props.currVid.title}</h1>
            <div className="video-description__info">
                <div className="video-description__data">
                    <h3 className="video-description__data--top">By: {props.currVid.channel}</h3>
                    <p className="video-description__grey-text">{dateString}</p>
                </div>
                <div className="video-description__data video-description__right">
                    <div className="video-description__data video-description__data--right video-description__data--top">
                        <img src={view}/>
                        <p className="video-description__grey-text">{props.currVid.views}</p>
                    </div>
                    <div className="video-description__data video-description__data--right">
                        <img src={like}/>
                        <p className="video-description__grey-text">{props.currVid.likes}</p>
                    </div>
                </div>
            </div>
            <p className="video-description__body">{props.currVid.description}</p>
        </div>
    )
}

export default VideoDescription