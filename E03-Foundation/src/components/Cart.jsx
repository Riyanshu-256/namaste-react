import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import MenuItem from "./MenuItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        {/* 🛒 Heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold flex justify-center items-center gap-2">
            🛒 Cart
          </h1>

          {cartItems.length > 0 && (
            <button
              onClick={() => dispatch(clearCart())}
              className="mt-4 px-6 py-2 rounded-full
             bg-red-100 text-red-600 font-semibold
             hover:bg-red-500 hover:text-white
             transition-all duration-200"
            >
              Clear Cart
            </button>
          )}
        </div>

        {/* 🧾 Cart Items */}
        {cartItems.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <p className="text-xl">
              Your cart is empty. Add Items to the cart!
            </p>
          </div>
        ) : (
          <div className="divide-y">
            {cartItems.map((item, index) => (
              <MenuItem key={index} menuInfo={item} showAddButton={false} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
