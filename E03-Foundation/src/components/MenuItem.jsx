import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuItem = ({ menuInfo, showAddButton = true }) => {
  if (!menuInfo) return null;

  const IMG_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_200,c_fill/";

  const { name, price, description, imageId } = menuInfo;
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between gap-6 py-6">
      {/* LEFT */}
      <div className="flex-1">
        <h4 className="text-lg font-semibold text-gray-800">{name}</h4>

        {price && (
          <p className="mt-1 text-gray-700 font-medium">
            ₹{(price / 100).toFixed(0)}
          </p>
        )}

        {description && (
          <p className="mt-2 text-sm text-gray-500 line-clamp-2">
            {description}
          </p>
        )}
      </div>

      {/* RIGHT */}
      {imageId && (
        <div className="relative w-[140px]">
          <img
            src={IMG_URL + imageId}
            alt={name}
            className="w-full h-[110px] object-cover rounded-xl shadow"
          />

          {showAddButton && (
            <button
              onClick={() => dispatch(addItem(menuInfo))}
              className="absolute -bottom-3 left-1/2 -translate-x-1/2
                         bg-white border border-gray-300
                         text-green-600 font-bold
                         px-5 py-1 rounded-lg shadow"
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
