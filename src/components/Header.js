import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";

const Title = () => (
    <a href="/">
        <img 
            data-testid="logo"
            className="h-28 p-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimKS0-E61jy_dctanYVq2rzxMV35RExo-Aw&usqp=CAU" 
            alt="Logo" 
        />
    </a>
);

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const isOnline = useOnline();

    const {user} = useContext(UserContext);

    const cartItems = useSelector(store => store.cart.items);

    return (
        <div className="bg-pink-50 shadow-lg">
            <div className="flex justify-between p-5 max-w-7xl mx-auto">
                <Title />
                <div className="nav-items">
                    <ul className="flex py-10">
                        <Link to="/"><li className="px-2">Home</li></Link>
                        <Link to="/about"><li className="px-2">About</li></Link>
                        <Link to="/contact"><li className="px-2">Contact</li></Link>
                        <Link to="/instamart"><li className="px-2">Instamart</li></Link>
                        <Link to="/cart"><li className="px-2" data-testid="cart">Cart- {cartItems.length} items</li></Link>
                    </ul>
                </div>
                <div className="flex">
                    <h1 data-testid="online-status" className="pt-11">{isOnline ? "✅" : "🔴"}</h1>
                    {/* <span className="p-10 font-bold text-red-900">{user.name}</span> */}
                    {isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Logout</button> : <button onClick={() => setIsLoggedIn(true)}>Login</button>}
                </div>
            </div>
        </div>
    );
};

export default Header;