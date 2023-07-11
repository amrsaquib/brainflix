import logo from "../../assets/logo/BrainFlix-logo.svg"
import search from "../../assets/icons/search.svg"
import Button from "../Button/Button"
import upload from "../../assets/icons/upload.svg"
import pfp from "../../assets/images/Mohan-muruge.jpg"
import "./Header.scss"
import { Link} from "react-router-dom"

function Header({changeCurrVid, firstVid}) {
    let clickHandler = () => {
        if(changeCurrVid && firstVid) {
            changeCurrVid(firstVid)
        }
        
    }
    return (
        <header className="header">
            <Link to={`/`}><img className="header__logo" src={logo} alt="logo"onClick={clickHandler}/> </ Link>
            <div className="header__functionality">
                <div className="header__mobile-search"> 
                    <label className="header__searchbar">
                        <img src={search} />
                        <input type="text" placeholder="Search"></input>
                    </label>
                    <img className="header__pfp header__pfp--mobile" src={pfp}/>
                </div>
                <Link to="../upload" className="header__button-container"><Button imgsrc={upload} txt="UPLOAD" className="header__button"/></Link>
                <img className="header__pfp header__pfp--desktop" src={pfp}/>
            </div>
        </header>
    )
}

export default Header