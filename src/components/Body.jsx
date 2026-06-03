import RestaurantCard from "./RestaurantCard";
//import { resList } from "../utils/mockData";
import { useState, useEffect} from "react";
import { FOOD_API } from "../utils/contact";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants]  = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants , setFilteredRestaurants] = useState([]);
    
    useEffect(() =>{
      fetchData();
    }, []);

    const fetchData = async () => {
      const data = await fetch(FOOD_API);
      const json = await data.json();
      console.log(json);

      const restaurants =
    json?.data?.cards?.find(
      (card) =>
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);

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
           setFilteredRestaurants(filteredRestaurants);
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
        {filteredRestaurants.map((restaurant) => (
          <Link 
            key = {restaurant.info.id}
            to = {"/restaurants/" + restaurant.info.id}
          >
          <RestaurantCard resData = {restaurant}/>
          </Link>
          //<RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
