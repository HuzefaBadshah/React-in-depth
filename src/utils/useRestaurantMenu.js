import { useEffect, useState } from "react";
import { proxy } from "./constants";

function useRestaurantMenu(resId) {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        (async function () { //${proxy}
            const res = await fetch(`${proxy}https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D28.5800357%26lng%3D77.32741709999999%26restaurantId%3D${resId}%26catalog_qa%3Dundefined%26submitAction%3DENTER`);

            const { data } = await res.json();

            // console.log('res Info insideuseRestaurantMenu : ', data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
            const { name, costForTwoMessage, id, cuisines } = data?.cards[0]?.card?.card?.info;

            setResInfo({ name, costForTwoMessage, id, cuisines, menuItems: data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards });
        })();
    }, []);

    return resInfo;
}

export default useRestaurantMenu;