const MenuItem = ({ menuInfo }) => {
  const IMG_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400,h_300,c_fill/";

  const { name, price, description, imageId, ratings = {} } = menuInfo;

  return (
    <li className="w-[280px] bg-[#ffffff] rounded-[12px] overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {imageId && (
        <img
          className="w-full h-[180px] object-cover"
          src={IMG_URL + imageId}
          alt={name}
        />
      )}

      <div className="p-[14px] text-center">
        <h3 className="text-[17px] text-[#333] font-semibold">{name}</h3>

        {ratings?.aggregatedRating?.rating && (
          <span className="inline-block text-[13px] text-[#131313] px-[8px] py-[4px] rounded-[6px] my-[6px] bg-gray-100">
            {ratings.aggregatedRating.rating} ⭐
          </span>
        )}

        <h4 className="text-[14px] text-[#686b78] font-medium mt-1">
          ₹{(price / 100)?.toFixed(0)}
        </h4>

        <p className="text-[13px] text-[#777] mt-2 line-clamp-2">
          {description}
        </p>
      </div>
    </li>
  );
};

export default MenuItem;
