import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice.js";
import FoodItem from "./FoodItem";
import cart from "../assets/img/emptyCart.png";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="h-[92vh] ">
            {cartItems.length === 0 ? (
                <div className="flex flex-col justify-center items-center h-[80vh]">
                    <img
                        src={cart}
                        alt="Cart is empty"
                        className="h-32 w-32 m-5"
                    />
                    <span className="text-2xl select-none">
                        Your cart is empty.
                    </span>
                </div>
            ) : (
                <>
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
                            <FoodItem key={item.id} {...item} item={item} />
                            // (...item) means it passes all the properties of the items in food items
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
