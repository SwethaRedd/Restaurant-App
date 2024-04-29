import RestaurantCard from "./Restaurant/RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
// https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/77b13d58799f70f670be31e6fe53374e

const Body = () => {
  // State Variable - Super Powerful Variable
  // Hook is normal JS function, given by react , function has logic behind the scenes.

  // const [state, setstate] = useState(initialState);
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  /*
  conditional rendering:
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  adding this logic below with ternary operation:
  if listOfRestaurants.length === 0 load Shimmer Component
  else the res of the code
*/
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic
            const filteredList = listOfRestaurants.filter(
              (res) =>
                //  console.log('res', res)
                res?.data?.avgRating > 3
            );
            setListOfRestaurants(filteredList);
            // setListOfRestaurants(
            //   (filteredList = listOfRestaurants.filter(
            //     (res) => res.data.avgRating > 4.1
            //   ))
            // );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <>
            {console.log("restaurant", restaurant)}
            <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Body;

{
  /* {console.log("restaurant===>", restaurant.data.filter(if(avgRating>3.5)=>name))} */
}
{
  /* <div className="res-container">
{resList.map((restaurant) => (
  
  <> 
    <RestaurantCard
      key={restaurant.data.id}
      resData={restaurant?.data}
    />
  </>
))}
</div> */
}
