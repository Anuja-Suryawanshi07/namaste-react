import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState} from "react";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants]  = useState(resList);
  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search Here..."
        />
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterdList = listOfRestaurants.filter(
              (res) => res.rating > 4.5,
            );
            setListOfRestaurants(filterdList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
