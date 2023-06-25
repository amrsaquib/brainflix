import "./VideoLink.scss"

export default function VideoLink({title, channel, image, changeCurrVid, id}) {
    const clickHandler = () => {changeCurrVid(id)}

    return (
        <div className="video-link" onClick={clickHandler}>
            <img className="video-link__thumbnail" src={image}/>
            <div className="video-link__right">
                <h3 className="video-link__title">{title}</h3>
                <p>{channel}</p>
            </div>
        </div>
    )
}