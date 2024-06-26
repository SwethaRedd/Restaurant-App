import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);
  //   console.log("props", data);
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className=" w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      {/* Header*/}
      {/* Accordion Body*/}
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length}){" "}
        </span>
        <span> ⬇️ </span>
      </div>
      {/* Header*/}
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
