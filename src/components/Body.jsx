import { useEffect, useState } from "react";
// import { restaurants } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { proxy } from "../utils/constants";
import { Link } from "react-router-dom";


const Body = () => {
    const [res, setRes] = useState([]);
    const [resFiltered, setResFiltered] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        swiggyData();
        console.log('useEffect called!');
    }, []);

    async function swiggyData() { //${proxy}
        const res = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
        const { data } = await res.json();
        const restaurants = data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRes(restaurants);
        setResFiltered(restaurants);
    }

    function handleTopRated() {
        const topRatedRes = res.filter(({ info }) => info.avgRating > 4);
        setResFiltered(topRatedRes);
    }

    function handleOnSearch(e) {
        e.preventDefault();
        const filtered = res.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setResFiltered(filtered);
    }

    return (
        <div className="body">
            <form onSubmit={handleOnSearch} className="search">
                <input type="text" onChange={(e) => { setSearchText(e.target.value) }} name="search" value={searchText} />
            </form>

            <button className="filter-btn" onClick={handleTopRated}>Top Rated</button>

            <div className="res-container">
                {resFiltered.map(({ info }) => <Link to={`menu/${info.id}`}>
                    <RestaurantCard key={info.id} info={info} />
                </Link>)}
            </div>
        </div>
    )
}

export default Body;