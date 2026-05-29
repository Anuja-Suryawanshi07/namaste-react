import RestaurantCard from "./RestaurantCard";
//import { resList } from "../utils/mockData";
import { useState, useEffect} from "react";
//import { FOOD_API } from "../utils/contact";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants]  = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants , setFilteredRestaurants] = useState([]);
    
    useEffect(() =>{
      fetchData();
    }, []);

    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);

      const restaurants =
    json?.data?.cards?.find(
      (card) =>
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setListOfRestaurants(restaurants);
    }

    if(listOfRestaurants.length === 0){
      return <Shimmer />
    }
  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange = { (e) => {
            setSearchText(e.target.value);
          }}
          placeholder="Search Here..."
        />
        <button className="search-button"
          onClick = { () => {
            const filteredRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
           );
           setListOfRestaurants(filteredRestaurants);
          }}
        >
        Search  
        </button>  
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterdList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4,
            );
            setListOfRestaurants(filterdList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
