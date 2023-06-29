import "./Video"
import "./Video.scss"

function Video({currVid}) {
    return (
        <div className="video-container">
            <video controls poster={currVid.image} className="video-container__video">
            </video>
        </div>
    )
}

export default Video