// Body.jsx is the main section of the app that shows content such as the search bar, filters, and the list of restaurants.

// BODY COMPONENT
// Body.jsx is the main section of the app that shows content such as
// search bar, filters, and the list of restaurants.

import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  // State to store restaurant list
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  // useEffect runs once after component mounts
  useEffect(() => {
    // API call is commented because Swiggy blocks browser requests (CORS)
    fetchData();
  }, []);

  // Function to fetch data (correct but not used now)
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.653564&lng=88.4450847&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      const restaurantsData =
        json?.data?.cards?.find((item) =>
          item?.card?.card?.id?.includes("restaurant_grid_listing_v2")
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      console.log(json);
      console.log(restaurantsData);

      // Update the new data in setListOfRestaurants();
      setListOfRestaurants(restaurantsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Conditional Rendering => Render according to the condition
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="rest-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
