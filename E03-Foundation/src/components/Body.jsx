// Body.jsx is the main section of the app that shows content such as the search bar, filters, and the list of restaurants.

// BODY COMPONENT
// Body.jsx is the main section of the app that shows content such as
// search bar, filters, and the list of restaurants.

import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  // State to store restaurant list
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  // useEffect runs once after component mounts
  useEffect(() => {
    // API call is commented because Swiggy blocks browser requests (CORS)
    // fetchData();
  }, []);

  // Function to fetch data (correct but not used now)
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/city/ranchi/new-frontier-bakery-ran-matwari-rest180485"
      );
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    // Update the new data in setListOfRestaurants();
    setListOfRestaurants(json.info?.cards[2].info?.info?.cards);
  };

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
