import { useDispatch } from "react-redux";
import { categoryImages } from "../utils/constants";
import { addItem } from "../redux-slices/cartSlice";

function RestaurantAccordionDetails({ detail }) {

    const dispatch = useDispatch();

    function handleClick(item) {
        dispatch(addItem(item));
    }
    return (
        <div data-testid='accordionDetails' className="details">
            <div className="details-content">
                <div className={detail.isVeg === 1 ? "details-content__veg-info" : "details-content__non-veg-info"}>{detail.isVeg === 1 ? 'VEG' : 'NON-VEG'}</div>
                <div className="details-heading">{detail.category}</div>
                <p className="decsription">{detail.description}</p>
            </div>
            <div className="details-img">
                <img src={`${categoryImages}${detail.imageId}`} alt={detail.category} />
                <button onClick={() => handleClick(detail)}><span>+</span> Add</button>
            </div>
        </div>
    )
};

export default RestaurantAccordionDetails;