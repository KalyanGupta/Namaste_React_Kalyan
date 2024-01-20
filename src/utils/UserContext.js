import {createContext } from "react"

const UserContext = createContext({
    loggedInUserName: "Default User Name"
})

export default UserContext;