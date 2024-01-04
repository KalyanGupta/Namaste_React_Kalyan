import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () =>{
    const[logButton, setLogButton] = useState("Login")

    const ButtonClick = () =>{
        // if(logButton=="Login")
        //     setLogButton("Logout");
        // else
        //     setLogButton("Login")
        logButton === "Login" ? setLogButton("Logout") : setLogButton("Login")
    }
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
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about"> About Us </Link></li>
                    <li><Link to="/contact">Contact US</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={ButtonClick}>{logButton}</button>
                </ul>
                
            </div>
        </div>
    )
}
export default Header;

