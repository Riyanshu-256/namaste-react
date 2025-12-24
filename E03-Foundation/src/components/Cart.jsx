import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import MenuItem from "./MenuItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-container text-center m-10 p-10">
      <h1 className="text-2xl font-bold mb-6">🛒 Cart</h1>

      {cartItems.length === 0 ? (
        <h2 className="text-lg mt-6">
          Your cart is empty. Add Items to the cart!
        </h2>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <MenuItem key={index} menuInfo={item} />
          ))}

          <button
            onClick={handleClearCart}
            className="mt-6 bg-red-500 text-white px-6 py-2 rounded-lg"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
