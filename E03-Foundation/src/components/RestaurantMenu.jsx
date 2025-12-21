import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import ItemCategory from "./ItemCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, resMenu } = useRestaurantMenu(resId);

  if (!resInfo) return <Shimmer />;

  const {
    name,
    cuisines = [],
    costForTwoMessage,
    avgRating,
    sla = {},
    areaName,
  } = resInfo?.card?.card?.info || {};

  return (
    <div className="menu">
      {/* RESTAURANT INFO CARD */}
      <div className="menu-rest-card">
        <h1>{name}</h1>
        <p>{cuisines.join(", ")}</p>
        <span className="rating">{avgRating} ⭐</span>
        <p>{costForTwoMessage}</p>
        <p>
          {sla?.minDeliveryTime}-{sla?.maxDeliveryTime} mins • {areaName}
        </p>
      </div>

      <h3 className="menuTxt">~~~ Menu ~~~</h3>

      {/* {resMenu?.map((category) => (
        <ItemCategory key={category.categoryId} data={category} />
      ))} */}
      {resMenu?.map((category, index) => (
        <ItemCategory
          key={category.categoryId ?? `cat-${index}`}
          data={category}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
