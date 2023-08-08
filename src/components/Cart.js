import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice.js";
import FoodItem from "./Fooditem";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="h-[92vh] border-2 border-blue-200">
            <section className="flex justify-center items-center bg-gray-200">
                <p className="font-semibold text-gray-800 text-xl">
                    Cart Items - {cartItems.length}
                </p>
                <button
                    className="bg-red-500 p-2 m-5 text-white rounded-lg font-semibold hover:bg-red-600 cursor-pointer"
                    onClick={() => handleClearCart()}
                >
                    Clear Cart
                </button>
            </section>
            <div className="flex flex-wrap hover:cursor-pointer">
                {cartItems.map((item) => (
                    <FoodItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};

export default Cart;
