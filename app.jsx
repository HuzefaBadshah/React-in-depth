import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-conainer">
                <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large" alt="Yummy Food" />
            </div>
            <nav className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </nav>
        </div>
    )
}

const RestaurantCard = () => {
    return (
        <div className="res-card">
            <div className="res-card__logo">
                <img src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg" alt="Meghana Foods" />
            </div>
            <h3>Meghana Foods</h3>
            <p>Biryani, North Indian, Asian</p>
            <p>4.4 stars</p>
            <p>38 minutes</p>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);