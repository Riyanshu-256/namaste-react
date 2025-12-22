import MenuItem from "./MenuItem";

const ItemCategory = ({ data, isOpen, onToggle }) => {
  const { title, itemCards } = data;

  return (
    <div className="my-10 bg-white rounded-xl shadow-md overflow-hidden">
      {/* CATEGORY HEADER */}
      <div
        onClick={onToggle}
        className="
          flex
          justify-between
          items-center
          px-[20px]
          py-[16px]
          cursor-pointer
          hover:bg-gray-100
          transition
        "
      >
        <h2 className="text-[22px] font-semibold">
          {title} ({itemCards.length})
        </h2>

        {/* ARROW */}
        <span
          className={`
            transition-transform
            duration-300
            ${isOpen ? "rotate-180" : "rotate-0"}
          `}
        >
          ▼
        </span>
      </div>

      {/* MENU ITEMS (ACCORDION BODY) */}
      {isOpen && (
        <ul
          className="
            flex
            flex-wrap
            gap-[25px]
            justify-center
            list-none
            p-[20px]
          "
        >
          {itemCards.map((item, index) => (
            <MenuItem
              key={item?.card?.info?.id ?? index}
              menuInfo={item?.card?.info}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemCategory;
