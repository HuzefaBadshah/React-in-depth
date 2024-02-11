import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantAccordion from "./RestaurantAccordion";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [showAcc, setShowAcc] = useState(0);

    const { categories, resName } = useRestaurantMenu(resId);

    if (!categories) {
        return <h1>TODO: Display Shimmer UI here...</h1>
    }


    return (
        <div className="menu">
            <h2>{resName}</h2>
            {categories.map(({ card: { card } }, index) => {
                let itemCards = null;
                let title = '';
                let subtitle = '';
                if (card.itemCards) {
                    itemCards = card.itemCards;
                    title = card.title;
                } else if (card.categories) {
                    const categories = card.categories;
                    if (categories[0].itemCards) {
                        title = card.title;
                        subtitle = card.categories[0].title;
                        itemCards = categories[0].itemCards;
                    } else {
                        itemCards = categories;
                    }
                } else if (card.info) {
                    const info = card.info;
                    title = info.title;
                    itemCards = [{ ...info }];
                }

                itemCards = itemCards.map(({ card: { info } }) => info);
                return <RestaurantAccordion key={title} resName={resName} title={title} info={itemCards} subtitle={subtitle} accClickHandler={() => {
                    //console.log('index, showAcc: ', index, showAcc);
                    (index === showAcc) ? setShowAcc(null) : setShowAcc(index);
                }} showDetails={index === showAcc} />
            })}
        </div>
    )
};

export default RestaurantMenu;