import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-7xl mx-auto pt-32">
      <h1 className="font-bold text-3xl p-3">
        {" "}
        Cart Items - {cartItems.length}
      </h1>
      <button
        className="bg-green-100 p-2 m-5 rounded-lg"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <div className="flex">
        {cartItems.map((item) => (
          <FoodItem key={item?.card?.info?.id} {...item?.card?.info} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
