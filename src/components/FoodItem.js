import { IMG_CDN_URL } from "../config";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const FoodItem = ({ name, imageId, description, price, id, item }) => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const addFoodItem = (item) => {
        dispatch(addItem(item));
    };

    const removeFoodItem = (item) => {
        dispatch(removeItem(item));
    };

    return (
        <div className="w-auto h-36 items-center border-2 border-gray-100 rounded-xl m-3 p-3 shadow-lg hover:shadow-xl hover:border-gray-300  flex flex-row justify-evenly gap-1 bg-white">
            <img
                className="w-44 h-28 rounded-xl overflow-hidden"
                src={IMG_CDN_URL + imageId}
                alt="img"
            />
            <section className="flex">
                <section className="flex flex-row">
                    <section>
                        <p className="font-semibold w-40 text-base hover:cursor-pointer whitespace-nowrap text-ellipsis overflow-hidden">
                            {name}
                        </p>

                        <h5 className="font-medium m-1 text-sm underline">
                            ₹{price / 100}
                        </h5>
                    </section>
                </section>

                <section className="bg-white rounded-lg flex items-center justify-between mx-3">
                    <section>
                        <button
                            className="bg-red-500 rounded-lg text-white font-bold hover:bg-red-600 px-3 py-2 select-none"
                            onClick={() => removeFoodItem(item)}
                        >
                            {"-"}
                        </button>
                        <span className="select-none mx-3 font-bold">
                            {cartItems.filter((food) => food.id === id).length}
                        </span>
                        <button
                            className="bg-red-500 rounded-lg text-white font-bold hover:bg-red-600 px-3 py-2 select-none"
                            onClick={() => addFoodItem(item)}
                        >
                            {"+"}
                        </button>
                    </section>
                </section>
            </section>
        </div>
    );
};

export default FoodItem;
