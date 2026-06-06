import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  //const [error, setError] = useState("");


  if (resInfo === null) {
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