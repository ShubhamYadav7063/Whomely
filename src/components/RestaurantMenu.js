import { useParams } from "react-router-dom";
import { IMG_CDN_URL, ITEM_IMG_CDN_URL } from "../config";
import star from "../assets/img/star.png";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const RestaurantMenu = () => {
    const resId = useParams();

    const [restaurant, restaurantMenu] = useRestaurantMenu(resId.id);

    const dispatch = useDispatch();

    const cartItems = useSelector((store) => store.cart.items);

    const addFoodItem = (item) => {
        dispatch(addItem(item));
    };

    const removeFoodItem = (item) => {
        dispatch(removeItem(item));
    };

    // const quantityButton = (id)

    // console.log(restaurantMenu[0].id);

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center m-10 w-96 gap-2 bg-white p-4 rounded-lg shadow-md">
                {/* <h1>Restaurant id: {resId.id}</h1> */}
                <img
                    className="rounded-lg w-96"
                    src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
                />
                <section className="flex justify-between">
                    <h2 className="text-2xl font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                        {restaurant?.name}
                    </h2>
                    <h3
                        className={`${
                            restaurant?.avgRating <= "3"
                                ? "bg-red-500"
                                : restaurant?.avgRating >= "4"
                                ? "bg-green-500"
                                : "bg-orange-500"
                        } p-0.5 w-12 flex items-center justify-evenly rounded text-white text-sm font-semibold m-2`}
                    >
                        {restaurant?.avgRating}
                        <img src={star} className="w-3" alt="stars" />
                    </h3>
                </section>

                <section className="flex justify-between ">
                    <h3>
                        {restaurant?.areaName}, {restaurant?.city}
                    </h3>
                    <h3 className="underline">
                        {restaurant?.costForTwoMessage}
                    </h3>
                </section>
            </div>
            {/*  
      
      
      */}
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-4xl select-none m-10 text-red-500">
                    Menu ({restaurantMenu.length} items)
                </h1>
                <ul className="flex flex-col items-center">
                    {restaurantMenu.map((item) => (
                        <div
                            className="flex flex-row justify-between border-t-2 items-center border-b-2 p-4 w-full bg-white cursor-pointer"
                            key={item?.id}
                        >
                            <section className="p-10 pl-0 flex flex-col gap-3">
                                <section className="flex items-start justify-between gap-1">
                                    <h3 className="font-semibold w-48 hover:underline">
                                        {item?.name}
                                    </h3>
                                    <p className="item-cost text-gray-800 font-bold">
                                        {item?.price > 0
                                            ? new Intl.NumberFormat("en-IN", {
                                                  style: "currency",
                                                  currency: "INR",
                                              }).format(item?.price / 100)
                                            : " "}
                                        /-
                                    </p>
                                </section>

                                <p className="text-ellipsis w-80 overflow-hidden whitespace-nowrap hover:whitespace-normal text-sm">
                                    {item?.description}
                                </p>
                            </section>
                            <section className="flex flex-col items-center justify-center">
                                <img
                                    src={ITEM_IMG_CDN_URL + item.imageId}
                                    className="w-48 rounded-lg h-40 -z-1"
                                />
                                {cartItems.filter((food) => food.id === item.id)
                                    .length === 0 ? (
                                    <button
                                        className="relative -top-4 bg-red-500 py-2 px-3 w-2/5 rounded-lg -m-2 text-white font-bold text-sm hover:bg-red-600"
                                        onClick={() => {
                                            addFoodItem(item);
                                        }}
                                    >
                                        ADD +
                                    </button>
                                ) : (
                                    <section className="relative -top-4 bg-white rounded-lg -m-2">
                                        <button
                                            className="bg-red-500 rounded-lg text-white font-bold hover:bg-red-600 px-3 py-2 select-none "
                                            onClick={() => removeFoodItem(item)}
                                        >
                                            {"-"}
                                        </button>
                                        <span className="select-none mx-3 px-1 py-2 font-bold">
                                            {
                                                cartItems.filter(
                                                    (food) =>
                                                        food.id === item.id
                                                ).length
                                            }
                                        </span>
                                        <button
                                            className="bg-red-500 rounded-lg text-white font-bold hover:bg-red-600 px-3 py-2 select-none"
                                            onClick={() => addFoodItem(item)}
                                        >
                                            {"+"}
                                        </button>
                                    </section>
                                )}
                            </section>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;
