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
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
        (card) =>
          card?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
      )?.card?.card?.itemCards || [];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Restaurant Info */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          {name}
        </h1>

        <p className="text-gray-600 mt-2">{cuisines?.join(", ")}</p>

        <p className="mt-2 font-semibold text-green-700">{costForTwoMessage}</p>
      </div>

      {/* Menu Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        🍽️ Menu
      </h2>

      {/* Menu Items */}
      <div className="space-y-4">
        {itemCards.map((item) => {
          const info = item?.card?.info;

          return (
            <div
              key={info?.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-4"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">
                    {info?.name}
                  </h3>

                  <p className="text-green-700 font-semibold mt-1">
                    ₹
                    {((info?.price || info?.defaultPrice || 0) / 100).toFixed(
                      0,
                    )}
                  </p>

                  {info?.description && (
                    <p className="text-sm text-gray-500 mt-2">
                      {info.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default RestaurantMenu;
