import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (!resInfo) {
        return <h1>TODO: Display Shimmer UI here...</h1>
    }

    return (
        <div className="menu">
            <h2>{resInfo?.name}</h2>
            <p>{resInfo?.cuisines.join(', ')} - {resInfo?.costForTwoMessage}</p>
            <ul>
                {resInfo?.menuItems?.map((menuItem) => (
                    <li key={menuItem.card.info.id}>{menuItem.card.info.name}</li>
                ))}
            </ul>
        </div>
    )
};

export default RestaurantMenu;