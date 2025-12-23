const Cart = ({ cartCount }) => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-xl bg-linear-to-r from-green-600 to-green-500 text-white rounded-xl px-5 py-3 flex justify-between items-center shadow-2xl">
      <span className="font-semibold">
        {cartCount} item{cartCount > 1 && "s"} added
      </span>

      <button className="font-bold tracking-wide">VIEW CART →</button>
    </div>
  );
};

export default Cart;
