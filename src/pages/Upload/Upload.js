import thumbnail from "../../assets/images/Upload-video-preview.jpg"
import './Upload.scss'
import icon from '../../assets/icons/upload.svg'
import Button from "../../components/Button/Button"

export default function Upload() {
    return (
        <div className="upload">
            <h1>Upload Video</h1>
            <p className="label">VIDEO THUMBNAIL</p>
            <img src={thumbnail} className="upload__thumbnail"/>
            <label className="label upload__label">TITLE YOUR VIDEO <input className="upload__input" type="text"></input></label>
            <label className="label upload__label">ADD A VIDEO DESCRIPTION<input className="upload__input upload__input--description" type="text"></input></label>
            <Button imgsrc={icon} txt="PUBLISH" />
            <a className="upload__cancel">CANCEL</a>
        </div>
    )
}