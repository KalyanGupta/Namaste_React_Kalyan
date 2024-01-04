import React from "react";
class UserClass extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            userInfo :{
                name:"Loading....",
                location: "Loading....",
                avatar_url: "",
            }
        }
        //console.log("Child Constructor");
    }

    async componentDidMount()
    {
        console.log("Child component did mount");
        try{
                const data = await fetch("https://api.github.com/users/kalyangupta");
                const json = await data.json();
                console.log(json);
                this.setState(
                    {userInfo: json}
                )
            }

        catch(e)
        {
            console.log(e);
        }
        
    }

    componentDidUpdate()
    {
        //console.log("Component Did Update");
    }

    render() 
    {
        //console.log("Child render");
        const {name, location, avatar_url} = this.state.userInfo;
        // debugger;
        return(
            <div className="user-container">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                {/* <h3>Contact: {contact}</h3> */}
                <img src={avatar_url} alt="Github Image" height={200}/>
            </div>
        )
    }
}
export default UserClass;

