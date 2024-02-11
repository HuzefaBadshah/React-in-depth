import { categoryImages } from "../utils/constants";
import RestaurantAccordionDetails from "./RestaurantAccordionDetails";

function RestaurantAccordion({ title, info, accClickHandler, showDetails }) {
    return (
        <div className="accordion">
            <div data-testid='accordion-header' className="header" onClick={accClickHandler}>
                <h2>{title}({info.length})</h2>
                <span>{showDetails ? '🔼' : '🔽'}</span>
            </div>
            {showDetails && info.map((detail) => <RestaurantAccordionDetails key={detail.id} detail={detail} />)}
        </div>
    )
}

export default RestaurantAccordion;