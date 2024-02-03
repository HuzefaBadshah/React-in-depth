import { Link } from "react-router-dom";
import useOnlineHook from "../utils/useOnlineHook";
import { useSelector } from "react-redux";

const Header = () => {
    const isOnline = useOnlineHook();
    const totalCartItems = useSelector((store) => store.cart.items.length);
    return (
        <div className="header">
            <div className="logo-conainer">
                <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large" alt="Yummy Food" />
            </div>
            <nav className="nav-items">
                <ul>
                    <li className={isOnline ? 'online' : 'offline'}>{isOnline ? 'ONLINE' : 'OFFLINE'}</li>
                    <li><Link to='/'>Home</Link> </li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li><Link to='/cart'>Cart [{totalCartItems}]</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;