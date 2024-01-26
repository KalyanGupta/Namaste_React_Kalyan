import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () =>{
    const cartItems = useSelector((store)=> store.cart.items);
    console.log(cartItems);

    const data = useContext(UserContext);
    //console.log(data);
    
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
                    <li className="px-4"><Link to="/cart">Cart - {cartItems.length}</Link></li>
                    <button className="px-4" onClick={ButtonClick}>{logButton}</button> 
                    <li className="px-4 font-bold">{data.loggedInUserName}</li>        
                </ul>      
            </div>

        </div>
    )
}
export default Header;

