const MenuItem = ({ menuInfo, addToCart }) => {
  const IMG_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_200,c_fill/";

  const { name, price, description, imageId, itemAttribute } = menuInfo;
  const isVeg = itemAttribute?.vegClassifier === "VEG";

  return (
    <div className="flex justify-between gap-4 py-6 border-y border-gray-200">
      {/* LEFT */}
      <div className="flex-1">
        <h4 className="font-semibold text-gray-800">{name}</h4>

        <p className="font-medium mt-1 text-gray-700">
          ₹{(price / 100).toFixed(0)}
        </p>

        {description && (
          <p className="text-sm text-gray-500 mt-2 line-clamp-2">
            {description}
          </p>
        )}
      </div>

      {/* RIGHT */}
      {imageId && (
        <div className="relative w-[130px] h-[130px] overflow-hidden rounded-2xl group shadow-md hover:shadow-xl transition">
          {/* IMAGE */}
          <img
            src={IMG_URL + imageId}
            alt={name}
            className="w-full h-full object-cover rounded-2xl transition duration-300 group-hover:scale-110"
          />

          {/* DARK OVERLAY ON HOVER */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition"></div>

          {/* ADD BUTTON */}
          <button
            onClick={addToCart}
            className="
              absolute bottom-3 left-1/2 -translate-x-1/2
              bg-white text-green-600 font-bold
              px-6 py-1 rounded-lg
              shadow-md hover:shadow-lg
            "
          >
            ADD +
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
