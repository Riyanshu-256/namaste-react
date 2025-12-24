import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuItem = ({ menuInfo, showAddButton = true }) => {
  if (!menuInfo) return null;

  const IMG_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_200,c_fill/";

  const { name, price, description, imageId } = menuInfo;
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(menuInfo));
  };

  return (
    <div className="flex justify-between gap-4 py-6 border-b border-gray-200">
      {/* LEFT */}
      <div className="flex-1 text-left">
        <h4 className="font-semibold text-gray-800">{name}</h4>

        {price && (
          <p className="font-medium mt-1 text-gray-700">
            ₹{(price / 100).toFixed(0)}
          </p>
        )}

        {description && (
          <p className="text-sm text-gray-500 mt-2 line-clamp-2">
            {description}
          </p>
        )}
      </div>

      {/* RIGHT */}
      {imageId && (
        <div className="relative w-[130px] h-[130px] rounded-2xl overflow-hidden shadow-md">
          <img
            src={IMG_URL + imageId}
            alt={name}
            className="w-full h-full object-cover"
          />

          {showAddButton && (
            <button
              className="absolute bottom-3 left-1/2 -translate-x-1/2
                         bg-white text-green-600 font-bold
                         px-6 py-1 rounded-lg shadow"
              onClick={handleAddItem}
            >
              ADD +
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
