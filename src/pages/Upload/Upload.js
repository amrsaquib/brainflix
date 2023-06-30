import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import "./Upload.scss";
import icon from "../../assets/icons/upload.svg";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";

export default function Upload() {
  let navigate = useNavigate()
  const publish = () => {
    alert("Success!")
    navigate('../')
  }

  const cancel = () => {
    navigate('../')
  }

  return (
    <>
    <Header/>
    <div className="upload">
      <h1 className="upload__header">Upload Video</h1>
      <p className="label">VIDEO THUMBNAIL</p>
      <img src={thumbnail} className="upload__thumbnail" />
      <form onSubmit={publish}>
        <label className="label upload__label">
          TITLE YOUR VIDEO{" "}
          <input
            className="upload__input"
            type="text"
            placeholder="Add a title to your video"
          ></input>
        </label>
        <label className="label upload__label">
          ADD A VIDEO DESCRIPTION
          <input
            className="upload__input upload__input--description"
            type="text"
            placeholder="Add a description to your video"
          ></input>
        </label>
        <div className="upload__buttons">
          <Button imgsrc={icon} txt="PUBLISH"/>
          <a className="upload__cancel" onClick={cancel}>CANCEL</a>
        </div>
      </form>
    </div>
    </>
  );
}
