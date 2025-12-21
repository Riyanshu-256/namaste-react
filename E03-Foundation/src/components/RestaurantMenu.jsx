import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) return <Shimmer />;

  const {
    name,
    cuisines = [],
    avgRating,
    costForTwoMessage,
    sla,
    areaName,
    categories = [],
  } = resInfo;

  return (
    <div className="menu">
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

      {categories?.map((category) => (
        <ItemCategory key={category.categoryId} data={category} />
      ))}
    </div>
  );
};

const ItemCategory = ({ data }) => {
  const { title, itemCards = [] } = data;

  return (
    <div className="menu-category">
      <h2 className="category">
        {title} ({itemCards.length})
      </h2>

      <ul className="menuItems">
        {itemCards.map((item) => (
          <MenuItem key={item?.card?.info?.id} menuInfo={item?.card?.info} />
        ))}
      </ul>
    </div>
  );
};

const MenuItem = ({ menuInfo }) => {
  if (!menuInfo) return null;

  const IMG_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400,h_300,c_fill/";

  const {
    name,
    price,
    defaultPrice,
    description,
    imageId,
    ratings = {},
  } = menuInfo;

  return (
    <li className="menu-card">
      {imageId && (
        <img className="menu-card-img" src={IMG_URL + imageId} alt={name} />
      )}

      <div className="menu-card-body">
        <h3>{name}</h3>

        {ratings?.aggregatedRating?.rating && (
          <span className="rating">{ratings.aggregatedRating.rating} ⭐</span>
        )}

        {(price || defaultPrice) && (
          <h4>₹{((price ?? defaultPrice) / 100).toFixed(0)}</h4>
        )}

        {description && <p>{description}</p>}
      </div>
    </li>
  );
};

export default RestaurantMenu;
