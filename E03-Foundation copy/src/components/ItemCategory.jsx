import MenuItem from "./MenuItem";

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

export default ItemCategory;
