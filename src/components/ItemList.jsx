import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/contact";
import { addItem } from "../utils/CartSlice";
const ItemList = ({ items }) => {
  //console.log(items);
  //console.log("FIRST ITEM", items?.[0]);

const dispatch = useDispatch();  

const handleAddItem = (item) => {
  // Dispatch An Action
  dispatch(addItem(item)) // Pizza is action Payload here.
}

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 mb-4 flex justify-between rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}{" "}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          {/* Image Container */}
          <div className="relative">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-24 h-24 rounded-lg object-cover"
            ></img>
            <button className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-2 rounded-lg shadow-lg text-green-600 font-bold cursor-pointer"
            onClick = {() => handleAddItem(item)}>
              ADD+
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
