import ItemList from "./ItemList";

const RestauratCategory = ({ data, showItems, setShowIndex }) => {
  console.log("DATA", data);

  if (!data) {
    return <div>Loading...</div>;
  }
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/*Accordion Header */}
      <div className="w-full mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length || 0})
          </span>
          <span
            className={`text-2xl transition-transform ${
              showItems ? "rotate-180" : ""
            }`}
          >
            ⌄
          </span>
        </div>
        {/*Accordion Body */}
        {showItems && <ItemList items={data.itemCards || []} />}
      </div>
    </div>
  );
};
export default RestauratCategory;
