// Restaurant Card

import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const info = resData?.info;

  return (
    <div className="rest-card">
      <img className="card1-img" src={CDN_URL + info?.cloudinaryImageId} />

      <h3>{info?.name}</h3>
      <h4>{info?.cuisines?.join(", ")}</h4>
      <h4>{info?.avgRating ?? info?.avgRatingString} ⭐</h4>
      <h4>{info?.costForTwo}</h4>
      <h4>{info?.sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
