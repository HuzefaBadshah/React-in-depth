import { resURL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { name, cuisines, avgRating, sla, cloudinaryImageId } = props.info;
    return (
        <div className="res-card">
            <div className="res-card__logo">
                <img src={`${resURL}${cloudinaryImageId}`} alt="Meghana Foods" />
            </div>
            <h3>{name}</h3>
            <p>{cuisines.join(', ')}</p>
            <p>{avgRating} stars</p>
            <p>{sla.slaString}</p>
        </div>
    )
}

export default RestaurantCard;