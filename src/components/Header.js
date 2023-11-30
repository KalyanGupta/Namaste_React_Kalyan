import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact US</li>
                    <li>Cart</li>
                    <button className="login" onClick={ButtonClick}>{logButton}</button>
                </ul>
                
            </div>
        </div>
    )
}
export default Header;

