import { useEffect, useState } from "react";
import MENU_MAP from "./api";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    // 🔴 IMPORTANT FIX: resId is string, MENU_MAP keys are numbers
    const menuData = MENU_MAP[Number(resId)];
    if (!menuData) return;

    const cards = menuData?.data?.cards;

    // ✅ Restaurant basic info
    const restaurantInfo = cards?.find(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    )?.card?.card?.info;

    // ✅ Menu categories (ACTUAL menu)
    const categories = cards
      ?.filter(
        (c) =>
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
      ?.map((c) => c.card.card);

    setResInfo({
      ...restaurantInfo,
      categories,
    });
  }, [resId]);

  return resInfo;
};

export default useRestaurantMenu;
