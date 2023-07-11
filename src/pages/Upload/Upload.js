import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import "./Upload.scss";
import icon from "../../assets/icons/upload.svg";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Upload() {
  let navigate = useNavigate();
  const publish = (e) => {
    e.preventDefault();
    let newVideo = {
      title: "",
      channel: "amr",
      image: "http://localhost:8080/images/Upload-video-preview.jpg",
      description: "",
    };
    newVideo.title = e.target.title.value;
    newVideo.description = e.target.description.value;
    axios
      .post(
        "http://localhost:8080/videos?api_key=b76a1cf2-baa5-4f25-b8f4-ed70d2e32552",
        newVideo
      )
      .then((r) => {
        alert("Success!");
        navigate("../");
      });
  };

  const cancel = () => {
    navigate("../");
  };

  return (
    <>
      <Header />
      <div className="upload">
        <h1 className="upload__header">Upload Video</h1>
        <div className="upload__main">
          <div className="upload__top">
            <p className="label">VIDEO THUMBNAIL</p>
            <img src={thumbnail} className="upload__thumbnail" />
          </div>
          <form onSubmit={publish}>
            <label className="label upload__label">
              TITLE YOUR VIDEO{" "}
              <input
                className="upload__input"
                type="text"
                placeholder="Add a title to your video"
                name="title"
              ></input>
            </label>
            <label className="label upload__label">
              ADD A VIDEO DESCRIPTION
              <input
                className="upload__input upload__input--description"
                type="text"
                placeholder="Add a description to your video"
                name="description"
              ></input>
            </label>
            <div className="upload__buttons">
              <Button imgsrc={icon} txt="PUBLISH" />
              <a className="upload__cancel" onClick={cancel}>
                CANCEL
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
