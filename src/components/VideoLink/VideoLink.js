import "./VideoLink.scss";
import { Link } from "react-router-dom";

export default function VideoLink({
  title,
  channel,
  image,
  changeCurrVid,
  id,
}) {
  const clickHandler = () => {
    changeCurrVid(id);
  };

  return (
    <Link className="container" to={`../${id}`}>
      <div className="video-link" onClick={clickHandler}>
        <img className="video-link__thumbnail" src={image} alt="video thumbnail"/>
        <div className="video-link__right">
          <h3 className="video-link__title">{title}</h3>
          <p>{channel}</p>
        </div>
      </div>
    </Link>
  );
}
