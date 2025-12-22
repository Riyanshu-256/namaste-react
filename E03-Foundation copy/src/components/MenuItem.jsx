const MenuItem = ({ menuInfo }) => {
  const IMG_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400,h_300,c_fill/";

  const { name, price, description, imageId, ratings = {} } = menuInfo;

  return (
    <li className="menu-card">
      {imageId && (
        <img className="menu-card-img" src={IMG_URL + imageId} alt={name} />
      )}

      <div className="menu-card-body">
        <h3>{name}</h3>

        {ratings?.aggregatedRating?.rating && (
          <span className="rating">{ratings.aggregatedRating.rating} ⭐</span>
        )}

        <h4>₹{(price / 100)?.toFixed(0)}</h4>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default MenuItem;
