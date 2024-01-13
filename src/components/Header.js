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
        <div className=
        "flex justify-between bg-pink-100 shadow-lg items-center sm:bg-yellow-100 lg:bg-green-100"> 
            <div>
                <img 
                className="w-24 pl-4" 
                src={LOGO_URL}
                alt="Kalyan's Corner"
                />
            </div>

            <div className="flex items-center">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4">onlineStatus: {onlineStatus? tickMark : redCircle}</li>
                    <li className="px-4"><Link to="/" >Home</Link></li>
                    <li className="px-4"><Link to="/about"> About Us </Link></li>
                    <li className="px-4"><Link to="/contact">Contact US</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="px-4" onClick={ButtonClick}>{logButton}</button>         
                </ul>      
            </div>

        </div>
    )
}
export default Header;

