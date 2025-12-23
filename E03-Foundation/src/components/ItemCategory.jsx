import MenuItem from "./MenuItem";

const ItemCategory = ({ data, isOpen, onToggle, addToCart }) => {
  const { title, itemCards } = data;

  return (
    <div className="border-b last:border-none">
      {/* Header */}
      <div
        className="flex justify-between items-center px-5 py-4 cursor-pointer hover:bg-gray-50"
        onClick={onToggle}
      >
        <h2 className="text-lg font-semibold text-gray-800">
          {title} ({itemCards.length})
        </h2>

        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ⌵
        </span>
      </div>

      {/* Accordion Body */}
      {isOpen && (
        <div className="px-5 pb-4">
          {itemCards.map((item, index) => (
            <MenuItem
              key={item?.card?.info?.id ?? index}
              menuInfo={item?.card?.info}
              addToCart={addToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemCategory;
