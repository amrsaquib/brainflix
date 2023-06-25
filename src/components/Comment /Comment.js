import './Comment.scss'

export default function Comment({name, comment, timestamp}) {
    let newDate = new Date(timestamp)
    let date = `${((newDate.getMonth()+1) >= 10) ? newDate.getMonth()+1 : `0${newDate.getMonth()+1}`}/${(newDate.getDate() >= 10) ? newDate.getDate() : `0${newDate.getDate()}`}/${newDate.getFullYear()}`
    return (
        <div className="comment">
            <img className="comment__pfp"/>
            <div className='comment__right'>
                <div className='comment__top'>
                    <h3>{name}</h3>
                    <p className='comment__date'>{date}</p>
                </div>
                <p className='comment__body'>{comment}</p>
            </div>
        </div>
    )
}