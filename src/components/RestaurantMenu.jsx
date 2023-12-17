import { useEffect, useState } from "react"
import { proxy } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    useEffect(() => {
        (async function () { //${proxy}
            const res = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5800357&lng=77.32741709999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);

            const { data } = await res.json();

            console.log('res Info: ', data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
            const { name, costForTwoMessage, id, cuisines } = data?.cards[0]?.card?.card?.info;

            setResInfo({ name, costForTwoMessage, id, cuisines, menuItems: data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards });
        })();

    }, []);

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