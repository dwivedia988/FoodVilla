import { createContext } from "react";

const UserContext = createContext({
    user : {
        name: "Adarsh Dwivedi",
        email: "dwivedia988@gmail.com",
}});

export default UserContext;