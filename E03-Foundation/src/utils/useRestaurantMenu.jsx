import { useEffect, useState } from "react";
import { MENU_MAP } from "./api";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const menuData = MENU_MAP[resId];

    if (!menuData) {
      setResInfo(null);
      return;
    }

    const cards = menuData?.data?.cards;

    // Restaurant info
    const restaurantInfo = cards?.find(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    )?.card?.card?.info;

    // Menu categories
    const menuCategories =
      cards?.find(
        (c) =>
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Menu"
      )?.card?.card?.categories || [];

    setResInfo({
      ...restaurantInfo,
      categories: menuCategories,
    });
  }, [resId]);

  return resInfo;
};

export default useRestaurantMenu;
