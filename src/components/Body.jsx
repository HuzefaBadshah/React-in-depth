import { useEffect, useState } from "react";
// import { restaurants } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { homePageData } from "../utils/constants";
import { Link } from "react-router-dom";


const Body = () => {
    const [res, setRes] = useState([]);
    const [resFiltered, setResFiltered] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        swiggyData();
        console.log('useEffect called!');
    }, []);

    async function swiggyData() {
        const res = await fetch(homePageData);
        const { data } = await res.json();
        const restaurants = data.cards[1].card.card.gridElements.infoWithStyle.restaurants || data.cards[2].card.card.gridElements.infoWithStyle.restaurants
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
                {resFiltered && resFiltered?.map(({ info }) => {
                    console.log('info: ', info);
                    return <Link key={info.id} to={`menu/${info.id}`}>
                        <RestaurantCard info={info} />
                    </Link>
                })}
            </div>
        </div>
    )
}

export default Body;