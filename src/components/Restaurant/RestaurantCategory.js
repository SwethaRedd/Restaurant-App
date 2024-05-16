import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  //   console.log("props", data);
  return (
    <div className=" w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      {/* Header*/}
      {/* Accordion Body*/}
      <div className="flex justify-between">
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length}){" "}
        </span>
        <span> ⬇️ </span>
      </div>
      {/* Header*/}
      <ItemList items={data.itemCards} />
    </div>
  );
};

export default RestaurantCategory;
