import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/contact";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState("");

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      console.log("Restaurant ID:", resId);

      const response = await fetch(MENU_API + resId);

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const json = await response.json();

      console.log("API Response:", json);

      setResInfo(json?.data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  if (!resInfo) {
    return <Shimmer />;
  }

  const restaurantInfo =
    resInfo?.cards?.find((card) => card?.card?.card?.info)?.card?.card?.info ||
    {};

  const { name, cuisines, costForTwoMessage } = restaurantInfo;

  const itemCards =
    resInfo?.cards
      ?.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.find(
        (card) =>
          card?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
      ?.card?.card?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>

      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>

      <h2>Menu</h2>

      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - ₹
            {(
              (item?.card?.info?.price ||
                item?.card?.info?.defaultPrice ||
                0) / 100
            ).toFixed(0)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;