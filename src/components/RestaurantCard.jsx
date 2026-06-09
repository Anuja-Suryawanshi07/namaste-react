const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    sla,
  } = resData?.info || {};

  const CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  return (
    <div className="w-full max-w-[280px] h-full rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
      <img
        className="w-full h-40 sm:h-44 md:h-48 object-cover"
        alt={name}
        src={CDN_URL + cloudinaryImageId}
      />

      <div className="p-4">
  <h2 className="text-lg sm:text-xl font-extrabold text-gray-900 truncate">
    {name}
  </h2>

  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
    🍽️ {cuisines?.join(", ")}
  </p>

  <div className="flex justify-between items-center mt-4">
    <span className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-bold">
      ⭐ {avgRating}
    </span>

    <span className="text-sm font-semibold text-gray-700">
      ⏱️ {sla?.deliveryTime} mins
    </span>
  </div>
</div>
    </div>
  );
};

export default RestaurantCard;