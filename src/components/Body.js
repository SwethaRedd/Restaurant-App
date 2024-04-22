import RestaurantCard from "./Restaurant/RestaurantCard";
import resList from "../utils/mockData";

// https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/77b13d58799f70f670be31e6fe53374e

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant?.data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
