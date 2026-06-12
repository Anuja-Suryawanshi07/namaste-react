import ItemList from "./ItemList";
import { useState } from "react";

const RestauratCategory = (data) => {
    //console.log(data)
    const[showItems, setShowItems] = useState(false);
    const handleClick= () =>{
        setShowItems(!showItems);
    }

    return <div>
        {/*Accordion Header */}
        <div key={data.categoryId} className="w-full mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">{data.data.title}({data.data.itemCards.length})</span>
            <span className="text-2xl">🔽</span>
            </div>
            {/*Accordion Body */}
            {showItems && <ItemList items={data.data.itemCards} />}

        </div>
        
    </div>
}
export default RestauratCategory;