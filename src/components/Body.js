import RestaurantCard from "./Restaurant/RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
// https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/77b13d58799f70f670be31e6fe53374e

const Body = () => {
  // Normal JS Variable
  let listOfRestaurantsJS = [
    {
      data: {
        id: "610732",
        name: "KFC",
        cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 25,
        cityState: "4",
        address:
          "KFC Restaurant B-2,Rama Part near dwarka more metro station. New Delhi 110059.",
        locality: "Metro Station",
        avgRating: "4.0",
      },
    },
    {
      data: {
        id: "610733",
        name: "Dominos",
        cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 25,
        cityState: "4",
        address:
          "KFC Restaurant B-2,Rama Part near dwarka more metro station. New Delhi 110059.",
        locality: "Metro Station",
        avgRating: "4.5",
      },
    },
  ];
  // State Variable - Super Powerful Variable
  // Hook is normal JS function, given by react , function has logic behind the scenes.

  // const [state, setstate] = useState(initialState);
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  /*
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
 is something similar to this below code- which looks like regular JS
  
  const arr = useState(resList);
  const [listOfRestaurants, setListOfRestaurants] = arr // array destructuring
  const lisOfRestaurants = arr[0];
  const setListOfRestaurants = arr[1];

  */
  useEffect(() => {
    fetchData();
    // console.log("useEffect is Called");
  }, []);

  const fetchData = async () => {
    // console.log("fetch Data");
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
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
            <RestaurantCard
              key={restaurant.data.id}
              resData={restaurant?.data}
            />
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
