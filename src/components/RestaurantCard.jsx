import { useContext } from "react";
import { resURL } from "../utils/constants";
import inputContext from "../context/inputContext";

const RestaurantCard = (props) => {
    const { name, cuisines, avgRating, sla, cloudinaryImageId } = props.info;
    const { contextInputValue } = useContext(inputContext);
    return (
        <div className="res-card">
            <div className="res-card__logo">
                <img src={`${resURL}${cloudinaryImageId}`} alt={name} />
            </div>
            <h3>{name}</h3>
            <p>{cuisines.join(', ')}</p>
            <p>{avgRating} stars</p>
            <p>{sla.slaString}</p>
            <p>input context: <b>{contextInputValue}</b></p>
        </div>
    )
}

export default RestaurantCard;