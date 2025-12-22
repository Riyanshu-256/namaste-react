// RestaurantCard.jsx is a reusable component that displays details of a single restaurant like image, name, rating, and cuisine, and is used multiple times in Body.jsx.

// Restaurant Card Component
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const info = resData?.info;

  return (
    // rest-card
    <div className="m-4 p-4 w-[200px]">
      <img className="card1-img" src={CDN_URL + info?.cloudinaryImageId} />

      <h3>{info?.name}</h3>
      <h4>{info?.cuisines?.join(", ")}</h4>
      <h4>{info?.avgRating ?? info?.avgRatingString} ⭐</h4>
      <h4>{info?.costForTwo}</h4>
      <h4>{info?.sla?.deliveryTime} minutes</h4>
    </div>
  );
};

// HIGHER ORDER COMPONENT => Adding prom oted label in RestaurantCard at the top

// input - RestaurantCard ==>> RestaurantCardPromoted
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="promote">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
