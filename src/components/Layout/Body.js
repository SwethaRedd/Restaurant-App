import RestaurantCard, {
  withPromotedLabel,
} from "../Restaurant/RestaurantCard";
import resList from "../../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "../Shimmer";
import Banner from "../Pages/Banner";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
// https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/77b13d58799f70f670be31e6fe53374e

const Body = () => {
  // State Variable - Super Powerful Variable
  // Hook is normal JS function, given by react , function has logic behind the scenes.

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  // Whenever the state variable is updating, react will trigger the reconcilation cycle(re-renders the component), this makes the react faster.

  const [searchText, setSearchText] = useState("");
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    /* If my CORS plugin is not activated on my browser:
    https://corsproxy.io/
    This cors proxy has some limit / min, so we can use this for dev purposes.
    */
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log("json", json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    // Optional Chaining
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1> You are Offline, Please check your Internet!!</h1>;

  const handleSearch = () => {
    // Filter the restaurant cards and update the UI

    // console.log("I am clicked", searchText);
    const filteredSearch = listOfRestaurants.filter((res) =>
      // console.log(
      //   "res==>",
      //   res.info.name.toLowerCase().includes(searchText.toLowerCase()),
      //   searchText.toLowerCase()
      // )
      res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredSearch);
  };

  const filterTopRestaurants = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.5
    );
    setFilteredRestaurant(filteredList);
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

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            placeholder="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center ">
          <button
            onClick={filterTopRestaurants}
            className="px-4 py-2 bg-gray-100 m-4 rounded-lg "
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      {/* add logic for banner show - config-driven data */}
      <Banner />
      <div className="flex flex-wrap">
        {filteredRestaurant?.map((res) => (
          <>
            {/* {console.log("restaurant card", res)}
            // {"/restaurant/" + res.info.id} */}
            {/* // if the restaurant is promoted then add a promoted label to it */}
            <Link key={res?.info?.id} to={"/restaurant/" + res.info.id}>
              {res?.info?.promoted ? (
                <PromotedRestaurantCard resData={res} />
              ) : (
                <RestaurantCard resData={res} />
              )}
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Body;
