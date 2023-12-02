import { useState } from "react";
import { restaurants } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";


const Body = () => {
    const [res, setRes] = useState(restaurants);
    function onFilter() {
        const filteredRes = res.filter(({ info }) => info.avgRating > 4);
        setRes(filteredRes);
    }
    return (
        <div className="body">
            <div className="search">Search</div>
            <button className="filter-btn" onClick={onFilter}>Filter</button>

            <div className="res-container">
                {res.map(({ info }) => <RestaurantCard key={info.id} info={info} />)}
            </div>
        </div>
    )
}

export default Body;