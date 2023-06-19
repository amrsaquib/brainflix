import logo from "../../assets/logo/BrainFlix-logo.svg"
import search from "../../assets/icons/search.svg"
import Button from "../Button/Button"
import upload from "../../assets/icons/upload.svg"

function Header() {
    return (
        <header>
            <img src={logo} />
            <div>
                <label> <img src={search} /> <input type="text"></input></label>
                <Button imgsrc={upload} txt="UPLOAD" />
                <div></div>
            </div>
        </header>
    )
}

export default Header