import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{
    const[logButton, setLogButton] = useState("Login")
    const ButtonClick = () =>{
        // if(logButton=="Login")
        //     setLogButton("Logout");
        // else
        //     setLogButton("Login")
        logButton === "Login" ? setLogButton("Logout") : setLogButton("Login")
    }
    const tickMark = "☑️";
    const redCircle = "🔴";
    const onlineStatus = useOnlineStatus();
    console.log(onlineStatus);
    return(
        <div className='header'> 
            <div className='logo-container'>
                <img 
                className='logo' 
                src={LOGO_URL}
                alt="Kalyan's Corner"
                />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>onlineStatus: {onlineStatus? tickMark : redCircle}</li>
                    <li><Link to="/" >Homee</Link></li>
                    <li><Link to="/about"> About Us </Link></li>
                    <li><Link to="/contact">Contact US</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={ButtonClick}>{logButton}</button>
                    
                </ul>
                
            </div>
        </div>
    )
}
export default Header;

