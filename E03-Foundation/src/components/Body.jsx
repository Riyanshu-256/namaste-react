// Body.jsx is the main section of the app that shows content such as the search bar, filters, and the list of restaurants.

// BODY COMPONENT
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

// BODY COMPONENT => This component is responsible for rendering the UI
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

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

// useEffect Hook -> It is a function which contain 2 argument => 1. callback(arrow function) function   2. dependency array []
useEffect(() => {
  console.log("useEffect called");
}, []);

export default Body;
