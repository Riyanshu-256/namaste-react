const Cart = ({ cartCount }) => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[700px] bg-green-600 text-white rounded-xl px-5 py-3 flex justify-between items-center shadow-xl">
      <span className="font-semibold">{cartCount} item added</span>
      <button className="font-bold">VIEW CART →</button>
    </div>
  );
};

export default Cart;
