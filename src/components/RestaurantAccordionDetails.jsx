import { categoryImages } from "../utils/constants";

function RestaurantAccordionDetails({ detail }) {
    return (
        <div className="details">
            <div className="details-content">
                <div className={detail.isVeg === 1 ? "details-veg-info" : "details-non-veg-info"}>{detail.isVeg === 1 ? 'VEG' : 'NON-VEG'}</div>
                <div className="details-heading">{detail.category}</div>
                <p className="decsription">{detail.description}</p>
            </div>
            <div className="details-img">
                <img src={`${categoryImages}${detail.imageId}`} alt={detail.category} />
            </div>
        </div>
    )
};

export default RestaurantAccordionDetails;