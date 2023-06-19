import "./Button.scss"

function Button(props) {
    return (
        <button className="button"><img src={props.imgsrc} className="button__icon"/>{props.txt}<span></span></button>
    )
}
export default Button