import pfp from "../../assets/images/Mohan-muruge.jpg"
import Button from '../Button/Button'
import commentIcon from '../../assets/icons/add_comment.svg'
import './Comments.scss'
import Comment from "../Comment /Comment"


export default function Comments({comments}) {
    console.log(comments)
    let commentList = comments.map((c) => {return (<li key={c.id}><Comment name={c.name} comment={c.comment} timestamp={c.timestamp}/></li>)})
    console.log(commentList)
    return (
        <div className="comments">
            <h3>3 Comments</h3>

            <div className="comments__add-comment">
                <img className="comments__pfp" src={pfp}/>
                <div className="comments__right">
                    <label className="comments__input-container label">
                        JOIN THE CONVERSATION
                        <input className="comments__input" placeholder="Add a new comment"></input>
                    </label>
                    <Button imgsrc={commentIcon} txt="COMMENT"/>
                </div>
            </div>

            <ul className="comments__comment-list">
                {commentList}
            </ul>
            
        </div>
    )
}