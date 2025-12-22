import { useParams } from "react-router-dom";
import { useState } from "react";
import Shimmer from "./Shimmer";
import ItemCategory from "./ItemCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, resMenu } = useRestaurantMenu(resId);

  // ✅ SINGLE OPEN ACCORDION STATE
  const [openIndex, setOpenIndex] = useState(null);

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
    <div className="max-w-[1300px] mx-auto my-[30px] p-[20px] bg-[#f8f8f8]">
      {/* RESTAURANT INFO CARD */}
      <div className="bg-white p-[20px] rounded-xl text-center shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
        <h1 className="text-2xl font-bold text-[#333] mb-1">{name}</h1>
        <p className="text-[#555]">{cuisines.join(", ")}</p>

        <span className="inline-block mt-2 px-2 py-1 rounded-md text-sm text-[#131313]">
          {avgRating} ⭐
        </span>

        <p className="mt-1">{costForTwoMessage}</p>
        <p className="text-sm text-[#666]">
          {sla?.minDeliveryTime}-{sla?.maxDeliveryTime} mins • {areaName}
        </p>
      </div>

      {/* MENU TITLE */}
      <h3 className="bg-[#f9f6f6] px-[30px] py-[12px] rounded-full w-fit mx-auto my-[40px] text-[20px] font-semibold text-[#0d0c0c] shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
        ~~~ Menu ~~~
      </h3>

      {/* MENU CATEGORIES (ACCORDION) */}
      {resMenu?.map((category, index) => (
        <ItemCategory
          key={category.categoryId ?? `cat-${index}`}
          data={category}
          isOpen={index === openIndex}
          onToggle={() => setOpenIndex(index === openIndex ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
