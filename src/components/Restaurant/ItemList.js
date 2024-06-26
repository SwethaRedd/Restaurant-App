import React from "react";
import { CDN_URL } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/reduxStore/cartSlice";

const ItemList = ({ items }) => {
  // console.log("items", items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          className="flex justify-between p-2 m-2 border-b-2 text-left"
          key={item.card.info.id}
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}{" "}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                // onClick={handleAddItem} // calling a function
                // onClick={handleAddItem(item)} // calling the function right away
                onClick={() => handleAddItem(item)} // passing a callback function
              >
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              alt="image"
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
