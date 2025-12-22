const MenuItem = ({ menuInfo, addToCart }) => {
  const IMG_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_200,c_fill/";

  const { name, price, description, imageId, itemAttribute } = menuInfo;
  const isVeg = itemAttribute?.vegClassifier === "VEG";

  return (
    <div className="flex justify-between gap-4 py-6 border-b last:border-none">
      {/* Left */}
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span
            className={`w-3 h-3 rounded-full ${
              isVeg ? "bg-green-600" : "bg-red-600"
            }`}
          />
          <h4 className="font-semibold text-gray-800">{name}</h4>
        </div>

        <p className="font-medium mt-1 text-gray-700">
          ₹{(price / 100).toFixed(0)}
        </p>

        {description && (
          <p className="text-sm text-gray-500 mt-2 line-clamp-2">
            {description}
          </p>
        )}
      </div>

      {/* Right */}
      <div className="relative min-w-[120px]">
        {imageId && (
          <img
            src={IMG_URL + imageId}
            alt={name}
            className="w-[120px] h-[120px] rounded-xl object-cover"
          />
        )}

        <button
          onClick={addToCart}
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-green-600 font-bold px-6 py-1 rounded-lg shadow"
        >
          ADD +
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
