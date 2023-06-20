import logo from "../../assets/logo/BrainFlix-logo.svg"
import search from "../../assets/icons/search.svg"
import Button from "../Button/Button"
import upload from "../../assets/icons/upload.svg"
import pfp from "../../assets/images/Mohan-muruge.jpg"
import "./Header.scss"

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} />
            <div className="header__functionality">
                <div className="header__mobile-search"> 
                    <label className="header__searchbar">
                        <img src={search} />
                        <input type="text" placeholder="Search"></input>
                    </label>
                    <img className="header__pfp header__pfp--mobile" src={pfp}/>
                </div>
                <Button imgsrc={upload} txt="UPLOAD" className="header__button"/>
                <img className="header__pfp header__pfp--desktop" src={pfp}/>
            </div>
        </header>
    )
}

export default Header