import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import swiggyAPI from "../utils/swiggyAPI.json";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    const menuData = swiggyAPI?.data?.cards
      ?.find((obj) => obj?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((obj) =>
        obj?.card?.card["@type"]?.includes("ItemCategory")
      );

    const organizedMenuData = menuData?.map((item, index) => {
      const card = item?.card?.card;
      return {
        categoryId: card?.categoryId ?? `category-${index}`,
        title: card?.title,
        itemCards: card?.itemCards || [],
      };
    });

    setResInfo(
      swiggyAPI?.data?.cards?.find((item) =>
        item?.card?.card["@type"]?.includes("food.v2.Restaurant")
      )
    );

    setResMenu(organizedMenuData);
  }, []);

  const {
    name,
    cuisines = [],
    costForTwoMessage,
    avgRating,
    sla = {},
    areaName,
  } = resInfo?.card?.card?.info || {};

  if (!resInfo) return <Shimmer />;

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

      {resMenu?.map((category) => (
        <ItemCategory key={category.categoryId} data={category} />
      ))}
    </div>
  );
};

const ItemCategory = ({ data }) => {
  const { title, itemCards } = data;

  return (
    <div className="menu-category">
      <h2 className="category">
        {title} ({itemCards.length})
      </h2>

      <ul className="menuItems">
        {itemCards.map((item, index) => (
          <MenuItem
            key={item?.card?.info?.id ?? index}
            menuInfo={item?.card?.info}
          />
        ))}
      </ul>
    </div>
  );
};

const MenuItem = ({ menuInfo }) => {
  const IMG_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400,h_300,c_fill/";

  const { name, price, description, imageId, ratings = {} } = menuInfo;

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

        <h4>₹{(price / 100)?.toFixed(0)}</h4>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default RestaurantMenu;
