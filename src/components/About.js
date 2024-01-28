import UserClass from "./UserClass"

import { Component } from "react";
import UserContext from "../utils/UserContext";
class About extends Component
{
    constructor(props)
    {
        super(props);
       // console.log("Parent Constructor");
    }

    componentDidMount()
    {
        // console.log("Parent componentDidMount");
    }
    render()
    {
        // console.log("Parent Render");
        return(
            <>
            <h1>React by Namaste React- Akshay Saini</h1>  
            <UserContext.Consumer>
                {
                    (data)=> <h1 className="font-bold">UserName: {data.loggedInUserName}</h1>
                }
            </UserContext.Consumer>  
             <UserClass name="Narla Kalyan Gupta (Class)" location="Sirpur (Classs)" 
             contact="kalyannarla1843@gmail.com (class)">
             </UserClass>
            </>
        )
    }
}
export default About;

// const About = ()=>{
//     return(
//         <>
//             <h1>React by Namaste React- Akshay Saini</h1>
        
//             <UserClass name="Narla Kalyan Gupta (Class)" location="Sirpur (Classs)" 
//             contact="kalyannarla1843@gmail.com (class)">
//             </UserClass>
//         </>
//     )
// }