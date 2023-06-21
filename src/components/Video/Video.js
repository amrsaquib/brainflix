import "./Video"
import "./Video.scss"

function Video(props) {
    return (
        <div className="video-container">
            <video controls poster={props.thumbnail} className="video-container__video"></video>
        </div>
    )
}

export default Video