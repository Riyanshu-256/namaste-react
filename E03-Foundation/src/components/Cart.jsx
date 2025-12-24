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
    <div className="cart-container m-10 p-10 text-center">
      {/* 🛒 Cart Heading */}
      <h1 className="text-2xl font-bold mb-3">🛒 Cart</h1>

      {/* 🔴 Clear Cart (just below heading, centered) */}
      {cartItems.length > 0 && (
        <button
          onClick={handleClearCart}
          className="mb-6 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
        >
          Clear Cart
        </button>
      )}

      {/* 🛒 Cart Items */}
      {cartItems.length === 0 ? (
        <h2 className="text-lg mt-6">
          Your cart is empty. Add Items to the cart!
        </h2>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <MenuItem key={index} menuInfo={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
