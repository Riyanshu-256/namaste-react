import MenuItem from "./MenuItem";

const ItemCategory = ({ data }) => {
  const { title, itemCards } = data;

  return (
    // menu-category
    <div className="my-10">
      {/* category */}
      <h2
        className="
          text-[22px]
          text-center
          my-[30px]
          pb-[6px]
          border-b
          border-gray-300
          font-semibold
        "
      >
        {title} ({itemCards.length})
      </h2>

      {/* menuItems */}
      <ul
        className="
          flex
          flex-wrap
          gap-[25px]
          justify-center
          list-none
          p-0
        "
      >
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

export default ItemCategory;
