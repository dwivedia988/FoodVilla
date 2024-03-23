import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { Link } from "react-router-dom";


const Footer = () => {
    const {user} = useContext(UserContext);
    return (
        <div className="bg-black text-white h-72 flex justify-between">
            <div className="m-auto">
                <h1 className="font-bold text-3xl">Food Villa</h1>
                <p>@2024 copyright</p>
            </div>
            <div className="m-auto pt-5">
                <ul>
                    <Link to="/"><li className="px-2">Home</li></Link>
                    <Link to="/about"><li className="px-2">About</li></Link>
                    <Link to="/contact"><li className="px-2">Contact</li></Link>
                </ul>
            </div>
            <div className="m-auto">
                <h4 className="p-10">
                    This site is developed by {user.name} - {user.email}
                </h4>
            </div>
        </div>
    )
};

export default Footer;