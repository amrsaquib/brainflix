import pfp from "../../assets/images/Mohan-muruge.jpg"
import Button from '../Button/Button'
import commentIcon from '../../assets/icons/add_comment.svg'
import './Comments.scss'
import Comment from "../Comment /Comment"
import { useState } from "react"


export default function Comments({comments}) {
    let commentList = comments.map((c) => {return (<li key={c.id}><Comment name={c.name} comment={c.comment} timestamp={c.timestamp}/></li>)})

    let [isError, setIsError] = useState(false)

    let submitHandler = (e) => {
        e.preventDefault()
        if(e.target.comment.value === "") {
            setIsError(true) 
        } else {
            setIsError(false)
        }
    }
    return (
        <div className="comments">
            <h3>3 Comments</h3>

            <div className="comments__add-comment">
                <img className="comments__pfp" src={pfp}/>
                <form className="comments__right" onSubmit={submitHandler}>
                    <label className="comments__input-container label">
                        JOIN THE CONVERSATION
                        <input className={`comments__input ${isError && 'comments__input--error'}`} name="comment" placeholder="Add a new comment"></input>
                    </label>
                    <Button imgsrc={commentIcon} txt="COMMENT"/>
                </form>
            </div>

            <ul className="comments__comment-list">
                {commentList}
            </ul>
            
        </div>
    )
}