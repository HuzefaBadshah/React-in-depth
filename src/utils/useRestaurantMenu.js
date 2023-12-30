import { useEffect, useState } from "react";
import { proxy } from "./constants";

function useRestaurantMenu(resId) {
    const [resInfo, setResInfo] = useState({ categories: null, resName: '' });

    useEffect(() => {
        (async function () { //${proxy}
            const res = await fetch(`${proxy}https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D22.7195687%26lng%3D75.8577258%26restaurantId%3D${resId}%26catalog_qa%3Dundefined%26submitAction%3DENTER`);

            const { data } = await res.json();

            const categories = data.cards[2].groupedCard.cardGroupMap.REGULAR?.cards;
            setResInfo({ resName: data.cards[0].card.card.info.name, categories: [...categories.filter((item) => item.card.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')] });
        })();
    }, []);

    return resInfo;
}

export default useRestaurantMenu;