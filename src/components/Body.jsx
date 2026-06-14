import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import { FOOD_API } from "../utils/contact";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromted = withPromotedLabel(RestaurantCard);

  console.log("Body Rendered", listOfRestaurants);

  const onlineStatus = useOnlineStatus();
  const {loggedInUser,setUserName} = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(FOOD_API);
      const json = await data.json();

      const restaurants =
        json?.data?.cards?.find(
          (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  if (!onlineStatus) {
    return (
      <h1 className="text-center text-xl sm:text-2xl font-bold text-red-500 mt-10">
        Looks like you are Offline. Check your internet connection!
      </h1>
    );
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="px-4 sm:px-6 py-4">
      {/* Search & Filter */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mb-8">
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <input
            type="text"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search restaurants..."
          />

          <button
            className="w-full sm:w-auto bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase()),
              );

              setFilteredRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="w-full sm:w-auto bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          onClick={() => {
            const filtered = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4,
            );

            setFilteredRestaurants(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
        {/* changing the UserContext by using search box. */}
        <div className="search m-4 p-4 flex items-center">
          <label className="px-2">UserName : </label>
          <input className="border border-black p-2" 
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}/>
          
        </div>
      </div>

      {/* Restaurant Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={`/restaurants/${restaurant?.info?.id}`}
            className="w-full max-w-[280px] hover:scale-105 transition-transform duration-200"
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPromted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
